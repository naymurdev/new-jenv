"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { useLockStore } from "@/store/lock-store";
import { validateToken } from "@/lib/utils";
import PinLock from "./pin-lock";
import { LogOut } from "lucide-react";
import HorizontalFlowBars from "./horizontal-flow-bar";

interface ProtectedWrapperProps {
  children: React.ReactNode;
}

export default function ProtectedWrapper({ children }: ProtectedWrapperProps) {
  const [isValidating, setIsValidating] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { token, clearToken, isValidSession } = useLockStore();

  useEffect(() => {
    const validateAccess = async () => {
      setIsValidating(true);

      // First check if we have a valid session format
      if (!isValidSession()) {
        console.log("Invalid session format");
        setIsAuthorized(false);
        setIsValidating(false);
        return;
      }

      // Get the environment password
      const envPassword = process.env.NEXT_PUBLIC_PIN_PASSWORD || "helloworld";

      // Validate the token against the environment password
      const isValid = validateToken(token!, envPassword);

      if (!isValid) {
        // Clear invalid token
        clearToken();
        setIsAuthorized(false);
      } else {
        setIsAuthorized(true);
      }

      setIsValidating(false);
    };

    validateAccess();
  }, [token, isValidSession, clearToken]);

  const handleLock = () => {
    clearToken();
  };

  // Show loading state while validating
  if (isValidating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-900 to-blue-900">
        <HorizontalFlowBars />

        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
          <p className="text-blue-200">Validating access...</p>
        </div>
      </div>
    );
  }

  // Show PIN lock if not authorized
  if (!isAuthorized) {
    return <PinLock />;
  }

  // Show protected content with lock button
  return <>{children}</>;
}
