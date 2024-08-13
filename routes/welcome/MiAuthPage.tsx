import { useSearchParams } from "react-router-dom";
import Template from "./Template";

export default function MiAuthPage() {
	const [searchParams] = useSearchParams();
	const session = searchParams.get("session");
	if (session === null) {
		return (
			<div className="flex flex-col gap-8 justify-center items-center h-screen">
				<h1 className="text-4xl font-bold">Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p className="text-slate-400">
					<i>Invalid session parameter</i>
				</p>
			</div>
		);
	}
	return (
		<Template>
			<h1>{session}</h1>
		</Template>
	);
}
