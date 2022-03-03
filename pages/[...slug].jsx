import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/Shop/Cart";
import Footer from "../components/Footer";
import ModalLayout from "../components/HomePage/ModalLayout";
import MobileNavbar from "../components/HomePage/NavBar/MobileNavBar";
import { usePostHttp } from "../hooks/postHttp";
import { useUserManagementHook } from "../hooks/userManagementHook";
import Checkout from "../components/Shop/Checkout";
import OrderDetails from "../components/Shop/OrderDetails";
import NavBar from "../components/HomePage/NavBar/NavBar";
import Orders from "../components/Shop/Orders";

const Slug = () => {
  useUserManagementHook();

  const dispatch = useDispatch();

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const user = useSelector((state) => state.UserReducer);
  const router = useRouter();

  const { code, signup, forgotpassword } = router.query;

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const [quantity, setQuantity] = useState(1);

  const [screenLoading, screenData] = usePostHttp(
    width && height ? { width, height } : "",
    "/screen"
  );



  useEffect(() => {
    if (window.screen.width) setWidth(window.screen.width);
    if (window.screen.height) setHeight(window.screen.height);
  }, []);

  useEffect(() => {
    if (code) setLoginModalOpen(true);
  }, [code]);

  useEffect(() => {
    if (signup) setLoginModalOpen(true);
  }, [signup]);

  useEffect(() => {
    if (user.data && !user.data.verified) setLoginModalOpen(true);
  }, [user]);

  useEffect(() => {
    if (forgotpassword) setLoginModalOpen(true);
  }, [forgotpassword]);



  return (
    <>
      <Head>
        <title>Stock Knowledge</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {loginModalOpen && (
        <ModalLayout
          signup={signup}
          code={code}
          forgotpassword={forgotpassword}
          showModal={setLoginModalOpen}
        />
      )}
      <MobileNavbar showModal={setLoginModalOpen} />
      <NavBar showModal={setLoginModalOpen} />
      <div id="home" className="sm:w-screen xs:w-screen">
        {router.query.slug == 'cart' && <Cart showModal={setLoginModalOpen} quantity={quantity} setQuantity={setQuantity} />}
        {router.query.slug == 'checkout' && <Checkout quantity={quantity} setQuantity={setQuantity} />}
        {router.query.slug == 'order' && router.query.orderid && <OrderDetails userid={user.data.userid} orderid={router.query.orderid} />}
        {router.query.slug == 'orders' && <Orders userid={user.data.userid} />}

      </div>
      <Footer />
    </>
  );
};

export default Slug;
