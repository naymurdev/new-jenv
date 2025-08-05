"use client";

import type React from "react";
import { useState } from "react";
import { Lock, Eye, EyeOff, Shield } from "lucide-react";
import { useLockStore } from "@/store/lock-store";
import { generateSecureToken } from "@/lib/utils";
import HorizontalFlowBars from "./horizontal-flow-bar";

export default function PinLock() {
  const [pin, setPin] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const setToken = useLockStore((state) => state.setToken);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate a small delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    const correctPassword = process.env.NEXT_PUBLIC_PIN_PASSWORD || "";

    if (pin === correctPassword) {
      // Generate secure token only after successful verification
      const secureToken = generateSecureToken(correctPassword);
      setToken(secureToken);

      // Clear the PIN input for security
      setPin("");
    } else {
      setError("Incorrect PIN. Please try again.");
      setPin("");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md shadow-2xl bg-black/20 backdrop-blur-xl p-4 rounded-xl border border-neutral-800 relative z-[2]">
        <div className="text-center">
          <img src="./lock.png" alt="lock" className="w-20 mx-auto" />
          <h1 className="text-3xl font-bold text-white">Secure Access</h1>
          <p className="text-gray-200">
            Enter your Password to generate a secure access token
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="relative">
              <input
                type={showPin ? "text" : "password"}
                placeholder="Enter your Password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="pr-12 h-12 rounded-md mb-2 w-full pl-2 text-lg text-white bg-neutral-800"
                disabled={isLoading}
                autoComplete="off"
              />
              <button
                type="button"
                className="absolute right-0.5 top-1.5 h-10 w-10 outline-none"
                onClick={() => setShowPin(!showPin)}
                disabled={isLoading}
              >
                {showPin ? (
                  <EyeOff className="h-5 w-5 text-white" />
                ) : (
                  <Eye className="h-5 w-5 text-white" />
                )}
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-600 text-center font-medium">
                  {error}
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full h-12 text-lg font-semibold rounded-lg text-center text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              disabled={!pin || isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating Token...</span>
                </div>
              ) : (
                <div className=" ">
                  <span>Generate Access Token</span>
                </div>
              )}
            </button>
          </form>

          {/* <div className="mt-6 space-y-3">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-800 text-center">
                <strong>Security Notice:</strong> A unique token will be generated and stored securely
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <p className="text-xs text-amber-800 text-center">Manual state manipulation is protected against</p>
            </div>
          </div> */}
        </div>
      </div>
      <HorizontalFlowBars />
    </div>
  );
}
