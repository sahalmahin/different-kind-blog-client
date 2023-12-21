import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Blogs></Blogs>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;