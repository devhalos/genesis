import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { AuthProvider, type AuthProviderProps } from "react-oidc-context";
import App from "./App";

const authConfig: AuthProviderProps = {
  authority: import.meta.env.VITE_AUTH_AUTHORITY,
  client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URI,
  onSigninCallback: () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  },
};

console.info("auth config", authConfig);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...authConfig}>
      <App />
    </AuthProvider>
  </StrictMode>,
);
