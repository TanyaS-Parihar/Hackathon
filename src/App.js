import logo from "./logo.svg";
import "./App.css";
import Gravity1 from "./Gravity1";
import Gravity2 from "./Gravity2";
import Gravity3 from "./Gravity3";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Gravity4 from "./Gravity4";
import Gravity5 from "./Gravity5";
import Gravity6 from "./Gravity6";
import Gravity7 from "./Gravity7";
import Gravity8 from "./Gravity8";
import WelcomePage from "./WelcomePage";

const Body = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Gravity1 />,
      },
      {
        path: "/two",
        element: <Gravity2 />,
      },
      {
        path: "/three",
        element: <Gravity3 />,
      },
      {
        path: "/four",
        element: <Gravity4 />,
      },
      {
        path: "/five",
        element: <Gravity5 />,
      },
      {
        path: "/six",
        element: <Gravity6 />,
      },
      {
        path: "/seven",
        element: <Gravity7 />,
      },
      {
        path: "/eight",
        element: <Gravity8 />,
      },
      {
        path: "/welcome",
        element: <WelcomePage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
