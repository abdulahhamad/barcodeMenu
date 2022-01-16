import App from "next/app";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";
import NextProgress from "next-progress";
import { CartProvider } from "react-use-cart";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <CartProvider>
      <NextProgress />
      <Component {...pageProps} />
    </CartProvider>
    </>
  );
}

export default MyApp;
