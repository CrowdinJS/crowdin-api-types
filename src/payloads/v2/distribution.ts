import type { CreateUpdateDates } from "../common";
import type { APIList } from "./_internal/list";

export interface APIProjectDistribution {
	data: CreateUpdateDates & {
		hash: string;
		name: string;
		fileIds: number[];
	};
}

export type APIProjectDistributions = APIList<APIProjectDistribution>;

export interface APIProjectDistributionRelease {
	data: {
		status: string;
		progress: number;
		currentLanguageId: string;
		currentFileId: number;
		date: string;
	};
}
