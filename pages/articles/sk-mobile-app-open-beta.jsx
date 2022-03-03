import { useEffect, useState } from "react";
import ArticleCarouselLayout from "../../components/ArticlesCarousel/ArticleCarouselLayout";
import Footer from "../../components/Footer";
import MobileNavbar from "../../components/HomePage/NavBar/MobileNavBar";
import NavBar from "../../components/NavBar";
import { useUserManagementHook } from "../../hooks/userManagementHook";
import LoginModal from "../../components/HomePage/LoginModal";
import { FacebookIcon, FacebookShareButton } from "react-share";
import ModalLayout from "../../components/HomePage/ModalLayout";
import Head from "next/head";
import { DoLogin } from "../../redux/actions/UserAction";
import { usePostHttp } from "../../hooks/postHttp";
import { useDispatch, useSelector } from "react-redux";
import { providers, useSession } from "next-auth/client";

export default function MobileAppOpenBeta(props) {
  useUserManagementHook();
  const dispatch = useDispatch();

  const [session, loading] = useSession();

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const user = useSelector((state) => state.UserReducer);

  const [toLogin, setToLogin] = useState(false);

  const [authLoginLoading, authData] = usePostHttp(
    !user.isLogin && session && toLogin
      ? { name: session.user.name, email: session.user.email }
      : null,
    toLogin ? "/login/auth" : null
  );

  useEffect(() => {
    if (session) {
      setToLogin(true);
    }
  }, [session]);

  useEffect(() => {
    if (authData.success) {
      setLoginModalOpen(false);
      dispatch(DoLogin(true, authData.result));
    }
  }, [authData]);

  useEffect(() => {
    if (user.data && !user.data.verified) setLoginModalOpen(true);
  }, [user]);

  return (
    <>
      <Head>
        <title>
          Stock Knowledge XR Mobile App (Open Beta) Is Now Available for
          Download!
        </title>
        <meta
          property="og:url"
          content={`${process.env.WEBSITE_DOMAIN}/articles/learning-in-the-digital-age`}
        />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content={process.env.FACEBOOK_ID} />
        <meta
          property="og:title"
          content={`Stock Knowledge XR Mobile App (Open Beta) Is Now Available for
          Download! - ${process.env.WEBSITE_NAME}`}
        />
        <meta
          property="og:description"
          content="Stock Knowledge XR Mobile App (Open Beta) Is Now Available for
          Download!"
        />
        <meta
          property="og:image"
          content={`${process.env.WEBSITE_DOMAIN}/images/articles/sk-mobile-app-open-beta/header-img.svg`}
        />
      </Head>
      {loginModalOpen && (
        <ModalLayout
          providers={props.providers}
          showModal={setLoginModalOpen}
        />
      )}

      <MobileNavbar />
      <NavBar
        page="article"
        path="Stock Knowledge XR Mobile App (Open Beta) Is Now Available for Download!"
        showModal={setLoginModalOpen}
      />
      <div className="hero text-white px-20 py-10 space-y-2 md:w-full xs:w-screen">
        <h1 className="xl:text-6xl lg:text-6xl md:text-6xl sm:text-xl xs:text-xl xl:w-3/4 lg:w-3/4 md:w-full reno:w-full sm:w-full xs:w-full font-bold">
          Stock Knowledge XR Mobile App (Open Beta) Is Now Available for
          Download!
        </h1>
        <p className="text-sm">By: Celine Veloso, Marketing</p>
      </div>
      <div className="md:-mt-5 xs:-mt-4 md:mb-8 xl:w-full lg:w-full md:w-full reno:w-full sm:w-screen xs:w-screen">
        <img
          className="mx-auto w-3/4"
          src="/images/articles/sk-mobile-app-open-beta/header-img.svg"
        />
      </div>
      <div className="md:w-full xs:w-screen flex justify-between lg:px-48 md:px-20 reno:px-20 sm:px-20 xs:px-20 text-gray-500 lg:flex-row xs:flex-col">
        <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 reno:w-1/4 sm:w-full xs:w-full">
          <p>Share this article</p>
          <div className="w-full h-10 flex items-center text-blue space-x-2">
            <FacebookShareButton url="http://localhost:3000/articles/sk-mobile-app-open-beta">
              <FacebookIcon size={36} />
            </FacebookShareButton>
          </div>
        </div>
        <div className="xl:w-11/12 lg:w-11/12 md:w-11/12 reno:w-11/12 sm:w-full xs:w-full leading-relaxed">
          <h1 className="text-lg text-blue-500 font-bold">
            A Unique Learning Experience for Students and Teachers
          </h1>
          <br />
          <p>
            The Stock Knowledge team has been hard at work the past few months
            in building a tool to enhance the learning experience for students.
            We are now proud to launch the Stock Knowledge XR Mobile App in Open
            Beta! The app contains gamified Augmented Reality (AR) and Virtual
            Reality (VR) STEM contents.
            <br />
            <br />
            This mobile app provides experiential learning experiences that will
            allow students to interact, explore, and immerse themselves in the
            lessons they are learning.
          </p>
          <br />
          <h1 className="text-lg text-blue-500 font-bold">
            What Users Can Expect
          </h1>
          <br />
          <p>
            The users of the app can take lessons in three different Modes. Each
            Mode varies in the level of interaction and thinking required. Mode
            One lessons are interactive lectures; Mode Two lessons are
            activities and experiments; while Mode Three lessons have Gamified
            Assessments.
            <br />
            <br />
            For the current version of the app, it allows users to play as they
            take the lessons or modules in different modes.
            <br />
            <br />
            Smartphone users without VR headsets are able to use the app with
            the “360” mode. Those with VR headsets (whether a VR box or the
            cardboard version) get to “gaze” or “tap” around in a Virtual
            Reality environment.
            <br />
            <br />
            Meanwhile, AR contents are used with matching Visual Sheets to scan
            images.
            <br />
            <br />
            Teachers are already excited to incorporate this tool in their
            lesson plans!
          </p>
          <br />
          <h1 className="text-lg text-blue-500 font-bold">How To Install</h1>
          <br />
          <p>
            The Stock Knowledge XR Mobile App is available to anyone and is FREE
            to download and install. It is currently available for Android OS
            only.
            <br />
            <br />A Step-by-Step Manual is available for use. Simply click on
            this&nbsp;
            <a
              className="text-skBlue"
              href={`https://www.canva.com/design/DAEbwXGKT18/z17lS7aqzhny6hOVW2F9CQ/view?utm_content=DAEbwXGKT18&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton#2`}
            >
              link
            </a>{" "}
            and follow the easy instructions.
            <br />
            <br />
            Are you ready to level up your learning? We look forward to hearing
            what you think!
            <a
              href={`https://www.canva.com/design/DAEbwXGKT18/z17lS7aqzhny6hOVW2F9CQ/view?utm_content=DAEbwXGKT18&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton#2`}
            >
              <img
                className="mx-auto my-8"
                src="/images/articles/sk-mobile-app-open-beta/image-1.png"
              />
            </a>
          </p>
        </div>
      </div>
      <div className="">
        <ArticleCarouselLayout />
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  return { props: { providers: await providers(context) } };
}
