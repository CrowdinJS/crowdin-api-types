import type { CreateUpdateDates, Size } from "../common";
import type { APIDownloadURL } from "./_internal/download";
import type { APIList } from "./_internal/list";

export interface APIProjectScreenshot {
	data: CreateUpdateDates & {
		id: number;
		userId: number;
		url: APIDownloadURL;
		name: string;
		size: Size;
		tagsCount: number;
		tags: APIProjectScreenshotTag["data"][];
	};
}

export type APIProjectScreenshots = APIList<APIProjectScreenshot>;

export interface APIProjectScreenshotTag {
	data: {
		id: number;
		screenshotId: number;
		stringId: number;
		position: Size & {
			x: number;
			y: number;
		};
		createdAt: string;
	};
}

export type APIProjectScreenshotTags = APIList<APIProjectScreenshotTag>;
