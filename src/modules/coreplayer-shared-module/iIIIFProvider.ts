

interface IIIIFProvider{
	config: any;
	sequence: any;
	manifest: any;
	type: string;
	isHomeDomain: boolean;
	isOnlyInstance: boolean;
	sequenceIndex: number;
	isReload: boolean;
	configExtension: string;
	domain: string;
	isLightbox: boolean;

	load(): void;
	reload(callback: any): void;
	//parseSections(section: any, assets: any[], path: string): void;
	//parseStructures(structure: any, assetSequences: any[], path: string): void;
	//replaceSectionType(sectionType: string): string;
	//getRootSection(): any;
	//getTitle(): string;
	//getSeeAlso(): any;
	getMediaUri(fileUri: string): string;
	getThumbUri(asset: any, thumbsBaseUri?: string, thumbsUriTemplate?: string): string;
}

export = IIIIFProvider;