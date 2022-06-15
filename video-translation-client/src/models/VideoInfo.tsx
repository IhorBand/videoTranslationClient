export default class VideoInfo {
	id: string;
	name: string;
	description: string;
	thumbnailFileId: string;
	thumbnailUrl: string;
	createdOnUtc: string;
	constructor() {
		this.id = "";
		this.name = "";
		this.description = "";
		this.thumbnailFileId = "";
		this.thumbnailUrl = "";
		this.createdOnUtc = "";
	}
}
