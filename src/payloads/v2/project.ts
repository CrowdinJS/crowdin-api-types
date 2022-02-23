import type { APILanguage } from "./language";
import type { Size } from "../common";
import type { APIDownload, APIDownloadURL } from "./_internal/download";

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

export interface APIProjectBranch {
	data: {
		id: number;
		projectId: number;
		name: string;
		title: string;
		exportPattern: string;
		priority: string;
		createdAt: string;
		updatedAt: string;
	};
}

export interface APIProjectDirectory {
	data: {
		id: number;
		projectId: number;
		branchId: number;
		directoryId: number;
		name: string;
		title: string;
		exportPattern: string;
		priority: string;
		createdAt: string;
		updatedAt: string;
	};
}

export interface APIProjectFile {
	data: {
		id: number;
		projectId: number;
		branchId: number;
		directoryId: number;
		name: string;
		title: string;
		type: string;
		path: string;
		status: string;
		// Only for project owners, organization owners and managers
		revisionId?: number;
		priority?: string;
		importOptions?: {
			firstLineContainsHeader: boolean;
			importTranslations: boolean;
			scheme: {
				identifier: number;
				sourcePhrase: number;
				en: number;
				de: number;
			};
		};
		exportOptions?: {
			exportPattern: string;
		};
		excludedTargetLanguages?: string[];
		createdAt?: string;
		updatedAt?: string;
	};
}

export type APIProjectFileDownload = APIDownload;

export interface APIProjectFileRevisionInfo {
	strings: number;
	words: number;
}

export interface APIProjectFileRevision {
	data: {
		id: number;
		projectId: number;
		fileId: number;
		restoreToRevision: null;
		info: {
			added: APIProjectFileRevisionInfo;
			deleted: APIProjectFileRevisionInfo;
			updated: APIProjectFileRevisionInfo;
		};
		date: string;
	};
}

export interface APIProjectPreTranslation {
	data: {
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
		createdAt: string;
		updatedAt: string;
		startedAt: string;
		finishedAt: string;
		eta: string;
	};
}

export interface APIProjectTranslationsBuild {
	data: {
		id: number;
		projectId: number;
		status: string;
		progress: number;
		createdAt: string;
		updatedAt: string;
		finishedAt: string;
		attributes: {
			branchId: number;
			directoryId: number;
			targetLanguagesId: string[];
			skipUntranslatedStrings: boolean;
			skipUntranslatedFiles: boolean;
			exportApprovedOnly: boolean;
		}[];
	};
}

export type ProjectTranslationsBuildDownload = APIDownload;

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
	data: APIPartialProjectString & {
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
		createdAt: string;
		updatedAt: string;
	};
}

export interface APIProjectUser {
	id: number;
	username: string;
	fullName: string;
	avatarUrl: string;
}

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

export interface APIProjectVote {
	data: {
		id: number;
		user: APIProjectUser;
		translationId: number;
		votedAt: string;
		mark: string;
	};
}

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

export interface APIProjectScreenshot {
	data: {
		id: number;
		userId: number;
		url: APIDownloadURL;
		name: string;
		size: Size;
		tagsCount: number;
		tags: APIProjectScreenshotTag["data"][];
		createdAt: string;
		updatedAt: string;
	};
}

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
