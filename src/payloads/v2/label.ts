import type { APIList } from "./_internal/list";

export interface APIProjectLabel {
	data: {
		id: number;
		title: string;
	};
}

export type APIProjectLabels = APIList<APIProjectLabel>;
