export interface Size {
	width: number;
	height: number;
}

export interface CreateUpdateDates {
	createdAt: string;
	updatedAt: string;
}

export interface Dates extends CreateUpdateDates {
	startedAt: string;
	finishedAt: string;
}
