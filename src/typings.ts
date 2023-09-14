export type FileExtension = '.yml' | '.yaml' | '.json';

export type Parser = (file: string, extension: FileExtension) => unknown;
