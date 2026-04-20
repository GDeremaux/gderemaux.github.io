import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import Projects from "./pages/ProjectsPage";
import About from "./pages/AboutPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }
]);

export default function App() {
    return <RouterProvider router={router} />
}
