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
import { ScrollArea } from "@/components/ui/scroll-area";

const SpeechRecognitionApi =
  typeof window !== "undefined"
    ? window?.SpeechRecognition ||
      (window as any)?.webkitSpeechRecognition ||
      null
    : null;
// Skeleton Text Loader Component
const SkeletonTextLoader = () => {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="flex items-center gap-2">
        {/* <div className="w-2 h-2 bg-gray-400 rounded-full" /> */}
        <figure className="w-8 h-8 p-0.5 rounded-full bg-zinc-50 border">
          <img src="/logo.png" alt="logo" className="w-full h-full" />
        </figure>
        <span className="text-base font-medium text-gray-700">
          JENV.AI is thinking...
        </span>
      </div>
      <div className="space-y-2 mt-2">
        {[85, 92].map((width, idx) => (
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
  // Add this new useEffect after the existing speech recognition useEffect
  useEffect(() => {
    // Auto-scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector(
        "[data-radix-scroll-area-viewport]"
      );
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [chatMessages, loading]);
  useEffect(() => {
    if (!SpeechRecognitionApi) return;

    const recognitionInstance = new SpeechRecognitionApi();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    recognitionInstance.lang = "en-US";

    recognitionInstance.onresult = (event: any) => {
      let finalTranscript = "";
      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
      setQuery(finalTranscript + interimTranscript);
    };

    recognitionInstance.onend = () => setIsListening(false);
    recognitionInstance.onerror = () => setIsListening(false);

    setRecognition(recognitionInstance);
  }, []);

  const handleSuggestionClick = (suggestionQuery: string) => {
    setQuery(suggestionQuery + " ");
    textareaRef.current?.focus();
  };

  const handleVoiceToggle = () => {
    if (!SpeechRecognitionApi || !recognition) {
      alert("Speech recognition is not supported in your browser");
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
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
    <section className="pt-32 pb-20 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="p-8 rounded-3xl border border-neutral-900 w-full max-w-4xl sm:p-12 relative overflow-hidden">

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-librecaslon text-4xl sm:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Get instant answers to your questions about our AI solutions
            </p>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <ScrollArea
              ref={scrollAreaRef}
              className={cn(
                "w-full max-w-2xl mx-auto py-5 overflow-auto pr-2",
                chatMessages.length > 0 ? "h-[26rem]" : "h-0"
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
                      message.type === "user" ? "justify-start" : "justify-end"
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
                              <figure className="w-8 h-8 p-0.5 rounded-full bg-white border">
                                <img
                                  src="/logo.png"
                                  alt="logo"
                                  className="w-full h-full"
                                />
                              </figure>
                              <CardTitle className="text-sm font-semibold text-gray-50">
                                JENV.AI Response
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
            </ScrollArea>
            <div className="h-10 w-full bg-gradient-to-b from-background to-transparent absolute -top-0 left-0 z-20"></div>
            <div className="h-10 w-full bg-gradient-to-t from-background to-transparent absolute -bottom-0 left-0 z-20"></div>
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
                  {isListening && (
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 px-4 h-10 bg-red-600 text-white rounded-full">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-sm">Listening...</span>
                      </div>
                    </div>
                  )}
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={handleVoiceToggle}
                    className={`h-10 w-10 rounded-lg cursor-pointer ${
                      isListening
                        ? "bg-red-600 hover:bg-red-700 text-white hover:text-white"
                        : "text-zinc-600 hover:text-white hover:bg-zinc-800"
                    }`}
                  >
                    {isListening ? (
                      <X className="h-4 w-4" />
                    ) : (
                      <Mic className="h-4 w-4" />
                    )}
                  </Button>

                  {!isListening && (
                    <Button
                      type="submit"
                      size="icon"
                      className="h-10 w-12 rounded-lg hover:shadow-sm shadow-none bg-zinc-50 border text-black hover:bg-zinc-50 cursor-pointer"
                      disabled={!query.trim()}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
