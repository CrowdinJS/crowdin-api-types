import type { APIDownload } from "./_internal/download";
import type { APIExport } from "./_internal/export";

export interface APIGlossary {
	data: {
		id: number;
		name: string;
		userId: number;
		terms: number;
		languageId: string;
		languageIds: string[];
		defaultProjectId: number;
		projectIds: number[];
		createdAt: string;
	};
}

export type APIGlossaryDownload = APIDownload;

export interface APIGlossaryExport {
	data: APIExport & {
		attributes: {
			format: string;
		};
	};
}

export interface APIGlossaryImport {
	data: APIExport & {
		attributes: {
			storageId: number;
			scheme: {
				term_en: number;
				description_en: number;
			};
			firstLineContainsHeader: boolean;
		};
	};
}

export interface APIGlossaryTerm {
	data: {
		id: number;
		userId: number;
		glossaryId: number;
		languageId: string;
		text: string;
		description: string;
		partOfSpeech: string;
		lemma: string;
		createdAt: string;
		updatedAt: string;
	};
}
