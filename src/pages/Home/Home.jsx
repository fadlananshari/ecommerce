import Hero from '../../components/Hero/Hero';
import TypeRoom from '../../components/TypeRoom/TypeRoom';
import OurProduct from '../../components/Products/OurProduct';
import Galery from './Galery';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <TypeRoom />
      <OurProduct />
      <Galery />
      <Footer/>
    </>
  );
};

export default Home;
