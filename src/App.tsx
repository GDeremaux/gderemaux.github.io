import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import Projects from "./pages/projects";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'projects',
                element: <Projects />
            }
        ]
    }
]);

export default function App() {
    return <RouterProvider router={router} />
}
