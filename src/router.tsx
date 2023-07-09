import ModelLayout from "./layout/ModelLayout";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Whether from "./pages/Weather";

export const route = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "register",
    element: <Registration />,
  },
  {
    path: "weather",
    element: <Whether />,
  },
  {
    path: "*",
    element: (
      // absolute app level content component
      <ModelLayout>404 Page Not Found</ModelLayout>
    ),
  },
];
