import React from 'react';
import { useState } from 'react';
import { BsShareFill } from 'react-icons/bs';
import { RiArrowLeftRightLine } from 'react-icons/ri';
import { AiOutlineLike } from 'react-icons/ai';

function Product({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  const imgCard = {
    backgroundImage: `url(${data.img})`,
    backgroundsize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: window.innerWidth > '600px' ? '300px' : '240px',
    width: '',
    display: 'flex',
    position: 'relative',
    zIndex: 0,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hover = {
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.5s ease',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9,
  };

  return (
    <div className="card rounded-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div style={imgCard}>
        {data.discount !== null ? (
          <div className="ms-auto bg-danger py-2 px-2px rounded-circle height-max-content m-2">
            <small className="text-white m-0">{data.discount[1]}</small>
          </div>
        ) : null}
        {data.new == true ? (
          <div className="ms-auto bg-success py-2 px-1 rounded-circle height-max-content m-2">
            <small className="text-white m-0"> New </small>
          </div>
        ) : null}
      </div>
      <div className="card-body">
        <p className="card-title fw-bold m-0">{data.title}</p>
        <small className="card-text text-secondary">{data.productType}</small>
        <div className="d-md-flex justify-content-between">
          <p className="fw-bold m-0">Rp. {data.price}</p>
          {data.discount !== null ? <small className="text-secondary strikethrough">Rp. {data.discount[0]}</small> : null}
        </div>
      </div>
      <div style={hover} className="text-center">
        <div className="mx-5 mx-sm-4 my-auto height-max-content top-40percent">
          <a href="" className="btn text-primary bg-white fw-bold py-2 px-4 px-lg-5 mb-3 mt-1">
            Add to cart
          </a>
          <div className="d-flex justify-content-between">
            <a href='' className="text-white fs-small text-decoration-none">
              <BsShareFill size={13} /> Share
            </a>
            <a href='' className="text-white fs-small text-decoration-none">
              <RiArrowLeftRightLine size={15} /> Compare
            </a>
            <a href='' className="text-white fs-small text-decoration-none">
              <AiOutlineLike size={15} /> Like
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
