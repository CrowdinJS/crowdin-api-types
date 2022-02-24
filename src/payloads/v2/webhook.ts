import type { CreateUpdateDates } from "../common";
import type { APIList } from "./_internal/list";

export interface APIProjectWebhook {
	data: CreateUpdateDates & {
		id: number;
		projectId: number;
		name: string;
		url: string;
		events: string[];
		headers: [];
		payload: [];
		isActive: boolean;
		batchingEnabled: boolean;
		requestType: string;
		contentType: string;
	};
}

export type APIProjectWebhooks = APIList<APIProjectWebhook>;
