const TestimonialControl = (props) => {
  const { status, length, next, prev } = props;
  return (
    <div className="w-full items-center justify-center flex text-blue-600 xxs:hidden">
      <svg onClick={async () => prev(status, length - 1)} className="h-6 w-6 opacity-50 hover:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      <svg onClick={() => next(status, length - 1)} className="h-6 w-6 opacity-50 hover:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};
export default TestimonialControl;
