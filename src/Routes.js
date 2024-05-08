import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";

export const routes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />
    },
  ];
  