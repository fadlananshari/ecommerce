function Hero() {
  return (
    <div class="hero py-5 mt-5">
      <div class="container d-flex justify-content-end">
        <div className="bg-secondary px-3 py-4 rounded col-lg-7 col-xl-6 my-5">
          <div className='mb-2'>
            <p className='text-start letter-spacing-3px fw-bold m-0'>New Arrival</p>
            <h1 class="display-5 text-primary fw-bolder text-start col-xl-9">
              Discover Our New Collection
            </h1>
            <p class="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </div>
          <a href="#" className='btn btn-primary rounded-0 py-3 px-4'>BUY NOW</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
