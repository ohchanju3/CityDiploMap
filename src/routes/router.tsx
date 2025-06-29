import { createBrowserRouter } from "react-router-dom";

//layouts
import DefaultLayout from "@layouts/DefaultLayout";
import PrivateRoute from "@layouts/PrivateLayout";
import GuestLayout from "@layouts/GuestLayout";
import Mainpage from "@pages/Main/Mainpage";
import RecommendPage from "@pages/recommend/RecommendPage";
import ExchangeStatusPage from "@pages/cooperation/ExchangeStatusPage";
import PublicDiplomacyPage from "@pages/citizen/PublicDiplomacyPage";

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
          { path: "/citizen", element: <PublicDiplomacyPage /> },
          { path: "/cooperation", element: <ExchangeStatusPage /> },
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
