export const APIVersion = "2";

export const Routes = {
	/**
	 * Route for:
	 * - GET `/storages`
	 * - POST `/storages`
	 */
	storages() {
		return "/storages" as const;
	},

	/**
	 * Route for:
	 * - GET `/storages/{storage.id}`
	 * - DELETE `/storages/{storage.id}`
	 */
	storage(storageId: number) {
		return `/storages/${storageId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/languages`
	 * - POST `/languages`
	 */
	languages() {
		return "/languages" as const;
	},

	/**
	 * Route for:
	 * - GET `/languages/{language.id}`
	 * - DELETE `/languages/{language.id}`
	 * - PATCH `/languages/{language.id}`
	 */
	language(languageId: string) {
		return `/languages/${languageId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects`
	 * - POST `/projects`
	 */
	projects() {
		return "/projects" as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}`
	 * - DELETE `/projects/{project.id}`
	 * - PATCH `/projects/{project.id}`
	 */
	project(projectId: number) {
		return `/projects/${projectId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/branches`
	 * - POST `/projects/{project.id}/branches`
	 */
	projectBranches(projectId: number) {
		return `/projects/${projectId}/branches` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/branches/{branch.id}`
	 * - DELETE `/projects/{project.id}/branches/{branch.id}`
	 * - PATCH `/projects/{project.id}/branches/{branch.id}`
	 */
	projectBranch(projectId: number, branchId: number) {
		return `/projects/${projectId}/branches/${branchId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/directories`
	 * - POST `/projects/{project.id}/directories`
	 */
	projectDirectories(projectId: number) {
		return `/projects/${projectId}/directories` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/directories/{directory.id}`
	 * - DELETE `/projects/{project.id}/directories/{directory.id}`
	 * - PATCH `/projects/{project.id}/directories/{directory.id}`
	 */
	projectDirectory(projectId: number, directoryId: number) {
		return `/projects/${projectId}/directories/${directoryId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/files`
	 * - POST `/projects/{project.id}/files`
	 */
	projectFiles(projectId: number) {
		return `/projects/${projectId}/files` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/files/{file.id}`
	 * - PUT `/projects/{project.id}/files/{file.id}`
	 * - DELETE `/projects/{project.id}/files/{file.id}`
	 * - PATCH `/projects/{project.id}/files/{file.id}`
	 */
	projectFile(projectId: number, fileId: number) {
		return `/projects/${projectId}/files/${fileId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/files/{file.id}/download`
	 */
	projectFileDownload(projectId: number, fileId: number) {
		return `/projects/${projectId}/files/${fileId}/download` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/files/{file.id}/revisions`
	 */
	projectFileRevisions(projectId: number, fileId: number) {
		return `/projects/${projectId}/files/${fileId}/revisions` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/files/{file.id}/revisions/{revision.id}`
	 */
	projectFileRevision(projectId: number, fileId: number, revisionId: number) {
		return `/projects/${projectId}/files/${fileId}/revisions/${revisionId}` as const;
	},

	/**
	 * Route for:
	 * - POST `/projects/{project.id}/pre-translations`
	 */
	projectPreTranslations(projectId: number) {
		return `/projects/${projectId}/pre-translations` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/pre-translations/{preTranslation.id}`
	 */
	projectPreTranslation(projectId: number, preTranslationId: string) {
		return `/projects/${projectId}/pre-translations/${preTranslationId}` as const;
	},

	/**
	 * Route for:
	 * - POST `/projects/{project.id}/translations/exports`
	 */
	projectTranslationsExports(projectId: number) {
		return `/projects/${projectId}/translations/exports` as const;
	},

	/**
	 * Route for:
	 * - POST `/projects/{project.id}/translations/{language.id}`
	 */
	projectTranslationUpload(projectId: number, languageId: string) {
		return `/projects/${projectId}/translations/${languageId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/translations/builds`
	 * - POST `/projects/{project.id}/translations/builds`
	 */
	projectTranslationBuilds(projectId: number) {
		return `/projects/${projectId}/translations/builds` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/translations/builds/{build.id}`
	 * - DELETE `/projects/{project.id}/translations/builds/{build.id}`
	 */
	projectTranslationBuild(projectId: number, buildId: number) {
		return `/projects/${projectId}/translations/builds/${buildId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/translations/builds/{build.id}/download`
	 */
	projectTranslationBuildDownload(projectId: number, buildId: number) {
		return `/projects/${projectId}/translations/builds/${buildId}/download` as const;
	},

	/**
	 * Route for:
	 * - POST `/projects/{project.id}/translations/builds/directories/{directory.id}`
	 */
	projectTranslationBuildDirectory(projectId: number, directoryId: number) {
		return `/projects/${projectId}/translations/builds/directories/${directoryId}` as const;
	},

	/**
	 * Route for:
	 * - POST `/projects/{project.id}/translations/builds/files/{file.id}`
	 */
	projectTranslationBuildFile(projectId: number, fileId: number) {
		return `/projects/${projectId}/translations/builds/files/${fileId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/strings`
	 * - POST `/projects/{project.id}/strings`
	 */
	projectStrings(projectId: number) {
		return `/projects/${projectId}/strings` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/strings/{string.id}`
	 * - DELETE `/projects/{project.id}/strings/{string.id}`
	 * - PATCH `/projects/{project.id}/strings/{string.id}`
	 */
	projectString(projectId: number, stringId: number) {
		return `/projects/${projectId}/strings/${stringId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/approvals`
	 * - POST `/projects/{project.id}/approvals`
	 */
	projectApprovals(projectId: number) {
		return `/projects/${projectId}/approvals` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/approvals/{approval.id}`
	 * - DELETE `/projects/{project.id}/approvals/{approval.id}`
	 */
	projectApproval(projectId: number, approvalId: number) {
		return `/projects/${projectId}/approvals/${approvalId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/languages/{language.id}/translations`
	 */
	projectLanguageTranslations(projectId: number, languageId: string) {
		return `/projects/${projectId}/languages/${languageId}/translations` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/translations`
	 * - POST `/projects/{project.id}/translations`
	 * - DELETE `/projects/{project.id}/translations`
	 */
	projectTranslations(projectId: number) {
		return `/projects/${projectId}/translations` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/translations/{translation.id}`
	 * - PUT `/projects/{project.id}/translations/{translation.id}`
	 * - DELETE `/projects/{project.id}/translations/{translation.id}`
	 */
	projectTranslation(projectId: number, translationId: number) {
		return `/projects/${projectId}/translations/${translationId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/votes`
	 * - POST `/projects/{project.id}/votes`
	 */
	projectVotes(projectId: number) {
		return `/projects/${projectId}/votes` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/votes/{vote.id}`
	 * - DELETE `/projects/{project.id}/votes/{vote.id}`
	 */
	projectVote(projectId: number, voteId: number) {
		return `/projects/${projectId}/votes/${voteId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/comments`
	 * - POST `/projects/{project.id}/comments`
	 */
	projectComments(projectId: number) {
		return `/projects/${projectId}/comments` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/comments/{comment.id}`
	 * - DELETE `/projects/{project.id}/comments/{comment.id}`
	 * - PATCH `/projects/{project.id}/comments/{comment.id}`
	 */
	projectComment(projectId: number, commentId: number) {
		return `/projects/${projectId}/comments/${commentId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/screenshots`
	 * - POST `/projects/{project.id}/screenshots`
	 */
	projectScreenshots(projectId: number) {
		return `/projects/${projectId}/screenshots` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/screenshots/{screenshot.id}`
	 * - PUT `/projects/{project.id}/screenshots/{screenshot.id}`
	 * - DELETE `/projects/{project.id}/screenshots/{screenshot.id}`
	 * - PATCH `/projects/{project.id}/screenshots/{screenshot.id}`
	 */
	projectScreenshot(projectId: number, screenshotId: number) {
		return `/projects/${projectId}/screenshots/${screenshotId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/screenshots/{screenshot.id}/tags`
	 * - PUT `/projects/{project.id}/screenshots/{screenshot.id}/tags`
	 * - POST `/projects/{project.id}/screenshots/{screenshot.id}/tags`
	 * - DELETE `/projects/{project.id}/screenshots/{screenshot.id}/tags`
	 */
	projectScreenshotTags(projectId: number, screenshotId: number) {
		return `/projects/${projectId}/screenshots/${screenshotId}/tags` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/screenshots/{screenshot.id}/tags/{tag.id}`
	 * - DELETE `/projects/{project.id}/screenshots/{screenshot.id}/tags/{tag.id}`
	 * - PATCH `/projects/{project.id}/screenshots/{screenshot.id}/tags/{tag.id}`
	 */
	projectScreenshotTag(projectId: number, screenshotId: number, tagId: number) {
		return `/projects/${projectId}/screenshots/${screenshotId}/tags/${tagId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/glossaries`
	 * - POST `/glossaries`
	 */
	glossaries() {
		return "/glossaries" as const;
	},

	/**
	 * Route for:
	 * - GET `/glossaries/{glossary.id}`
	 * - DELETE `/glossaries/{glossary.id}`
	 * - PATCH `/glossaries/{glossary.id}`
	 */
	glossary(glossaryId: number) {
		return `/glossaries/${glossaryId}` as const;
	},

	/**
	 * Route for:
	 * - POST `/glossaries/{glossary.id}/exports`
	 */
	glossaryExports(glossaryId: number) {
		return `/glossaries/${glossaryId}/exports` as const;
	},

	/**
	 * Route for:
	 * - GET `/glossaries/{glossary.id}/exports/{export.id}`
	 */
	glossaryExport(glossaryId: number, exportId: number) {
		return `/glossaries/${glossaryId}/exports/${exportId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/glossaries/{glossary.id}/exports/{export.id}/download`
	 */
	glossaryExportDownload(glossaryId: number, exportId: number) {
		return `/glossaries/${glossaryId}/exports/${exportId}/download` as const;
	},

	/**
	 * Route for:
	 * - POST `/glossaries/{glossary.id}/imports`
	 */
	glossaryImports(glossaryId: number) {
		return `/glossaries/${glossaryId}/imports` as const;
	},

	/**
	 * Route for:
	 * - GET `/glossaries/{glossary.id}/imports/{import.id}`
	 */
	glossaryImport(glossaryId: number, importId: number) {
		return `/glossaries/${glossaryId}/imports/${importId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/glossaries/{glossary.id}/items`
	 */
	glossaryItems(glossaryId: number) {
		return `/glossaries/${glossaryId}/items` as const;
	},

	/**
	 * Route for:
	 * - POST `/glossaries/{glossary.id}/terms`
	 * - DELETE `/glossaries/{glossary.id}/terms`
	 */
	glossaryTerms(glossaryId: number) {
		return `/glossaries/${glossaryId}/terms` as const;
	},

	/**
	 * Route for:
	 * - GET `/glossaries/{glossary.id}/terms/{term.id}`
	 * - DELETE `/glossaries/{glossary.id}/terms/{term.id}`
	 * - PATCH `/glossaries/{glossary.id}/terms/{term.id}`
	 */
	glossaryTerm(glossaryId: number, termId: number) {
		return `/glossaries/${glossaryId}/terms/${termId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/tms`
	 * - POST `/tms`
	 */
	translationMemories() {
		return "/tms" as const;
	},

	/**
	 * Route for:
	 * - GET `/tms/{tm.id}`
	 * - DELETE `/tms/{tm.id}`
	 * - PATCH `/tms/{tm.id}`
	 */
	translationMemory(translationMemoryId: number) {
		return `/tms/${translationMemoryId}` as const;
	},

	/**
	 * Route for:
	 * - DELETE `/tms/{tm.id}/segments`
	 */
	translationMemorySegments(translationMemoryId: number) {
		return `/tms/${translationMemoryId}/segments` as const;
	},

	/**
	 * Route for:
	 * - POST `/tms/{tm.id}/exports`
	 */
	translationMemoryExports(translationMemoryId: number) {
		return `/tms/${translationMemoryId}/exports` as const;
	},

	/**
	 * Route for:
	 * - GET `/tms/{tm.id}/exports/{export.id}`
	 */
	translationMemoryExport(translationMemoryId: number, exportId: string) {
		return `/tms/${translationMemoryId}/exports/${exportId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/tms/{tm.id}/exports/{export.id}/download`
	 */
	translationMemoryExportDownload(translationMemoryId: number, exportId: string) {
		return `/tms/${translationMemoryId}/exports/${exportId}/download` as const;
	},

	/**
	 * Route for:
	 * - POST `/tms/{tm.id}/imports`
	 */
	translationMemoryImports(translationMemoryId: number) {
		return `/tms/${translationMemoryId}/imports` as const;
	},

	/**
	 * Route for:
	 * - GET `/tms/{tm.id}/imports/{import.id}`
	 */
	translationMemoryImport(translationMemoryId: number, importId: string) {
		return `/tms/${translationMemoryId}/imports/${importId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/mts`
	 */
	machineTranslations() {
		return "/mts" as const;
	},

	/**
	 * Route for:
	 * - GET `/mts/{mt.id}`
	 */
	machineTranslation(machineTranslationId: number) {
		return `/mts/${machineTranslationId}` as const;
	},

	/**
	 * Route for:
	 * - POST `/mts/{mt.id}/translations`
	 */
	machineTranlationTranslations(machineTranslationId: number) {
		return `/mts/${machineTranslationId}/translations` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/branches/{branch.id}/languages/progress`
	 */
	projectBranchLanguagesProgress(projectId: number, branchId: number) {
		return `/projects/${projectId}/branches/${branchId}/languages/progress` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/directories/{directory.id}/languages/progress`
	 */
	projectDirectoryLanguagesProgress(projectId: number, directoryId: number) {
		return `/projects/${projectId}/directories/${directoryId}/languages/progress` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/files/{file.id}/languages/progress`
	 */
	projectFileLanguagesProgress(projectId: number, fileId: number) {
		return `/projects/${projectId}/files/${fileId}/languages/progress` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/languages/progress`
	 */
	projectLanguagesProgress(projectId: number) {
		return `/projects/${projectId}/languages/progress` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/languages/{language.id}/progress`
	 */
	projectLanguageProgress(projectId: number, languageId: string) {
		return `/projects/${projectId}/languages/${languageId}/progress` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/qa-checks`
	 */
	projectQAChecks(projectId: number) {
		return `/projects/${projectId}/qa-checks` as const;
	},

	/**
	 * Route for:
	 * - POST `/projects/{project.id}/reports`
	 */
	projectReports(projectId: number) {
		return `/projects/${projectId}/reports` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/reports/{report.id}`
	 */
	projectReport(projectId: number, reportId: string) {
		return `/projects/${projectId}/reports/${reportId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/reports/{report.id}/download`
	 */
	projectReportDownload(projectId: number, reportId: string) {
		return `/projects/${projectId}/reports/${reportId}/download` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/tasks`
	 * - POST `/projects/{project.id}/tasks`
	 */
	projectTasks(projectId: number) {
		return `/projects/${projectId}/tasks` as const;
	},

	/**
	 * Route for:
	 * - POST `/projects/{project.id}/tasks/{task.id}/exports`
	 */
	projectTaskExports(projectId: number, taskId: number) {
		return `/projects/${projectId}/tasks/${taskId}/exports` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/tasks/{task.id}`
	 * - DELETE `/projects/{project.id}/tasks/{task.id}`
	 * - PATCH `/projects/{project.id}/tasks/{task.id}`
	 */
	projectTask(projectId: number, taskId: number) {
		return `/projects/${projectId}/tasks/${taskId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/user/tasks`
	 */
	userTasks() {
		return "/user/tasks" as const;
	},

	/**
	 * Route for:
	 * - PATCH `/user/tasks/{task.id}`
	 */
	userTask(taskId: number) {
		return `/user/tasks/${taskId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/issues`
	 * @deprecated Use `Routes.projectComments` instead
	 */
	projectIssues(projectId: number) {
		return `/projects/${projectId}/issues` as const;
	},

	/**
	 * Route for:
	 * - PATCH `/projects/{project.id}/issues/{issue.id}`
	 * @deprecated Use `Routes.projectComment` instead
	 */
	projectIssue(projectId: number, issueId: string) {
		return `/projects/${projectId}/issues/${issueId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/user`
	 */
	currentUser() {
		return "/user" as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/members`
	 */
	projectMembers(projectId: number) {
		return `/projects/${projectId}/members` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/members/{member.id}`
	 */
	projectMember(projectId: number, memberId: number) {
		return `/projects/${projectId}/members/${memberId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/webhooks`
	 * - POST `/projects/{project.id}/webhooks`
	 */
	projectWebhooks(projectId: number) {
		return `/projects/${projectId}/webhooks` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/webhooks/{webhook.id}`
	 * - DELETE `/projects/{project.id}/webhooks/{webhook.id}`
	 * - PATCH `/projects/{project.id}/webhooks/{webhook.id}`
	 */
	projectWebhook(projectId: number, webhookId: number) {
		return `/projects/${projectId}/webhooks/${webhookId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/dictionaries`
	 */
	projectDictionaries(projectId: number) {
		return `/projects/${projectId}/dictionaries` as const;
	},

	/**
	 * Route for:
	 * - PATCH `/projects/{project.id}/dictionaries/{language.id}`
	 */
	projectDictionary(projectId: number, languageId: string) {
		return `/projects/${projectId}/dictionaries/${languageId}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/distributions`
	 * - POST `/projects/{project.id}/distributions`
	 */
	projectDistributions(projectId: number) {
		return `/projects/${projectId}/distributions` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/distributions/{hash}`
	 * - DELETE `/projects/{project.id}/distributions/{hash}`
	 * - PATCH `/projects/{project.id}/distributions/{hash}`
	 */
	projectDistribution(projectId: number, hash: string) {
		return `/projects/${projectId}/distributions/${hash}` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/distributions/{hash}/release`
	 * - POST `/projects/{project.id}/distributions/{hash}/release`
	 */
	projectDistributionRelease(projectId: number, hash: string) {
		return `/projects/${projectId}/distributions/${hash}/release` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/labels`
	 * - POST `/projects/{project.id}/labels`
	 */
	projectLabels(projectId: number) {
		return `/projects/${projectId}/labels` as const;
	},

	/**
	 * Route for:
	 * - GET `/projects/{project.id}/labels/{label.id}`
	 * - DELETE `/projects/{project.id}/labels/{label.id}`
	 * - PATCH `/projects/{project.id}/labels/{label.id}`
	 */
	projectLabel(projectId: number, labelId: number) {
		return `/projects/${projectId}/labels/${labelId}` as const;
	},

	/**
	 * Route for:
	 * - POST `/projects/{project.id}/labels/{label.id}/strings`
	 * - DELETE `/projects/{project.id}/labels/{label.id}/strings`
	 */
	projectLabelStrings(projectId: number, labelId: number) {
		return `/projects/${projectId}/labels/${labelId}/strings` as const;
	}
} as const;

export const RouteBases = {
	api: `https://api.crowdin.com/api/v${APIVersion}`,
	downloads: "https://production-enterprise-importer.downloads.crowdin.com"
} as const;

// Freeze bases object
Object.freeze(RouteBases);
