import { useEffect, useState } from "react";
import "./Videos.css";
import { IconButton, Skeleton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getAllVideoInfos } from "../../api/VideoInfoApi";
import { notifyWarning } from "../../components/Notifications/Warning";
import VideoInfo from "../../models/VideoInfo";
import { getVideoFilesByVideoInfoId } from "../../api/VideoFilesApi";

var autoRefreshFlowIntervalId: NodeJS.Timer;
var autoRefreshFlowIntervalIsOn: boolean = false;

const VideosComponent = () => {
	const [videoInfos, setVideoInfos] = useState<VideoInfo[]>([]);

	const retrieveVideoInfos = async () => {
		const response = await getAllVideoInfos();
		return response.data as VideoInfo[];
	};

	const retrieveVideoFileByVideoInfo = async(videoInfoId: string) => {
		const response = await getVideoFilesByVideoInfoId(videoInfoId);
		return response.data;
	}

	const retrieveVideoFiles = async () => {
		const response = await getAllVideoInfos();
		return response.data as VideoInfo[];
	};

	useEffect(() => {
		retrieveVideoInfos().then((videoInfos) => {
			setVideoInfos(videoInfos);
		});
	}, []);

	useEffect(() => {
		
	}, [videoInfos]);

	return (
		<>
			<div className="video-list-container">
				{
					videoInfos.map((videoInfo, i) => 
						<div className="video-container">
							<div className="video-image-container">
								<a href="http://videotranslate.lol:5003/videos/269dbcf0-0009-49fd-8195-0ea00be6f88b/269dbcf0-0009-49fd-8195-0ea00be6f88b.mp4">
									<img src={videoInfo.thumbnailUrl} className="image" />
								</a>
							</div>
							<div>
								{videoInfo.name}
							</div>
						</div>
					)
				}
			</div>
		</>
	);
};
export default VideosComponent;
