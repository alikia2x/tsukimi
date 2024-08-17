import { RouteObject } from "react-router-dom";
import WelcomePage from "./Welcome";
import ManualPage from "./Manual";
import MiAuthPage from "./MiAuthPage";

export const WelcomePageRouteConfig: RouteObject[] = [
	{
		path: "welcome",
		element: <WelcomePage />
	},
	{
		path: "welcome/manual",
		element: <ManualPage />
	},
	{
		path: "welcome/auth/misskey",
		element: <MiAuthPage />
	}
];
