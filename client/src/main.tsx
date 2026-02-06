import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SignUp from "./Pages/RegisterPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginBox } from "./components/RegistrationBoxes.tsx";
import Home from "./Pages/Home.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/SignUpPage", element: <SignUp /> },
  { path: "/Login", element: <LoginBox /> },
  { path: "/Home", element: <Home /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>,
);
