import LoginRequired from "components/LoginRequired";
import Timeline from "components/timeline";

export default function Homepage() {
	return (
		<LoginRequired>
			<div className="flex h-screen">
				<Timeline />
			</div>
		</LoginRequired>
	);
}
