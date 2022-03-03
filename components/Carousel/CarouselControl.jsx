const CarouselControl = (props) => {
  const { status, length, next, prev } = props;
  return (
    <>
      <a
        className="absolute top-0 bottom-0 left-0 justify-center items-center flex xs:hidden"
        onClick={async () => prev(status, length - 1)}
      >
        <span className="w-10 h-10 ml-2 md:ml-10 cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center">
          ‹
        </span>
      </a>
      <a
        className="absolute top-0 bottom-0 right-0 justify-center items-center flex"
        onClick={() => next(status, length - 1)}
      >
        <span className="w-10 h-10 mr-2 md:mr-10 cursor-pointer text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center">
          ›
        </span>
      </a>
    </>
  );
};
export default CarouselControl;
