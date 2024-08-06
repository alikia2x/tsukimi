import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from 'routes/ErrorPage';
import Homepage from 'routes/Homepage.tsx';
import MainPage from 'routes/MainPage.tsx';
import WelcomePage from 'routes/Welcome.tsx';
import "./i18n";

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
		errorElement: <ErrorPage />
	},
	{
		path: 'home',
		element: <Homepage />
	},
	{
		path: 'welcome',
		element: <WelcomePage />,
	}
]);

function App() {
	return (
		<div className="relative bg-white dark:bg-black dark:text-white min-h-screen w-screen">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
