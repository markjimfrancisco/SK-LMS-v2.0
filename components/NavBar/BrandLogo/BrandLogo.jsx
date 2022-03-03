const BrandLogo = () => {
  return (
    <div className="z-20 fixed flex items-center h-20 w-96 py-4 px-8 text-xl space-x-2">
      <img className="w-12" src="/images/logo.png" />
      <h1 className="text-heading">
        Stock &nbsp;
        <span className="font-bold text-skBlue">Knowledge</span>
      </h1>
    </div>
  );
};

export default BrandLogo;
