import Api from "./api";

export const getAllVideoInfos = async () => {
	const response = await Api.get("VideoInfo/All");
	return response;
};

