import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Context/AuthContext.jsx";
import Router from "./Router/Router.jsx";
import "./index.css";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <HelmetProvider>
                    <RouterProvider router={Router} />
                    <Toaster />
                </HelmetProvider>
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
