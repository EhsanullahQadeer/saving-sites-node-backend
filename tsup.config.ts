import { defineConfig } from 'tsup';
import { Plugin } from 'esbuild';
import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

const yamlPlugin: Plugin = {
    name: 'yaml',
    setup(build) {
        // Handling YAML files
        build.onLoad({ filter: /\.yaml$/ }, async (args) => {
            const content = fs.readFileSync(path.resolve(args.path), 'utf8');
            const parsedContent = yaml.load(content);

            // Ensure the content is parsed as an object and return as JSON
            if (parsedContent !== null && typeof parsedContent === 'object') {
                return {
                    contents: JSON.stringify(parsedContent),
                    loader: 'json', // Treat the YAML content as JSON
                };
            } else {
                throw new Error(`Invalid YAML format in file: ${args.path}`);
            }
        });
    },
};

export default defineConfig({
    "entry": [
        "src",
        "!src/**/__tests__/**",
        "!src/**/*.test.*"
    ],
    "splitting": false,
    "sourcemap": true,
    "clean": true,
    esbuildPlugins: [yamlPlugin],
});
