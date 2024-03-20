import { StreamingTextResponse } from "ai";

import { ChatCompetitionOptions, ChatStreamPayload } from "./types";

export interface OpenRuntimeAI {
  baseURL?: string;

  chat(
    payload: ChatStreamPayload,
    options?: ChatCompetitionOptions
  ): Promise<StreamingTextResponse>;
}
