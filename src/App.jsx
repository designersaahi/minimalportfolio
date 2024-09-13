import "./App.css";
import Work from "./components/portfolio/Work";
import About from "./components/portfolio/About";
import Sandbox from "./components/portfolio/Sandbox";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/portfolio/MainLayout";
import Project from "./components/portfolio/Project";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Work />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/sandbox",
        element: <Sandbox />,
      },
      {
        path: "/project/:title",
        element: <Project />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
