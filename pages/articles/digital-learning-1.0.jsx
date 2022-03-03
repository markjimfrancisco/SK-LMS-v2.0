import ArticleCarouselLayout from "../../components/ArticlesCarousel/ArticleCarouselLayout";
import Footer from "../../components/Footer";
import MobileNavbar from "../../components/HomePage/NavBar/MobileNavBar";
import ArticleNavbar from "../../components/NavBar";
import ModalLayout from "../../components/HomePage/ModalLayout";
import { useEffect, useState } from "react";
import { useUserManagementHook } from "../../hooks/userManagementHook";
import Head from "next/head";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { providers, useSession } from "next-auth/client";
import { useDispatch, useSelector } from "react-redux";
import { DoLogin } from "../../redux/actions/UserAction";
import { usePostHttp } from "../../hooks/postHttp";

export default function DigitalLearning1(props) {
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
        <title>Digital Learning 1.0 - Stock Knowledge</title>
        <meta
          property="og:url"
          content={`${process.env.WEBSITE_DOMAIN}/articles/digital-learning-1.0`}
        />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content={process.env.FACEBOOK_ID} />
        <meta
          property="og:title"
          content={`Digital Learning 1.0 - ${process.env.WEBSITE_NAME}`}
        />
        <meta property="og:description" content="Digital Learning 1.0" />
        <meta
          property="og:image"
          content={`${process.env.WEBSITE_DOMAIN}/images/articles/digital-learning-1.0/header-img.svg`}
        />
      </Head>
      <MobileNavbar />
      <ArticleNavbar
        showModal={setLoginModalOpen}
        page="article"
        path="New look, same goals– here’s Stock Knowledge’s promise to the future"
      />

      {loginModalOpen && (
        <ModalLayout
          providers={props.providers}
          showModal={setLoginModalOpen}
        />
      )}

      <div className="hero text-white px-20 py-10 space-y-2 md:w-full xs:w-screen">
        <h1 className="xl:text-6xl lg:text-6xl md:text-6xl sm:text-xl xs:text-xl xl:w-3/4 lg:w-3/4 md:w-full reno:w-full sm:w-full xs:w-full font-bold">
          Digital Learning 1.0
        </h1>
        <p className="text-sm">By: Rome Salonga </p>
      </div>
      <div className="md:-mt-5 xs:-mt-4 md:mb-8 xl:w-full lg:w-full md:w-full reno:w-full sm:w-screen xs:w-screen">
        <img
          className="mx-auto w-3/4"
          src="/images/articles/digital-learning-1.0/header-img.svg"
        />
      </div>
      <div className="md:w-full xs:w-screen flex justify-between lg:px-48 md:px-20 reno:px-20 sm:px-20 xs:px-20 text-gray-500 lg:flex-row xs:flex-col">
        <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 reno:w-1/4 sm:w-full xs:w-full">
          <p>Share this article</p>
          <div className="w-full h-10 flex items-center text-blue space-x-2">
            <FacebookShareButton url="http://localhost:3000/articles/digital-learning-1.0">
              <FacebookIcon size={36} />
            </FacebookShareButton>
          </div>
        </div>
        <div className="xl:w-11/12 lg:w-11/12 md:w-11/12 reno:w-11/12 sm:w-full xs:w-full leading-relaxed">
          <p className="leading-relaxed">
            “Learning is a treasure that will follow its owner everywhere.” Just
            like what you have read from that quotation, learning can be
            continually found at all points. Since technology has been around
            for years and has affected both education and the students’ way of
            learning, why not take advantage of its prominence to make studying
            way more interesting?
            <br />
            <br />
            On March 2, 2019 Stock Knowledge organized an open forum attended by
            college students from different top universities at Animo Labs in
            Andrew Gonzales Bldg., De La Salle University. The forum centralized
            on technology’s positive and negative impacts and was led by
            University of the Philippines Los Baños’ assistant professor, Dr.
            Reslond L. Reaño.
            <br />
            <br />
            Stock Knowledge’s Gamified Learning Tool (GLT) was introduced during
            the talk. Student leaders were given the chance to use the app as to
            which, they say, differs from their usual academics methods. Unlike
            dull classroom discussions, you get to learn while you play. A
            perfect example of hitting two birds with one stone - only that
            stone happens to be your mobile phone.
            <br />
            <br />
            The paradigm shift in education has been gradually happening due to
            the changing behaviors of the millennial students heavily influenced
            by current technologies. Some schools haven’t realized, catching up,
            and fully embraced digital approaches to be relevant in the
            Information Age. There are drawbacks of purely traditional and
            employing fully digital in terms of delivering quality education.
            <br />
            <br />
            Stock Knowledge is here to help turn problems into opportunities by
            providing an EdTech solution that bridges the gap between
            traditional and digital approaches.
          </p>
          <img
            className="mx-auto mt-8"
            src="/images/articles/digital-learning-1.0/image-1.svg"
          />
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
