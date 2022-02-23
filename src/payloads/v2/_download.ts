import type { RouteBases } from "../../rest/v2";

export type APIDownloadURL = `${typeof RouteBases.downloads}/${string}`;

export interface APIDownload {
	data: {
		url: APIDownloadURL;
		expireIn: string;
	};
}
