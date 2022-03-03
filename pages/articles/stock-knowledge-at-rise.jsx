import { providers, useSession } from "next-auth/client";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FacebookIcon, FacebookShareButton } from "react-share";
import ArticleCarouselLayout from "../../components/ArticlesCarousel/ArticleCarouselLayout";
import Footer from "../../components/Footer";
import LoginModal from "../../components/HomePage/LoginModal";
import ModalLayout from "../../components/HomePage/ModalLayout";
import MobileNavbar from "../../components/HomePage/NavBar/MobileNavBar";
import NavBar from "../../components/NavBar";
import { usePostHttp } from "../../hooks/postHttp";
import { useUserManagementHook } from "../../hooks/userManagementHook";
import { DoLogin } from "../../redux/actions/UserAction";

export default function StockKnowledgeAtRISE(props) {
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
        <title>Stock Knowledge at RISE Hong Kong 2019</title>
        <meta
          property="og:url"
          content={`${process.env.WEBSITE_DOMAIN}/articles/learning-in-the-digital-age`}
        />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content={process.env.FACEBOOK_ID} />
        <meta
          property="og:title"
          content={`Stock Knowledge at RISE Hong Kong 2019 - ${process.env.WEBSITE_NAME}`}
        />
        <meta
          property="og:description"
          content="Stock Knowledge at RISE Hong Kong 2019"
        />
        <meta
          property="og:image"
          content={`${process.env.WEBSITE_DOMAIN}/images/articles/stock-knowledge-at-rise/header-img.svg`}
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
        path="Stock Knowledge at RISE Hong Kong 2019"
        showModal={setLoginModalOpen}
      />
      <div className="hero text-white px-20 py-10 space-y-2 md:w-full xs:w-screen">
        <h1 className="xl:text-6xl lg:text-6xl md:text-6xl sm:text-xl xs:text-xl xl:w-3/4 lg:w-3/4 md:w-full reno:w-full sm:w-full xs:w-full font-bold">
          Stock Knowledge at RISE Hong Kong 2019
        </h1>
        <p className="text-sm">By: Rome Salonga </p>
      </div>
      <div className="md:-mt-5 xs:-mt-4 md:mb-8 xl:w-full lg:w-full md:w-full reno:w-full sm:w-screen xs:w-screen">
        <img
          className="mx-auto w-3/4"
          src="/images/articles/stock-knowledge-at-rise/header-img.svg"
        />
      </div>
      <div className="md:w-full xs:w-screen flex justify-between lg:px-48 md:px-20 reno:px-20 sm:px-20 xs:px-20 text-gray-500 lg:flex-row xs:flex-col">
        <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 reno:w-1/4 sm:w-full xs:w-full">
          <p>Share this article</p>
          <div className="w-full h-10 flex items-center text-blue space-x-2">
            <FacebookShareButton url="http://localhost:3000/articles/stock-knowledge-at-rise">
              <FacebookIcon size={36} />
            </FacebookShareButton>
          </div>
        </div>
        <div className="xl:w-11/12 lg:w-11/12 md:w-11/12 reno:w-11/12 sm:w-full xs:w-full leading-relaxed">
          <p className="leading-relaxed">
            On one of the most unforgettable days of the year, Stock Knowledge,
            together with 27 other start-ups, were selected to represent the
            country in 2019’s Hong Kong RISE Conference.
            <br />
            <br />
            The event took place in Hong Kong Convention and Exhibition Center
            that lasted for four consecutive days, from July 8 to July 11 of the
            said year.
            <br />
            <br />
            It was a great pleasure to have the company invited for the
            exhibition, as it is a substantial way to meet and interact with
            potential clients. Being picked in the government as one of the
            participants was enough for the company’s kickoff in the industry.
            <br />
            <br />
            Our Founder and CEO, Ms. Anna Marie Benzon, got the chance to attend
            the talk of Dr. Eric Yang at Francis and Rose Yuen Campus in the
            University of Chicago. His “Building a Billion dollar AI Company in
            Global Education” conference was of great relevance and asset to the
            business.
            <br />
            <br />
            Earning the trust of its future associates, the company received a
            lot of leads from mentorships and talks. Soon enough, Stock
            Knowledge would become the provider of enlightenment for
            newly-established companies.
          </p>
          <img
            className="mx-auto mt-8"
            src="/images/articles/stock-knowledge-at-rise/image-1.svg"
          />
          <p className="text-xs leading-loose">
            Stock Knowledge joined alongside other most promising startups to
            represent the Philippines at the newly concluded RISE Hong Kong 2019
            last July 8-11, the largest tech conference in Asia, sponsored by
            DOST, DICT, and DTI. Companies were selected according to
            innovation, scalability, motivation and delegation profile.
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
