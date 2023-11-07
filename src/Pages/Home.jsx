import { Helmet } from "react-helmet";
import Slider from "../Components/Slider";
import Services from "../Components/Services";
import HomeBookRide from "../Components/homeBookRide";
import MainBuilding from "../Components/MainBuilding";


const Home = () => {
    return (
        <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Cabsy-Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Slider></Slider>
            <Services></Services>
            <HomeBookRide></HomeBookRide>
            <MainBuilding></MainBuilding>
        </div>
    );
};

export default Home;