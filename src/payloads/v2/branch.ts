import type { CreateUpdateDates } from "../common";
import type { APIList } from "./_internal/list";
import type { APILanguageProgress } from "./_internal/progress";

export interface APIProjectBranch {
	data: CreateUpdateDates & {
		id: number;
		projectId: number;
		name: string;
		title: string;
		exportPattern: string;
		priority: string;
	};
}

export type APIProjectBranches = APIList<APIProjectBranch>;

export type APIProjectBranchLanguagesProgress = APILanguageProgress;
