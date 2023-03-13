import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <div className="max-w-[90rem] mx-auto xl:px-10 pb-10">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
