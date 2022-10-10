import reactLogo from "./assets/react.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Academics from "./components/Academics/Academics";
import Error from "./components/Error/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "home",
          element: <Home></Home>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "academics",
          element: <Academics></Academics>,
        },
      ],
    },
    {
      path: "*",
      element: <Error></Error>,
    },
  ]);

  return (
    <div className="App ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
