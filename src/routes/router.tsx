import { createBrowserRouter } from "react-router-dom";

//layouts
import DefaultLayout from "@layouts/DefaultLayout";
import PrivateRoute from "@layouts/PrivateLayout";
import GuestLayout from "@layouts/GuestLayout";
import Mainpage from "@pages/Main/Mainpage";
import RecommendPage from "@pages/recommend/RecommendPage";

//TODO: 플젝에 따라 다르게 설정 필요
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        element: <GuestLayout />,
        children: [
          { path: "/", element: <Mainpage /> },
          { path: "/recommend", element: <RecommendPage /> },
        ],
      },
      {
        element: <PrivateRoute />,
        children: [],
      },
    ],
  },
]);

export default router;
