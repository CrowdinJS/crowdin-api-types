import type { APIList } from "./list";

export interface APIProjectLanguageProgressAmount {
	total: number;
	translated: number;
	approved: number;
}

export type APILanguageProgress<ETag extends boolean = false, FileID extends boolean = false> = APIList<{
	data: {
		words: APIProjectLanguageProgressAmount;
		phrases: APIProjectLanguageProgressAmount;
		translationProgress: number;
		approvalProgress: number;
		languageId: FileID extends false ? string : never;
		fileId: FileID extends true ? number : never;
		etag: ETag extends true ? string : never;
	};
}>;
