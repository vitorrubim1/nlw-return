import { useMemo } from "react";

import { useFeedback } from "../../hooks/useFeedback";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export function WidgetForm() {
  const { feedbackType, feedbackSent } = useFeedback();

  const FormContent = useMemo((): JSX.Element => {
    if (!feedbackType) return <FeedbackTypeStep />;
    if (feedbackSent) return <FeedbackSuccessStep />;

    return <FeedbackContentStep />;
  }, [feedbackSent, feedbackType]);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {FormContent}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por{" "}
        <a
          href="https://github.com/vitorrubim1"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          Vitor Rubim
        </a>
      </footer>
    </div>
  );
}
