const TestimonialContent = (props) => {
  const { current, testimonials } = props;
  return (
    <>
      {testimonials &&
        testimonials.map((testimonial) => {
          return (
            <div key={testimonial.id} className={`${testimonial.id == current ? 'block animate__animated animate__fadeIn' :'hidden'} h-auto w-full mx-4 my-12 sm:px-8 xs:p-2 xxs:p-2 space-y-2 rounded-xl`}>
              <div className="w-full flex space-x-3 xs:flex-col xxs:flex-col">
                <img
                  className="w-16 h-16 rounded-full xs:m-auto xxs:m-auto"
                  src={testimonial.image}
                />
                <div className="w-full h-16">
                  <h6 className="lg:text-xl xs:text-sm xxs:text-sm font-bold text-blue-500">
                    {testimonial.name}
                  </h6>
                  <p className="text-blue-300 text-sm xs:text-xs xxs:text-xs">
                    {testimonial.description}
                  </p>
                </div>
              </div>
              <p className="leading-loose text-gray-400 lg:text-lg md:text-sm xs:text-sm xxs:text-sm">
                {`"${testimonial.message}"`}
              </p>
              {
                testimonial.source && <p className="text-blue-400">
                via {testimonial.source}
              </p>
              }
            </div>
          );
        })}
      {/* {testimonial && <div className="bg-white h-72 w-full mx-4 px-8 py-4 space-y-4 rounded-xl  animate__animated animate__fadeIn">
      <div className="w-full flex space-x-3">
        <img className="w-16 h-16 rounded-full" src={testimonial.image} />
        <div className="w-full h-16">
          <h6 className="text-xl font-bold text-blue-500">{testimonial.name}</h6>
          <p className="text-blue-300 text-sm">{testimonial.description}</p>
        </div>
      </div>
      <p className="leading-loose text-gray-400 lg:text-lg md:text-sm">
        {`"${testimonial.message}"`}
      </p>
    </div>} */}
    </>
  );
};
export default TestimonialContent;
