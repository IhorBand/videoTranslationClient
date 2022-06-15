import Api from "./api";

export const getAllVideoInfos = async () => {
	const response = await Api.get("api/VideoInfo/All");
	return response;
};

