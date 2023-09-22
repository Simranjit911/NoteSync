
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Protected from "./pages/Protected.jsx";
import SignUp from "./pages/SignUp.jsx";
import Signin from "./pages/Signin.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={<Protected />}>
        <Route path="/" index element={<Home />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
<RouterProvider router={router}/>
);
