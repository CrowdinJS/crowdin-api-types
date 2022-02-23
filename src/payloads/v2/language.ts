export interface APILanguage {
	data: {
		id: string;
		name: string;
		editorCode: string;
		twoLettersCode: string;
		threeLettersCode: string;
		locale: string;
		androidCode: string;
		osxCode: string;
		osxLocale: string;
		pluralCategoryNames: string[];
		pluralRules: string;
		pluralExamples: string[];
		textDirection: string;
		dialectOf: string;
	};
}
