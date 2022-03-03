
import { useEffect, useCallback, useState } from "react";
import { useCarouselHook } from "../../hooks/carouselHook";

import CarouselContent from "./CarouselContent";
import CarouseControl from "./CarouselControl";
import CarouselIndicator from "./CarouselIndicator";

export default function CarouselLayout(props) {
  const slides = useCarouselHook();
  const [carouselStatus, setCarouselStatus] = useState(null);

  useEffect(() => {
    if (slides) {
      setCarouselStatus({ current: 0, next: 1, prev: slides.length - 1 });
    }
  }, [slides]);

  useEffect(() => {
    let timeOut = null;
    if(carouselStatus)
      timeOut = setTimeout(() => {play(carouselStatus, slides.length-1)}, 3000);

      return () => {
        clearTimeout(timeOut);
      }
  }, [carouselStatus]);

  const play = async (status, length) => {
    let _current = await getNext(status.current, length);
    let _next = await getNext(status.next, length);
    let _prev = await getNext(status.prev, length);
    setCarouselStatus({ current: _current, next: _next, prev: _prev });
  }

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
    <div className="lg:mt-32 reno:mt-32 md:mt-32 sm:mt-16 xs:mt-16 xxs:mt-16 relative w-full lg:px-64 md:px-20">
      {slides && slides.length > 0 && (
        <CarouselContent
          current={carouselStatus && carouselStatus.current}
          slides={slides}
          slide={slides && carouselStatus && slides[carouselStatus.current]}
        />
      )}
      {/* <CarouseControl
        status={carouselStatus && carouselStatus}
        length={slides && slides.length}
        next={nextSlide}
        prev={prevSlide}
      /> */}
      <CarouselIndicator
        slides={slides}
        status={carouselStatus}
        goTo={toSlide}
      />
    </div>
  );
}
