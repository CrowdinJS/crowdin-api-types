import type { CreateUpdateDates } from "../common";
import type { APIList } from "./_internal/list";

export interface APIPartialProjectString {
	id: number;
	text: string;
	type: string;
	hasPlurals: boolean;
	isIcu: boolean;
	context: string;
	fileId: number;
}

export interface APIProjectString {
	data: APIPartialProjectString &
		CreateUpdateDates & {
			projectId: number;
			branchId: number;
			directoryId: number;
			identifier: string;
			maxLength: number;
			isHidden: boolean;
			isDuplicate: boolean;
			masterStringId: number;
			revision: number;
			labelIds: number[];
		};
}

export type APIProjectStrings = APIList<APIProjectString>;
