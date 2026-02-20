import { createHashRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import CoverLetter from "./pages/CoverLetter";
import Resume from "./pages/Resume";

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
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
