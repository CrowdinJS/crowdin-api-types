import type { APILanguage } from "./language";
import type { CreateUpdateDates, Dates, Size } from "../common";
import type { APIDownload, APIDownloadURL } from "./_internal/download";
import type { APILanguageProgress } from "./_internal/progress";
import type { APIExport } from "./_internal/export";
import type { APIList } from "./_internal/list";
import type { APIProjectUser } from "./user";

export interface APIProject {
	id: number;
	userId: number;
	sourceLanguageId: string;
	targetLanguageIds: string[];
	languageAccessPolicy: string;
	name: string;
	cname: string;
	identifier: string;
	description: string;
	visibility: string;
	logo: string;
	publicDownloads: boolean;
	createdAt: string;
	updatedAt: string;
	lastActivity: string;
	targetLanguages: APILanguage[];
	// Only for project owners, organization owners and managers
	translateDuplicates?: number;
	tagsDetection?: number;
	glossaryAccess?: boolean;
	isMtAllowed?: boolean;
	hiddenStringsProofreadersAccess?: boolean;
	autoSubstitution?: boolean;
	exportTranslatedOnly?: boolean;
	skipUntranslatedStrings?: boolean;
	skipUntranslatedFiles?: boolean;
	exportApprovedOnly?: boolean;
	autoTranslateDialects?: boolean;
	useGlobalTm?: boolean;
	normalizePlaceholder?: boolean;
	saveMetaInfoInSource?: boolean;
	inContext?: boolean;
	inContextProcessHiddenStrings?: boolean;
	inContextPseudoLanguageId?: string;
	inContextPseudoLanguage?: APILanguage;
	isSuspended?: boolean;
	qaCheckIsActive?: boolean;
	qaCheckCategories?: {
		empty: boolean;
		size: boolean;
		tags: boolean;
		spaces: boolean;
		variables: boolean;
		punctuation: boolean;
		symbolRegister: boolean;
		specialSymbols: boolean;
		wrongTranslation: boolean;
		spellcheck: boolean;
		icu: boolean;
		terms: boolean;
		duplicate: boolean;
	};
	langaugeMapping?: {
		uk: {
			name: string;
			two_letters_code: string;
			three_letters_code: string;
			locale: string;
			locale_with_underscore: string;
			android_code: string;
			osx_code: string;
			osx_locale: string;
		};
	};
	notificationSettings?: {
		translatorNewStrings: boolean;
		managerNewStrings: boolean;
		managerLanguageCompleted: boolean;
	};
}

export type APIProjects = APIList<APIProject>;

export interface APIProjectPreTranslation {
	data: Dates & {
		identifier: string;
		status: string;
		progress: number;
		attributes: {
			languageIds: string[];
			fileIds: number[];
			method: string;
			autoApproveOption: string;
			duplicateTranslations: boolean;
			translateUntranslatedOnly: boolean;
			translateWithPerfectMatchOnly: boolean;
		};
		eta: string;
	};
}

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

export interface APIProjectApproval {
	data: {
		id: number;
		user: APIProjectUser;
		translationId: number;
		stringId: number;
		languageId: string;
		workflowStepId: number;
		createdAt: string;
	};
}

export type APIProjectApprovals = APIList<APIProjectApproval>;

export interface APIProjectLanguageTranslation {
	data: {
		stringId: number;
		contentType: string;
		translationId: number;
		text: string;
		user: APIProjectUser;
		createdAt: string;
	};
}

export type APIProjectLanguageTranslations = APIList<APIProjectLanguageTranslation>;

export interface APIProjectTranslation {
	data: {
		id: number;
		text: string;
		pluralCategoryName: string;
		user: APIProjectUser;
		rating: number;
		createdAt: string;
	};
}

export type APIProjectTranslations = APIList<APIProjectTranslation>;

export interface APIProjectVote {
	data: {
		id: number;
		user: APIProjectUser;
		translationId: number;
		votedAt: string;
		mark: string;
	};
}

export type APIProjectVotes = APIList<APIProjectVote>;

export interface APIProjectComment {
	data: {
		id: number;
		text: string;
		userId: number;
		stringId: number;
		user: APIProjectUser;
		string: APIPartialProjectString;
		languageId: string;
		type: string;
		issueType: string;
		issueStatus: string;
		resolverId: number;
		resolver: APIProjectUser;
		resolvedAt: string;
		createdAt: string;
	};
}

export type APIProjectComments = APIList<APIProjectComment>;

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

export type APIProjectLanguageProgress = APILanguageProgress<true, true>;
export type APIProjectLanguagesProgress = APILanguageProgress;

export interface APIProjectReport extends APIExport {
	attributes: {
		format: string;
		reportName: string;
		schema: {};
	};
}

export type APIProjectReportDownload = APIDownload;

export type APIProjectQAIssues = APIList<{
	data: {
		stringId: number;
		languageId: string;
		category: string;
		categoryDescription: string;
		validation: string;
		validationDescription: string;
		pluralId: number;
		text: string;
	};
}>;
