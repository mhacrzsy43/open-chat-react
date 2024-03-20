/// <reference types="react" />
import { type EdgeSpeechAPI, type EdgeSpeechPayload } from "../../core/EdgeSpeechTTS";
import { type TTSOptions } from "../useTTS";
export interface EdgeSpeechOptions extends Pick<EdgeSpeechPayload, 'options'>, TTSOptions {
    api?: EdgeSpeechAPI;
    locale?: string;
}
export declare const useEdgeSpeech: (defaultText: string, init: EdgeSpeechOptions) => {
    audio: import("../AudioPlayer").AudioProps & {
        arrayBuffers: ArrayBuffer[];
    };
    canStart: boolean;
    isGlobalLoading: boolean;
    isLoading: boolean;
    start: () => void;
    stop: () => void;
    errorRetryInterval?: number | undefined;
    errorRetryCount?: number | undefined;
    loadingTimeout?: number | undefined;
    focusThrottleInterval?: number | undefined;
    dedupingInterval?: number | undefined;
    refreshInterval?: number | ((latestData: any) => number) | undefined;
    refreshWhenHidden?: boolean | undefined;
    refreshWhenOffline?: boolean | undefined;
    revalidateOnFocus?: boolean | undefined;
    revalidateOnReconnect?: boolean | undefined;
    revalidateOnMount?: boolean | undefined;
    revalidateIfStale?: boolean | undefined;
    shouldRetryOnError?: boolean | ((err: any) => boolean) | undefined;
    keepPreviousData?: boolean | undefined;
    suspense?: boolean | undefined;
    fallbackData?: any;
    fetcher?: import("swr/_internal").BareFetcher<any> | undefined;
    use?: import("swr/_internal").Middleware[] | undefined;
    fallback?: {
        [key: string]: any;
    } | undefined;
    isPaused?: (() => boolean) | undefined;
    onLoadingSlow?: ((key: string, config: Readonly<import("swr/_internal").PublicConfiguration<any, any, import("swr/_internal").BareFetcher<any>>>) => void) | undefined;
    onSuccess?: ((data: any, key: string, config: Readonly<import("swr/_internal").PublicConfiguration<any, any, import("swr/_internal").BareFetcher<any>>>) => void) | undefined;
    onError?: ((err: any, key: string, config: Readonly<import("swr/_internal").PublicConfiguration<any, any, import("swr/_internal").BareFetcher<any>>>) => void) | undefined;
    onErrorRetry?: ((err: any, key: string, config: Readonly<import("swr/_internal").PublicConfiguration<any, any, import("swr/_internal").BareFetcher<any>>>, revalidate: import("swr/_internal").Revalidator, revalidateOpts: Required<import("swr/_internal").RevalidatorOptions>) => void) | undefined;
    onDiscarded?: ((key: string) => void) | undefined;
    compare?: ((a: any, b: any) => boolean) | undefined;
    isOnline?: (() => boolean) | undefined;
    isVisible?: (() => boolean) | undefined;
    error: any;
    mutate: import("swr/_internal").KeyedMutator<any>;
    response: Response | undefined;
    setText: import("react").Dispatch<import("react").SetStateAction<string>>;
};
