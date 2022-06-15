import Api from "./api";

export const getVideoFilesByVideoInfoId = async (videoInfoId: string) => {
	const response = await Api.get(`VideoInfo/${videoInfoId}/VideoFiles`);
	return response;
};