import { Helmet } from "react-helmet";
import Slider from "../Components/Slider";


const Home = () => {
    return (
        <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Cabsy-Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            This is home
            <Slider></Slider>
        </div>
    );
};

export default Home;