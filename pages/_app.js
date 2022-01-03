import App from "next/app";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";
import NextProgress from "next-progress";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
