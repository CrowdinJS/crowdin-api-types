import type { CreateUpdateDates } from "../common";
import type { APIProjectUser } from "./user";
import type { APIList } from "./_internal/list";

export interface APIProjectTaskProgress {
	total: number;
	done: number;
	percent: number;
}

export interface APIProjectTask {
	data: CreateUpdateDates & {
		id: number;
		projectId: number;
		creatorId: number;
		type: number;
		vendor: string;
		status: string;
		title: string;
		assignees: (APIProjectUser & {
			wordsCount: number;
			wordsLeft: number;
		})[];
		assignedTeams: {
			id: number;
			wordsCount: number;
		}[];
		fileIds: number[];
		progress: APIProjectTaskProgress;
		translateProgress: APIProjectTaskProgress;
		sourceLanguageId: string;
		targetLanguageId: string;
		description: string;
		hash: string;
		translationUrl: string;
		wordsCount: number;
		filesCount: number;
		commentsCount: number;
		deadline: string;
		timeRange: string;
		workflowStepId: number;
		buyUrl: string;
	};
}

export type APIProjectTasks = APIList<APIProjectTask>;

export interface APIUserTask {
	data: APIProjectTask["data"] & {
		isArchived: boolean;
	};
}

export type APIUserTasks = APIList<APIUserTask>;
