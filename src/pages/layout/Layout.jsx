import { ToastBar, Toaster } from "react-hot-toast";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <Header />
      <main>
        <Outlet />
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "#FFF",
                color: "black",
              },
            },
            error: {
              style: {
                background: "red",
                color: "white",
              },
            },
          }}
          containerStyle={{
            top: 50,
            left: 20,
            bottom: 20,
            right: 20,
          }}
        >
          {(t) => (
            <ToastBar
              toast={t}
              style={{
                ...t.style,
                animation: t.visible
                  ? "custom-enter 1s ease"
                  : "custom-exit 1s ease",
              }}
            />
          )}
        </Toaster>
      </main>
    </div>
  );
};

export default Layout;
