import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import Menu from "../components/Admin/Menu/Menu";
import Home from "../components/Admin/Home/Home";

import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";

import Subjects from "../components/Admin/Subject/Subjects";
import BrandLogo from "../components/NavBar/BrandLogo/BrandLogo";
import Search from '../components/NavBar/Search/Search';
import SecondaryMenu from '../components/NavBar/SecondaryMenu';
import { useEffect } from "react";
import { usePostHttp } from "../hooks/postHttp";

const AdminLayout = (props) => {
  const [validTokenLoading, validToken] = usePostHttp(null, '/auth/validate');

  const router = useRouter();
  const user = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  const { slug } = router.query;

  const angleDownIcon = (
    <FontAwesomeIcon
      icon={faAngleDown}
      size="lg"
      color="lightGray"
      className={`cursor-pointer hover:text-subheading`}
    />
  );

  useEffect(() => {
    if(validToken && !validToken.success)
      dispatch(UserLogout(false))
  },[validToken])

  return (
    <>
      <div className="relative">
        <BrandLogo />
        <Search />
        <SecondaryMenu />
      </div>
      <div className="relative w-full flex flex-col box-border">
        <div className="relative flex flex-col box-border">
          <div className="relative flex flex-col min-h-content top-navbar-height box-border">
            <div className="relative flex flex-col min-h-content box-border">
              <div className="relative box-border min-h-content flex flex-row flex-nowrap items-stretch justify-center">
                <div className="box-border w-full max-w-full flex-nowrap items-start relative flex flex-row justify-around">
                  <div
                    className={`box-border overflow-hidden sticky w-1/4 min-h-content top-navbar-height space-y-4 py-10`}
                  >
                    <Menu />
                  </div>
                  {!slug && <Home />}
                  {slug && slug[0] != "courses" && <Home />}
                  {/* COURSES HOME */}
                  {slug && slug[0] == "courses" && <Subjects />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
