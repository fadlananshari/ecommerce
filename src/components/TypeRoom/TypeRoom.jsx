import TypeRoomList from './TypeRoomList';

function TypeRoom() {
  return (
    <>
      <div className="pt-5">
        <div className="container">
          <div className="mb-4">
            <h3 className="fw-bolder text-center">Browse The Range</h3>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="row row-cols-lg-3 d-flex justify-content-center">
            {TypeRoomList.map((item, index) => {
              return (
                <div className="col text-center" key={index}>
                  <img src={item.img} alt="" height={item.height} className='rounded --400px-width'/>
                  <p className={item.cName}>{item.nameRoom}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default TypeRoom;