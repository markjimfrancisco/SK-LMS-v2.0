const CarouselContent = (props) => {
  const { slide, slides, current } = props;
  return (
    <div className="relative flex overflow-hidden w-full text-center animate__animated animate__fadeIn">
      {slides && slides.map( (e, i) => {
        return <img className={e.id == current ? `block animate__animated animate__fadeIn` : `hidden`} key={e.id} src={e.image} />
      })
      }
    </div>
  );
};
export default CarouselContent;