import type { CreateUpdateDates } from "../common";
import type { APIList } from "./_internal/list";
import type { APILanguageProgress } from "./_internal/progress";

export interface APIProjectDirectory {
	data: CreateUpdateDates & {
		id: number;
		projectId: number;
		branchId: number;
		directoryId: number;
		name: string;
		title: string;
		exportPattern: string;
		priority: string;
	};
}

export type APIProjectDirectories = APIList<APIProjectDirectory>;

export type APIProjectDirectoryLanguagesProgress = APILanguageProgress;
