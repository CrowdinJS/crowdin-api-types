import type { CreateUpdateDates } from "../common";
import type { APIDownload } from "./_internal/download";
import type { APIList } from "./_internal/list";
import type { APILanguageProgress } from "./_internal/progress";

export interface APIProjectFile {
	data: Partial<CreateUpdateDates> & {
		id: number;
		projectId: number;
		branchId: number;
		directoryId: number;
		name: string;
		title: string;
		type: string;
		path: string;
		status: string;
		// Only for project owners, organization owners and managers
		revisionId?: number;
		priority?: string;
		importOptions?: {
			firstLineContainsHeader: boolean;
			importTranslations: boolean;
			scheme: {
				identifier: number;
				sourcePhrase: number;
				en: number;
				de: number;
			};
		};
		exportOptions?: {
			exportPattern: string;
		};
		excludedTargetLanguages?: string[];
	};
}

export type APIProjectFiles = APIList<APIProjectFile>;

export type APIProjectFileDownload = APIDownload;

export interface APIProjectFileRevisionInfo {
	strings: number;
	words: number;
}

export interface APIProjectFileRevision {
	data: {
		id: number;
		projectId: number;
		fileId: number;
		restoreToRevision: null;
		info: {
			added: APIProjectFileRevisionInfo;
			deleted: APIProjectFileRevisionInfo;
			updated: APIProjectFileRevisionInfo;
		};
		date: string;
	};
}

export type APIProjectFileRevisions = APIList<APIProjectFileRevision>;

export type APIProjectFileLanguagesProgress = APILanguageProgress<true>;
