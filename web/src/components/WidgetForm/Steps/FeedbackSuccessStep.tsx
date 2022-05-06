import { CloseButton } from "../../CloseButton";

import { useFeedback } from "../../../hooks/useFeedback";

import successIcon from "../../../assets/success.svg";

export function FeedbackSuccessStep() {
  const { setFeedbackType, setFeedbackSent, setScreenshot } = useFeedback();

  function handleRestartFeedback() {
    setFeedbackType(null);
    setScreenshot(null);
    setFeedbackSent(false);
  }

  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successIcon} alt="Ícone verde de sucesso" />

        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          type="button"
          onClick={handleRestartFeedback}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
