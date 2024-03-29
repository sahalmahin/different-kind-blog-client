import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import FeaturedOne from "../Featured/FeaturedOne";
import FeaturedTwo from "../Featured/FeaturedTwo";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Blogs></Blogs>
            <NewsLetter></NewsLetter>
            <FeaturedTwo></FeaturedTwo>
            <FeaturedOne></FeaturedOne>
            <Footer></Footer>
        </div>
    );
};

export default Home;