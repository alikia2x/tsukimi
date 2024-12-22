import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-app-polyfill/stable";
import "abortcontroller-polyfill/dist/polyfill-patch-fetch";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HelmetProvider>
			<App />
		</HelmetProvider>
	</React.StrictMode>
);
