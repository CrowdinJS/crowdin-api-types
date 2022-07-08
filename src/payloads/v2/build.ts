import type { Dates } from "../common";
import type { APIDownload } from "./_internal/download";
import type { APIList } from "./_internal/list";

export interface APIProjectTranslationsBuild {
	data: Omit<Dates, "startedAt"> & {
		id: number;
		projectId: number;
		status: string;
		progress: number;
		finishedAt: string;
		attributes: {
			branchId: number;
			directoryId: number;
			targetLanguagesId: string[];
			skipUntranslatedStrings: boolean;
			skipUntranslatedFiles: boolean;
			exportApprovedOnly: boolean;
		}[];
	};
}

export type APIProjectTranslationsBuilds = APIList<APIProjectTranslationsBuild>;

export interface APIProjectTranslationsBuildDirectory {
	data: Omit<Dates, "startedAt"> & {
		id: number;
		projectId: number;
		status: string;
		progress: number;
	};
}

export interface APIProjectTranslationsBuildFile {
	data: APIDownload["data"] & {
		etag: string;
	};
}

export type APIProjectTranslationsBuildDownload = APIDownload;
