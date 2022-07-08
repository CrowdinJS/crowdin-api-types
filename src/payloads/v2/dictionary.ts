import type { APIList } from "./_internal/list";

export interface APIProjectDictionary {
	data: {
		languageId: string;
		words: string[];
	};
}

export type APIProjectDictionaries = APIList<APIProjectDictionary>;
