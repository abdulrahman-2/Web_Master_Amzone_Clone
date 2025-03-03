import HeroSlider from "../components/HeroSlider";
import ProductCategories from "../components/ProductCategories";

const Home = () => {
  return (
    <div className="bg-black/60">
      <HeroSlider />
      <div className="relative z-40 -top-[150px] md:-top-[350px]">
        <ProductCategories />
      </div>
    </div>
  );
};

export default Home;
