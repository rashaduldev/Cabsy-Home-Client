import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            This is home
        </div>
    );
};

export default Home;