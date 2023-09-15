import yaml from 'js-yaml';
import type { Parser } from './typings.js';

const parser: Parser = (file, extension) => {
    switch (extension) {
        case '.yml':
        case '.yaml':
            return yaml.load(file);
        case '.json':
        default:
            return JSON.parse(file);
    }
};

export default parser;
