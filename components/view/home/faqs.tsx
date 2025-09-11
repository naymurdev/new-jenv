"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Loader2, Mic, Plus, X, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Zap, ImageIcon, MoreHorizontal } from "lucide-react";
import BuildingIconLink from "@/components/icons/building";
import TargetIconLink from "@/components/icons/target";
import HandshakeIconLink from "@/components/icons/handshake";
import { AnimatePresence, motion } from "motion/react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const SpeechRecognitionApi =
  typeof window !== "undefined"
    ? (window as any)?.SpeechRecognition ||
      (window as any)?.webkitSpeechRecognition ||
      null
    : null;
const SkeletonTextLoader = () => {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="flex items-center gap-2">
        <span className="text-base font-medium text-gray-700">
          JENNY is thinking...
        </span>
      </div>
      <div className="space-y-2 mt-2">
        {[85, 90].map((width, idx) => (
          <div
            key={idx}
            className="h-4 rounded bg-gradient-to-r py-3 my-3 from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.6s_ease-in-out_infinite]"
            style={{ width: `${width}%` }}
          />
        ))}
      </div>
    </div>
  );
};
interface ChatMessage {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
}

export default function FaqQueryAgent() {
  const [query, setQuery] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  const suggestions = [
    {
      icon: BuildingIconLink,
      text: "Company",
      query: "what your company does?",
    },
    {
      icon: HandshakeIconLink,
      text: "Negotiation",
      query: "What is the negotiation strategy?",
    },
    {
      icon: TargetIconLink,
      text: "Current Project",
      query: "What is the current project you guys working on?",
    },
  ];
  function scrollToBottom(smooth = true) {
    const viewport = scrollAreaRef.current?.querySelector(
      "[data-radix-scroll-area-viewport]"
    ) as HTMLElement | null;

    if (viewport) {
      viewport.scrollTo({
        top: viewport.scrollHeight,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  }

  // disable browser's own scroll restore (prevents jumping on refresh)
  useEffect(() => {
    if ("scrollRestoration" in history) {
      const prev = history.scrollRestoration;
      history.scrollRestoration = "manual";
      return () => {
        history.scrollRestoration = prev;
      };
    }
  }, []);

  // only auto-scroll after first render (i.e., when messages actually change)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return; // don't scroll on initial mount
    }
    const id = requestAnimationFrame(() => scrollToBottom(!loading));
    return () => cancelAnimationFrame(id);
  }, [chatMessages, loading]);

  const handleSuggestionClick = (suggestionQuery: string) => {
    setQuery(suggestionQuery + " ");
    textareaRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e as any);
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setChatMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        type: "user",
        content: query,
        timestamp: new Date(),
      },
    ]);
    setResponse("");
    setQuery("");

    try {
      const res = await fetch(
        "https://jenvfaqagent-788273764811.us-central1.run.app/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_query: query }),
        }
      );
      const data = await res.json();
      if (data.response) {
        console.log(data.response);

        setResponse(data.response);
        setChatMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            type: "ai",
            content: data.response,
            timestamp: new Date(),
          },
        ]);
      }
    } catch (error) {
      setResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-32 pb-20 flex justify-center px-4 sm:px-6 lg:px-8 relative">
      <motion.img
        src="/rotate-bg.png"
        alt=""
        className="absolute 2xl:-bottom-96 left-0 w-full"
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 1 }}
      />
      <div className="p-8 rounded-3xl w-full max-w-4xl sm:p-12 relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-librecaslon text-4xl sm:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
              The Anti-FAQ
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
              No dropdowns. No walls of text. Just Jenny, our AI assistant,
              answering whatever’s on your mind.
            </p>
          </div>
          {/* <ul>
            <li>What's Your Typeical Project Size</li>
            <li>What's Your Typeical Project Size</li>
            <li>What's Your Typeical Project Size</li>
          </ul> */}
          <div className="relative max-w-2xl mx-auto" data-lenis-prevent>
            <ScrollArea
              ref={scrollAreaRef}
              data-lenis-prevent
              className={cn(
                "w-full max-w-2xl mx-auto py-5 pr-2",
                chatMessages.length > 2 ? "h-[26rem]" : "h-auto"
              )}
            >
              <AnimatePresence>
                {chatMessages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`mb-4 flex ${
                      message.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {message.type === "user" ? (
                      <div className="bg-orange-500  text-white p-2 px-3 rounded-2xl rounded-bl-none shadow-sm max-w-xs">
                        <p className="text-sm leading-relaxed">
                          {message.content}
                        </p>
                      </div>
                    ) : (
                      <div className="max-w-sm">
                        <Card className="shadow-none border border-neutral-700 gap-2 bg-neutral-950 p-3 rounded-br-none">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <CardTitle className="text-sm font-semibold text-gray-50">
                                JENNY Response
                              </CardTitle>
                            </div>
                          </div>
                          <CardContent className="p-0 ">
                            <div className="prose prose-gray max-w-none">
                              <p className="text-gray-50 leading-relaxed whitespace-pre-line text-sm">
                                {message.content}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading indicator */}
              <AnimatePresence>
                {loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="mb-2 flex justify-end"
                  >
                    <div className="w-[24rem]">
                      <Card className="shadow-none border-none bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-gray-200 p-0">
                        <CardContent className="p-5">
                          <SkeletonTextLoader />
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
            {/* <div className="h-10 w-full bg-gradient-to-b from-background to-transparent absolute -top-0 left-0 z-20"></div> */}
            {/* <div className="h-10 w-full bg-gradient-to-t from-background to-transparent absolute -bottom-0 left-0 z-20"></div> */}
          </div>

          <div className="w-full space-y-2 mx-auto relative">
            <form
              onSubmit={handleSubmit}
              className="relative bg-neutral-950 p-3 rounded-xl border border-zinc-900"
            >
              <textarea
                ref={textareaRef}
                placeholder="Ask anything JENV"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full min-h-14 px-2 text-white text-lg outline-0 placeholder-zinc-700 rounded-xl focus:ring-0 focus:border-transparent resize-none"
                rows={1}
              />
              <div className="flex items-end gap-3 justify-between">
                <div className="flex items-center gap-2 justify-center">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-2 h-8 bg-neutral-900 text-white rounded-lg text-xs flex items-center cursor-pointer transition-colors "
                      onClick={() => handleSuggestionClick(suggestion.query)}
                    >
                      <suggestion.icon
                        className="w-4 h-4 mr-1"
                        title={suggestion.text}
                      />
                    </div>
                  ))}
                </div>

                <div className=" flex items-center gap-2">
                  <Button
                    type="submit"
                    size="icon"
                    className="h-10 w-12 rounded-lg hover:shadow-sm shadow-none bg-zinc-50 border text-black hover:bg-zinc-50 cursor-pointer"
                    disabled={!query.trim()}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
