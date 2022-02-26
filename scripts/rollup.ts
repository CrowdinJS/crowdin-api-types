import versionInjector from "rollup-plugin-version-injector";

export default [
	{
		input: "./dist/v2.js",
		output: [
			{
				file: "./dist/v2.js",
				format: "cjs"
			}
		],
		plugins: [versionInjector()]
	}
];
