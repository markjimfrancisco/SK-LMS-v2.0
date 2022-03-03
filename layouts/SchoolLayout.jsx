import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import CalendarLayout from "../components/Calendar/CalendarLayout";
import Menu from "../components/LMS/Menu/Menu";
import Home from "../components/LMS/Home/Home";
import SecondaryMenu from "../components/NavBar/SecondaryMenu";
import Search from "../components/NavBar/Search/Search";
import BrandLogo from "../components/NavBar/BrandLogo/BrandLogo";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import Courses from "../components/LMS/Courses/Courses";
import Course from "../components/LMS/Course/Course";
import CourseTopic from "../components/LMS/CourseTopic/CourseTopic";

export default function SchoolLayout(props) {
  const router = useRouter();
  const user = useSelector((state) => state.UserReducer);

  const { slug } = router.query;

  const angleDownIcon = (
    <FontAwesomeIcon
      icon={faAngleDown}
      size="lg"
      color="lightGray"
      className={`cursor-pointer hover:text-subheading`}
    />
  );
  
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
                    className={`box-border overflow-hidden sticky ${
                      slug && slug[0] && slug[1] ? "w-1/4" : "w-1/6"
                    } min-h-content top-navbar-height space-y-4 py-10`}
                  >
                    <Menu />
                  </div>
                  {!slug && <Home />}
                  {slug && slug[0] != "courses" && <Home />}
                  {/* COURSES HOME */}
                  {slug && slug[0] == "courses" && !slug[1] && <Courses />}

                  {/* COURSES - SUBJECT - LESSON OVERVIEW */}
                  {slug && slug[0] == "courses" && slug[1] && !slug[2] && (
                    <Course subject={slug[1]} />
                  )}

                  {/* COURSES - SUBJECT - LESSON - TOPIC VIEW */}
                  {slug && slug[0] == "courses" && slug[1] && slug[2] && (
                    <CourseTopic />
                  )}
                                      <div className="box-border flex flex-col overflow-hidden sticky w-1/4 min-h-content top-navbar-height space-y-4 py-10">
                      <CalendarLayout />
                    </div>
                  {/* {!slug && (
                    <div className="box-border flex flex-col overflow-hidden sticky w-1/4 min-h-content top-navbar-height space-y-4 py-10">
                      <CalendarLayout />
                    </div>
                  )} */}

                  {/* {slug && slug[0] == "courses" && !slug[1] && (
                    <div className="box-border flex flex-col overflow-hidden sticky w-1/4 min-h-content top-navbar-height space-y-4 py-10">
                      <CalendarLayout />
                    </div>
                  )} */}
                  {/* {slug && slug[0] == "courses" && slug[1] && slug[2] && (
                    <>
                      <div className="box-border flex flex-col overflow-hidden sticky w-1/4 min-h-content top-navbar-height space-y-4 py-10">
                        <h1 className="text-xl px-4">Course Content</h1>
                        <div className="box-border w-full px-4 flex flex-row justify-between">
                          <p>Course Progress</p>
                          <p>15%</p>
                        </div> */}
                        {/*progress bar */}
                        {/* <div className="h-auto w-full px-4">
                          <div className="h-6 border border-skBlue rounded-full">
                            <div
                              style={{ width: "15%" }}
                              className="h-full bg-skBlue rounded-full"
                            ></div>
                          </div>
                        </div> */}
                        {/*progress bar */}
                        {/* <div className="box-border w-full flex flex-col pb-4 px-4 border-b-2">
                          <div>
                            <h1 className="text-xl">Lesson 0: Lorem Ipsum</h1>
                          </div>
                          <div className="w-full flex space-x-6">
                            <h4>1hr 50mins</h4>
                            <h4>2/4</h4>
                          </div>
                        </div>
                      </div>
                    </>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
