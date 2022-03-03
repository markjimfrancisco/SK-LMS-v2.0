import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import NavBar from "./HomePage/NavBar/NavBar";

export default function ArticleNavBar(props) {
  return (
    <>
      {/* <div style={{borderRadius: visibility < 0.3 || props.page != 'home' ? '0' : '0 0 100% 100%'}} ref={ref} className={`md:flex xs:hidden hero w-full p-4 ${props.page != 'home' ? 'h-20' :'h-96'} bg-nav justify-${visibility < 0.3 ? "between" : "center"} items-center ${fixNavBar && !props.loginModalOpen ? 'fixed top-0' : ''} z-40 shadow-md`}>
            {visibility < 0.3 && 
              <a href="/" className="lg:w-1/4 flex items-center text-xl text-white md:w-2/12 space-x-2">
                <img className="w-12" src="/images/logo.png" />
                <h4 className="lg:flex md:hidden">Stock &nbsp;<span className="font-bold">Knowledge</span></h4>
              </a>
            }
              <div className={`lg:w-3/4 md:w-full flex items-center text-white text-3xl font-bold`}>
                <ul ref={menuRef} className="flex justify-around w-full lg:text-base md:text-xs">
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
                    <a href="/#sponsor">Partners</a>
                  </li>
                  <li>
                    <a href="/#article">Articles</a>
                  </li>
                  <li>
                    <a href="/#contactus">Contact Us</a>
                  </li>
                </ul>
                <button onClick={e => {props.showModal(true)}} className="bg-green-500 rounded-full font-bold text-base text-white py-2 px-4">{user.isLogin ? 'LMS' : 'Login' }</button>
              </div>
            </div> */}
      {/* <div
        className={`md:flex xs:hidden lg:w-full reno:w-full md:w-full sm:w-screen xs:w-screen p-4 h-20 justify-between items-center`}
      >
        <a
          href="/"
          className="lg:w-1/4 flex items-center text-xl text-heading md:w-2/12 space-x-2"
        >
          <img className="w-12" src="/images/logo.png" />
          <h4 className="lg:flex md:hidden">
            Stock &nbsp;<span className="font-bold text-skBlue">Knowledge</span>
          </h4>
        </a>
        <div
          className={`lg:w-3/4 md:w-full flex items-center text-subheading text-3xl font-bold`}
        >
          <ul className="flex justify-around w-full lg:text-base md:text-xs">
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
          </ul>
          <button
            onClick={(e) => {
              props.showModal(true);
            }}
            className="bg-green-500 rounded-full font-bold text-base text-white py-2 px-4"
          >
            {user.isLogin ? "LMS" : "Login"}
          </button>
        </div>
      </div> */}
      <NavBar showModal={props.showModal} />
      {props.path && (
        <div className="xs:hidden md:flex border md:w-full bg-gray-100 h-10 px-10  align-center">
          <p className="self-center text-sm">
            <span className="align-middle text-blue-400">Articles</span>
            <span className="align-middle text-gray-500"> / {props.path}</span>
          </p>
        </div>
      )}
    </>
  );
}
