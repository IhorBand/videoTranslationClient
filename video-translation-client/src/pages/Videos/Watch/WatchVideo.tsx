import React from "react";
import Select, { ActionMeta, Options, SingleValue } from "react-select";
import "./WatchVideo.css";
import VideoInfo from "../../../models/VideoInfo"

interface Props {
	videoInfos: Array<VideoInfo>;
	onVideoInfoSelected: (value: string) => Promise<void>;
}

interface SomeOption {
	readonly value: string;
	readonly label: string;
}

export default function WatchVideo(props: Props) {
	const someOptions: SomeOption[] = props.videoInfos.map((x) => {
		return { label: x.name, value: x.id };
	});

	const [videoInfo, setvideoInfo] = React.useState<VideoInfo | undefined>(
		props.videoInfos[0],
	);

	const handleChange = (
		option: SingleValue<SomeOption>,
		actionMeta: ActionMeta<SomeOption>,
	) => {
		setvideoInfo(props.videoInfos.find((x) => x.id == option?.value));
		props.onVideoInfoSelected(option?.value ?? "");
	};

	return (
		<Select<SomeOption>
			aria-label="videoInfo"
			defaultValue={someOptions[0]}
			options={someOptions}
			menuIsOpen={true}
			onChange={handleChange}
			className="videoInfoList"
		/>
	);
}
