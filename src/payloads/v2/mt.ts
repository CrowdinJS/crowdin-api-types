import type { APIList } from "./_internal/list";

export interface APIMachineTranslation {
	data: {
		id: number;
		name: string;
		type: string;
		credentials: {
			crowdin_nmt: number;
			crowdin_nmt_multi_translations: number;
		};
		supportedLanguageIds: string[];
		supportedLanguagePairs: {
			en: string[];
			fr: string[];
			"zh-CN": string[];
		};
	};
}

export type APIMachineTranslations = APIList<APIMachineTranslation>;
