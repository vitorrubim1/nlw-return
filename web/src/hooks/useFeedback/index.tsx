/* eslint-disable react/function-component-definition */
import React, { createContext, useState, useContext, useMemo } from "react";

import { FeedbackType } from "./dtos";

// Context
export interface IFeedbackContextData {
  feedbackType: FeedbackType | null;
  setFeedbackType(feedbackType: FeedbackType | null): void;

  screenshot: string | null;
  setScreenshot(screenshot: string | null): void;

  feedbackSent: boolean;
  setFeedbackSent(feedbackSent: boolean): void;
}

interface FeedbackProviderProps {
  children: React.ReactNode;
}

// Context
export const FeedbackContext = createContext<IFeedbackContextData>(
  {} as IFeedbackContextData,
);

// Provider
export const FeedbackProvider: React.FC<FeedbackProviderProps> = ({
  children,
}) => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const providerValues = useMemo(() => {
    return {
      feedbackType,
      setFeedbackType,

      screenshot,
      setScreenshot,

      feedbackSent,
      setFeedbackSent,
    };
  }, [feedbackSent, feedbackType, screenshot]);

  return (
    <FeedbackContext.Provider value={providerValues}>
      {children}
    </FeedbackContext.Provider>
  );
};

// Hook
export function useFeedback(): IFeedbackContextData {
  const context = useContext(FeedbackContext);

  if (!context)
    throw new Error("useFeedback must be used within a FeedbackProvider");

  return context;
}
