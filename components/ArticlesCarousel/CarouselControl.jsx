const CarouselControl = (props) => {
  const { status, length, next, prev } = props;
  return (
    <>

      <div
        onClick={async () => prev(status, length - 1)}
        className="absolute top-0 left-0 w-10 h-10 ml-10 p-2 flex justify-center items-center bg-gray-100 rounded-full text-heading cursor-pointer lg:flex reno:hidden md:hidden sm:hidden xs:hidden xxs:hidden"
      >
        <svg
          className="h-5 w-5 m-auto"
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
      <div
        onClick={() => next(status, length - 1)}
        className="absolute top-0 right-0 w-10 h-10 mr-10 p-2 justify-center items-center bg-gray-100 rounded-full text-heading cursor-pointer lg:flex reno:hidden md:hidden sm:hidden xs:hidden xxs:hidden"
      >
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

    </>
  );
};
export default CarouselControl;
