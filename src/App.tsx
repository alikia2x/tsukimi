import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "routes/ErrorPage";
import Homepage from "routes/Homepage.tsx";
import MainPage from "routes/MainPage.tsx";
import "i18n/init";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { WelcomePageRouteConfig } from "routes/welcome/config";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainPage />,
		errorElement: <ErrorPage />
	},
	{
		path: "home",
		element: <Homepage />
	},
	...WelcomePageRouteConfig
]);

function App() {
	const { t } = useTranslation();
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t("tsukimi")}</title>
			</Helmet>

			<div className="relative bg-white dark:bg-black dark:text-white min-h-screen w-screen">
				<RouterProvider router={router} />
			</div>
		</div>
	);
}

export default App;
