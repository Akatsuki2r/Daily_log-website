import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SignUp from "./Pages/RegisterPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginBox } from "./components/RegistrationBoxes.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/SignUpPage", element: <SignUp /> },
  { path: "/Login", element: <LoginBox /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </StrictMode>,
);
