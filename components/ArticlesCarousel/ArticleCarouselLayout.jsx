import { useEffect, useCallback, useState } from "react";
import { useArticlesHook } from "../../hooks/articlesHook";

import ArticleCarouselContent from "./ArticleCarouselContent";
import CarouseControl from "./CarouselControl";
export default function ArticleCarouselLayout(props) {
  const articles = useArticlesHook();
  const [carouselStatus, setCarouselStatus] = useState(null);

  useEffect(() => {
    if (articles) {
      setCarouselStatus({ current: 0, next: 1, prev: articles.length - 1 });
    }
  }, [articles]);

  useEffect(() => {
    // if (carouselStatus) console.log(carouselStatus);
  }, [carouselStatus]);

  const nextSlide = useCallback(
    async (status, length) => {
      let _current = await getNext(status.current, length);
      let _next = await getNext(status.next, length);
      let _prev = await getNext(status.prev, length);
      setCarouselStatus({ current: _current, next: _next, prev: _prev });
    },
    [carouselStatus]
  );

  const prevSlide = useCallback(async (status, length) => {
    let _current = await getPrevious(status.current, length);
    let _next = await getPrevious(status.next, length);
    let _prev = await getPrevious(status.prev, length);

    setCarouselStatus({ current: _current, next: _next, prev: _prev });
  });

  const toSlide = useCallback(async (slide, length) => {
    let _next = await getNext(slide, length);
    let _prev = await getNext(slide, length);

    setCarouselStatus({ current: slide, next: _next, prev: _prev });
  });

  const getNext = (value, length) => {
    return new Promise((resolve, reject) => {
      if (value < length) resolve(value + 1);
      else resolve(0);
    });
  };

  const getPrevious = (value, length) => {
    return new Promise((resolve, reject) => {
      if (value - 1 == -1) resolve(length);
      else resolve(value - 1);
    });
  };

  return (
    <>
      <h1 className="text-center lg:w-full md:w-full reno:w-full sm:w-screen xs:w-sceen xxs:w-screen lg:text-6xl md:text-6xl reno:text-6xl sm:text-4xl xs:text-4xl xxs:text-4xl font-semibold text-heading lg:mt-32 md:mt-32 reno:mt-32 sm:mt-16 xs:mt-16 xxs:mt-16 mb-16">
        {/* // className="text-center md:w-full xs:w-height text-6xl font-semibold text-heading mt-20 mb-10">
          Articles */}
        Articles
      </h1>
      <div className="lg:mb-32 reno:mb-0 md:mb-0 sm:mb-0 xs:mb-0 xxs:mb-0 relative lg:w-full md:w-full reno:w-full sm:w-screen xs:w-sceen xxs:w-screen lg:px-64 reno:px-24 md:px-2">
        {articles && articles.length > 0 && (
          <ArticleCarouselContent
            slide={
              articles && carouselStatus && articles[carouselStatus.current]
            }
          />
        )}

        <CarouseControl
          status={carouselStatus && carouselStatus}
          length={articles && articles.length}
          next={nextSlide}
          prev={prevSlide}
        />
      </div>
      <div className="w-full mt-6 mb-16 reno:flex md:flex sm:flex xs:flex xxs:flex justify-center items-center space-x-6 lg:hidden">
        <div onClick={e => {nextSlide(carouselStatus, articles.length-1)}} className="p-2 bg-gray-100 rounded-full text-heading cursor-pointer">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div onClick={e => {prevSlide(carouselStatus, articles.length-1)}} className="p-2 bg-gray-100 rounded-full text-heading cursor-pointer">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
