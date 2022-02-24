import type { APIList } from "./_internal/list";

export interface APIStorage {
	data: {
		id: number;
		fileName: string;
	};
}

export type APIStorages = APIList<APIStorage>;
