import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import "@mantine/core/styles.css";
import 'react-app-polyfill/stable';

import { MantineProvider } from "@mantine/core";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MantineProvider>
			<App />
		</MantineProvider>
	</React.StrictMode>
);
