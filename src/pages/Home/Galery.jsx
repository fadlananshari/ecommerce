import Galery_IMG from '../../assets/galery.png';

function Galery() {
  return (
    <div className="text-center my-5">
      <div className="text-center">
        <p className="text-secondary m-0">Share your setup with</p>
        <h2 className="fw-bolder">#FurniroFurniture</h2>
      </div>
      <img src={Galery_IMG} alt="" className='img-fluid'/>
    </div>
  );
}

export default Galery;
