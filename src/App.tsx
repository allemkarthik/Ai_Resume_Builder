import { createHashRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import CoverLetter from "./pages/CoverLetter";
import Resume from "./pages/Resume";
import Ats from "./pages/Ats";
import ColdMail from "./pages/ColdMail";

const appRouter = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <main className="pt-16">
          <Home />
        </main>
      </>
    ),
  },
  {
    path: "/coverletter",
    element: (
      <>
        <Header />
        <main className="pt-16">
          <CoverLetter />
        </main>
      </>
    ),
  },

  {
    path: "/resume",
    element: (
      <>
        <Header />
        <main className="pt-16">
          <Resume />
        </main>
      </>
    ),
  },
  {
    path: "/ats",
    element: (
      <>
        <Header />
        <main className="pt-16">
          <Ats />
        </main>
      </>
    ),
  },
  {
    path: "/coldemail",
    element: (
      <>
        <Header />
        <main className="pt-16">
          <ColdMail />
        </main>
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
