import { createBrowserRouter } from "react-router-dom";
import Bodies from "../Pages/Bodies";
import BodiesId from "../Pages/BodiesId";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path: "/Bodies",
        element: <Bodies/>,
    },
    {
        path: "/Bodies/id",
        element: <BodiesId/>,
    },
  ]);
   export default router