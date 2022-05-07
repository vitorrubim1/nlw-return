/* eslint-disable @typescript-eslint/no-empty-function */
import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe("Submit feedback", () => {
  const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  );

  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "Example comment",
        screenshot: "data:image/png;base64/test",
      })
    ).resolves.not.toThrow();
  });

  it("should not be able to submit a feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "Example comment",
        screenshot: "data:image/png;base64/test",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "IDEA",
        comment: "",
        screenshot: "data:image/png;base64/test",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit a feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "IDEA",
        comment: "Example comment",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });

  it("the send mail function should be called", async () => {
    await expect(
      submitFeedback.execute({
        type: "IDEA",
        comment: "Example comment",
        screenshot: "data:image/png;base64/test",
      })
    ).resolves.not.toThrow();

    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("the create feedback function should be called", async () => {
    await expect(
      submitFeedback.execute({
        type: "IDEA",
        comment: "Example comment",
        screenshot: "data:image/png;base64/test",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
  });
});
