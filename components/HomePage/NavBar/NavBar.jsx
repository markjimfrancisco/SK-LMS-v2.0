import {
  faChevronDown,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";
import { UserLogout } from "../../../redux/actions/UserAction";

import MiniProfile from "../../NavBar/MiniProfile";

const NavBar = ({ showModal }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserReducer);
  const router = useRouter();

  const chevronDown = <FontAwesomeIcon icon={faChevronDown} />;
  const cartIcon = (
    <FontAwesomeIcon
      onClick={() => {
        router.push("/cart", undefined, { shallow: true, scroll: true });
      }}
      icon={faShoppingCart}
      size="lg"
      className="text-skBlue cursor-pointer"
    />
  );

  return (
    <div
      className={`xxs:hidden md:flex sm:hidden xs:hidden lg:w-full reno:w-full md:w-full sm:w-screen xs:w-screen p-4 h-20 justify-between items-center`}
    >
      <a
        href="/"
        className="lg:w-1/4 md:w-1/12 flex items-center text-xl text-heading space-x-2"
      >
        <img className="w-12" src="/images/logo.png" />
        <h4 className="lg:flex md:hidden">
          Stock &nbsp;<span className="font-bold text-skBlue">Knowledge</span>
        </h4>
      </a>
      <div
        className={`lg:w-3/4 md:w-full flex items-center text-subheading text-3xl font-bold`}
      >
        <ul className="flex items-center justify-around w-full lg:text-base md:text-xs space-x-4">
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#solution">Solutions</a>
          </li>
          <li>
            <a href="/#story">Story</a>
          </li>
          <li>
            <a href="/#team">Team</a>
          </li>
          <li>
            <a href="/#testimonial">Testimonials</a>
          </li>
          <li>
            <a href="/#partners">Partners</a>
          </li>
          <li>
            <a href="/#articles">Articles</a>
          </li>
          <li>
            <a href="/#contactus">Contact Us</a>
          </li>
          <li>{cartIcon}</li>
          <li>
            {user.isLogin && user.data.verified ? (
              <div className="group relative flex items-center space-x-2">
                <MiniProfile />
                {chevronDown}
                <div className="hidden absolute top-12 right-0 w-auto h-auto px-4 py-2 bg-white rounded-lg shadow font-semibold group-hover:block">
                  <div
                    onClick={() =>
                      router.push(`/orders`)
                    }
                    className="py-2 cursor-pointer"
                  >
                    Orders
                  </div>
                  <div
                    onClick={() =>
                      router.push(`/lms`)
                    }
                    className="py-2 cursor-pointer"
                  >
                    LMS
                  </div>
                  {(user.data.title == "teacher" ||
                    user.data.title == "admin") && (
                    <div
                      onClick={() =>
                        router.push(`/teacher`)
                      }
                      className="py-2 cursor-pointer"
                    >
                      Teacher
                    </div>
                  )}
                  {user.data.title == "admin" && (
                    <div
                      onClick={() =>
                        router.push(`/admin`)
                      }
                      className="py-2 cursor-pointer"
                    >
                      Admin
                    </div>
                  )}
                  <div
                    onClick={() => dispatch(UserLogout(false))}
                    className="py-2 cursor-pointer"
                  >
                    Logout
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={(e) => {
                  showModal(true);
                }}
                className="bg-skBlue rounded-full font-bold text-base text-white py-2 px-4"
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;