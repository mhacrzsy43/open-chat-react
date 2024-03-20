import { IOpenAgentRuntimeErrorType } from "../error";
import { AgentInitErrorPayload, ChatCompletionErrorPayload } from "../types";

export const AgentRuntimeError = {
  chat: (error: ChatCompletionErrorPayload): ChatCompletionErrorPayload =>
    error,
  createError: (
    errorType: IOpenAgentRuntimeErrorType | string | number,
    error?: any
  ): AgentInitErrorPayload => ({ error, errorType }),
};
