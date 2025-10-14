import { useAuth, useAutoSignin } from "react-oidc-context";

export default function App() {
  const { user, signoutRedirect } = useAuth();
  const { isLoading, isAuthenticated, error } = useAutoSignin({
    signinMethod: "signinRedirect",
  });

  if (isLoading) {
    return <div>Signing you in/out...</div>;
  }

  if (!isAuthenticated) {
    return <div>Unable to log in</div>;
  }

  if (error) {
    return <div>An error occurred</div>;
  }

  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button
        onClick={() =>
          void signoutRedirect({
            post_logout_redirect_uri: import.meta.env.VITE_AUTH_REDIRECT_URI,
          })
        }
      >
        Log out
      </button>
    </>
  );
}
