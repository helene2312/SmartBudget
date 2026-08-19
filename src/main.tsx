import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { router } from "./routes/routes";
import { APP_USER_ID } from "./config/appUser";
import { setUserId } from "./store/userStore";

import "./index.css";

const queryClient = new QueryClient();

setUserId(APP_USER_ID);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
