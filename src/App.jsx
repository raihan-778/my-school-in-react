import {} from "firebase/auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Academics from "./components/Academics/Academics";
import Activity from "./components/Activities/Activity";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Main from "./Layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "home",
          loader: async () => {
            return fetch(`fakeInfo.json`);
          },
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
        {
          path: "activities",
          element: <Activity></Activity>,
        },
      ],
    },
    {
      path: "*",
      element: <Error></Error>,
    },
  ]);

  return (
    <div className="App min-h-screen">
      <RouterProvider router={router}></RouterProvider>
      const auth = getAuth()
    </div>
  );
}

export default App;
