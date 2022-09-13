import { ReactNode } from "react";
import Meta from "./meta";
import Alert from "./alert";
import Footer from "./footer";

const Layout = ({
  preview,
  children,
}: {
  children: ReactNode;
  preview: boolean;
}) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
