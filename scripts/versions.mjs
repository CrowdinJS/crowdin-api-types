import { exec } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const execAsync = promisify(exec);
const genESM = (path, version) => {
	path = `dist/${path}`;
	return execAsync(
		`npx gen-esm-wrapper "${join(root, path, `${version}.js`)}" "${join(root, path, `${version}.mjs`)}"`
	);
};

await Promise.allSettled(["v2"].map((version) => [genESM(`rest/${version}`, "index"), genESM("", version)]).flat());
