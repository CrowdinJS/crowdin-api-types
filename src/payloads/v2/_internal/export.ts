import type { CreateUpdateDates } from "../../common";

export interface APIExport extends CreateUpdateDates {
	identifier: string;
	status: string;
	progress: number;
	startedAt: string;
	finishedAt: string;
	eta: string;
}
