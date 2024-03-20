import { type MicrosoftSpeechPayload, createMicrosoftSpeech } from './createMicrosoftSpeech';
export type { MicrosoftSpeechPayload } from './createMicrosoftSpeech';
export interface MicrosoftSpeechAPI {
    headers?: Headers;
    locale?: string;
    serviceUrl?: string;
}
export declare class MicrosoftSpeechTTS {
    private locale?;
    private serviceUrl?;
    private headers?;
    constructor({ serviceUrl, locale, headers }?: MicrosoftSpeechAPI);
    get voiceOptions(): import("rc-select/lib/Select").DefaultOptionType[] | undefined;
    static localeOptions: import("rc-select/lib/Select").DefaultOptionType[] | undefined;
    static createRequest: typeof createMicrosoftSpeech;
    static voiceList: {
        readonly 'ar-SA': readonly ["ar-SA-HamedNeural", "ar-SA-ZariyahNeural"];
        readonly 'de-DE': readonly ["de-DE-AmalaNeural", "de-DE-BerndNeural", "de-DE-ChristophNeural", "de-DE-ConradNeural", "de-DE-ElkeNeural", "de-DE-GiselaNeural", "de-DE-KasperNeural", "de-DE-KatjaNeural", "de-DE-KillianNeural", "de-DE-KlarissaNeural", "de-DE-KlausNeural", "de-DE-LouisaNeural", "de-DE-MajaNeural", "de-DE-RalfNeural", "de-DE-TanjaNeural"];
        readonly 'en-US': readonly ["en-US-AIGenerate1Neural", "en-US-AIGenerate2Neural", "en-US-AmberNeural", "en-US-AnaNeural", "en-US-AndrewNeural", "en-US-AriaNeural", "en-US-AshleyNeural", "en-US-BlueNeural", "en-US-BrandonNeural", "en-US-BrianNeural", "en-US-ChristopherNeural", "en-US-CoraNeural", "en-US-DavisNeural", "en-US-ElizabethNeural", "en-US-EmmaNeural", "en-US-EricNeural", "en-US-GuyNeural", "en-US-JacobNeural", "en-US-JaneNeural", "en-US-JasonNeural", "en-US-JennyNeural", "en-US-JennyMultilingualNeural", "en-US-JennyMultilingualV2Neural", "en-US-MichelleNeural", "en-US-MonicaNeural", "en-US-NancyNeural", "en-US-RogerNeural", "en-US-RyanMultilingualNeural", "en-US-SaraNeural", "en-US-SteffanNeural", "en-US-TonyNeural"];
        readonly 'es-ES': readonly ["es-ES-AbrilNeural", "es-ES-AlvaroNeural", "es-ES-ArnauNeural", "es-ES-DarioNeural", "es-ES-EliasNeural", "es-ES-ElviraNeural", "es-ES-EstrellaNeural", "es-ES-IreneNeural", "es-ES-LaiaNeural", "es-ES-LiaNeural", "es-ES-NilNeural", "es-ES-SaulNeural", "es-ES-TeoNeural", "es-ES-TrianaNeural", "es-ES-VeraNeural"];
        readonly 'fr-FR': readonly ["fr-FR-AlainNeural", "fr-FR-BrigitteNeural", "fr-FR-CelesteNeural", "fr-FR-ClaudeNeural", "fr-FR-CoralieNeural", "fr-FR-DeniseNeural", "fr-FR-EloiseNeural", "fr-FR-HenriNeural", "fr-FR-JacquelineNeural", "fr-FR-JeromeNeural", "fr-FR-JosephineNeural", "fr-FR-MauriceNeural", "fr-FR-YvesNeural", "fr-FR-YvetteNeural"];
        readonly 'ja-JP': readonly ["ja-JP-NanamiNeural", "ja-JP-KeitaNeural", "ja-JP-DaichiNeural", "ja-JP-ShioriNeural", "ja-JP-NaokiNeural", "ja-JP-MayuNeural", "ja-JP-AoiNeural"];
        readonly 'ko-KR': readonly ["ko-KR-GookMinNeural", "ko-KR-BongJinNeural", "ko-KR-SeoHyeonNeural", "ko-KR-SunHiNeural", "ko-KR-SoonBokNeural", "ko-KR-YuJinNeural", "ko-KR-InJoonNeural", "ko-KR-JiMinNeural"];
        readonly 'pt-BR': readonly ["pt-BR-AntonioNeural", "pt-BR-BrendaNeural", "pt-BR-DonatoNeural", "pt-BR-ElzaNeural", "pt-BR-FabioNeural", "pt-BR-FranciscaNeural", "pt-BR-GiovannaNeural", "pt-BR-HumbertoNeural", "pt-BR-JulioNeural", "pt-BR-LeilaNeural", "pt-BR-LeticiaNeural", "pt-BR-ManuelaNeural", "pt-BR-NicolauNeural", "pt-BR-ValerioNeural", "pt-BR-YaraNeural"];
        readonly 'ru-RU': readonly ["ru-RU-DariyaNeural", "ru-RU-DmitryNeural", "ru-RU-SvetlanaNeural"];
        readonly 'zh-CN': readonly ["zh-CN-YunjianNeural", "wuu-CN-YunzheNeural", "zh-CN-YunxiaNeural", "zh-CN-guangxi-YunqiNeural", "zh-CN-sichuan-YunxiNeural", "zh-CN-YunxiNeural", "zh-CN-YunyangNeural", "zh-CN-YunjieNeural", "yue-CN-YunSongNeural", "zh-CN-YunfengNeural", "zh-CN-YunzeNeural", "zh-CN-henan-YundengNeural", "zh-CN-YunhaoNeural", "zh-CN-shandong-YunxiangNeural", "zh-CN-liaoning-YunbiaoNeural", "zh-CN-YunyeNeural", "zh-CN-XiaoyiNeural", "zh-CN-liaoning-XiaobeiNeural", "zh-CN-XiaoshuangNeural", "zh-CN-shaanxi-XiaoniNeural", "wuu-CN-XiaotongNeural", "zh-CN-XiaoyouNeural", "yue-CN-XiaoMinNeural", "zh-CN-XiaoxiaoNeural", "zh-CN-XiaorouNeural", "zh-CN-XiaomengNeural", "zh-CN-XiaohanNeural", "zh-CN-XiaozhenNeural", "zh-CN-XiaoruiNeural", "zh-CN-XiaoqiuNeural", "zh-CN-XiaoxuanNeural", "zh-CN-XiaochenNeural", "zh-CN-XiaoyanNeural", "zh-CN-XiaomoNeural"];
        readonly 'zh-TW': readonly ["zh-TW-HsiaoChenNeural", "zh-TW-HsiaoYuNeural", "zh-TW-YunJheNeural"];
    };
    static voiceName: any;
    static styleList: readonly ["affectionate", "angry", "calm", "cheerful", "disgruntled", "embarrassed", "fearful", "general", "gentle", "sad", "serious"];
    private fetch;
    create: (payload: MicrosoftSpeechPayload) => Promise<Response>;
    createAudio: (payload: MicrosoftSpeechPayload) => Promise<AudioBuffer>;
}
