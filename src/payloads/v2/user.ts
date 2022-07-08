import type { APIList } from "./_internal/list";

export interface APIUser {
	data: {
		id: number;
		username: string;
		email: string;
		fullName: string;
		avatarUrl: string;
		createdAt: string;
		lastSeen: string;
		twoFactor: string;
		timezone: string;
	};
}

export interface APIProjectUser {
	id: number;
	username: string;
	fullName: string;
	avatarUrl: string;
}

export interface APIProjectMember {
	data: {
		id: number;
		username: string;
		fullName: string;
		role: string;
		permissions: {
			uk: string;
			it: string;
			en: string;
		};
		avatarUrl: string;
		joinedAt: string;
		timezone: string;
	};
}

export type APIProjectMembers = APIList<APIProjectMember>;
