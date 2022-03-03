import { useState, useEffect } from "react";
// import fetch from "isomorphic-unfetch";
// import data from "../pages/api/contents/carousel.json";

export const useArticlesHook = () => {
  const [slides, setSlides] = useState(null);
  useEffect(() => {
    setSlides([
      [
        {
          id: 0,
          image: "/images/articles/sk-mobile-app-open-beta/header-img.svg",
          header: "SK App Open Beta",
          link: "/articles/sk-mobile-app-open-beta",
        },
        {
          id: 1,
          image: "/images/articles/new-look-same-goal/header-img.svg",
          header: "New look, Same Goal",
          link: "/articles/new-look-same-goals",
        },
        {
          id: 2,
          image: "/images/articles/learning-in-the-digital-age/header-img.svg",
          header: "Learning in the Digital Age",
          link: "/articles/learning-in-the-digital-age",
        },
      ],
      [
        {
          id: 3,
          image: "/images/articles/stock-knowledge-at-itu/header-img.svg",
          header: "Stock Knowledge at ITU",
          link: "/articles/stock-knowledge-at-itu",
        },
        {
          id: 4,
          image: "/images/articles/stock-knowledge-at-rise/header-img.svg",
          header: "Stock Knowledge at RISE",
          link: "/articles/stock-knowledge-at-rise",
        },
        {
          id: 5,
          image: "/images/articles/digital-learning-2.0/header-img.svg",
          header: "Digital Learning 2.0",
          link: "/articles/digital-learning-2.0",
        },
      ],
      [
        {
          id: 6,
          image: "/images/articles/digital-learning-1.0/header-img.svg",
          header: "Digital Learning 1.0",
          link: "/articles/digital-learning-1.0",
        },
      ],
    ]);
  }, []);

  return slides;
};
