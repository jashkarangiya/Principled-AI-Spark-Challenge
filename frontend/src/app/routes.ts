import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { CareerList } from "./pages/CareerList";
import { CareerDetail } from "./pages/CareerDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: CareerList },
      { path: "career/:slug", Component: CareerDetail }
    ]
  }
]);
