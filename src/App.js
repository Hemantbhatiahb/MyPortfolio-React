import { useContext } from "react";
import AppContext from "./store/appContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/Root";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <AboutPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "experience", element: <ExperiencePage /> },
      { path: "skills", element: <SkillsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  const appCtx = useContext(AppContext);
  const { isDarkMode: darkMode } = appCtx;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white min-h-screen min-w-full px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <RouterProvider router={router}>
        </RouterProvider>
      </div>
    </div>
  );
}

export default App;
