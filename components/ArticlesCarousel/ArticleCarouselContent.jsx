const ArticleCarouselContent = (props) => {
  const { slide } = props;

  return (
    <div className="relative overflow-hidden w-full text-center flex lg:items-center justify-around md:space-x-4">
      {slide &&
        slide.map((article) => {
          return (
            <div key={article.id} className="w-80 space-y-4">
              <img src={article.image} />
              <div className="text-left">
                <a href={article.link} className="font-bold">{article.header}</a>
                <a href={article.link} className="flex items-end text-blue-500">
                  <p className="">Read More</p>
                  <svg
                    className="h-5"
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
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default ArticleCarouselContent;
