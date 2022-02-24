import type { APIPartialProjectString } from "./project";
import type { APIProjectUser } from "./user";
import type { APIList } from "./_internal/list";

/**
 * @deprecated Use `APIProjectComment` instead
 */
export interface APIProjectIssue {
	data: {
		id: number;
		text: string;
		userId: number;
		stringId: number;
		user: APIProjectUser;
		string: APIPartialProjectString;
		languageId: string;
		type: string;
		status: string;
		createdAt: string;
	};
}

/**
 * @deprecated Use `APIProjectComments` instead
 */
export type APIProjectIssues = APIList<APIProjectIssue>;
