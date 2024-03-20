import { type SWRConfiguration } from 'swr';
import { type OpenAISTTAPI, type OpenAISTTPayload } from "../../core/OpenAISTT";
export interface OpenAISTTCoreOptions extends OpenAISTTPayload, SWRConfiguration {
    api?: OpenAISTTAPI;
    shouldFetch?: boolean;
}
export declare const useOpenAISTTCore: (init: OpenAISTTCoreOptions) => import("swr/_internal").SWRResponse<Response, any, {
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
}>;
