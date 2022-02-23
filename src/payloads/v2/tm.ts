import type { APIDownload } from "./_internal/download";
import type { APIExport } from "./_internal/export";

export interface APITranslationMemory {
	data: {
		id: number;
		userId: number;
		name: string;
		languageId: string;
		languageIds: string[];
		segmentsCount: number;
		defaultProjectId: number;
		projectIds: number[];
		createdAt: string;
	};
}

export interface APITranslationMemoryExport {
	data: APIExport & {
		attributes: {
			sourceLanguageId: string;
			targetLanguageId: string;
			format: string;
		};
	};
}

export type APITranslationMemoryExportDownload = APIDownload;

export interface APITranslationMemoryImport {
	data: APIExport & {
		attributes: {
			tmId: number;
			storageId: number;
			firstLineContainsHeader: number;
			scheme: {
				en: number;
				de: number;
			};
		};
	};
}
