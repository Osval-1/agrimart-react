import React, { useState } from "react";
import { Card, NavBar, Footer, Loading, Image } from "../../components";
import PlaceHolder from "../../assets/PlaceHolder.png";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main>
      {isLoading && <Loading />}
      <NavBar />
      <div className="mx-1  mt-8 md:mx-6">
        {/* <Card> */}
          <div className="flex flex-col md:flex-row gap-4" >
            <div>
              <h1 className="font-bold text-3xl">
                BUY DIRECTLY FROM FARMERS ON <span className="text-green">AGRIMART</span>
              </h1>
            </div>
            <Image src={PlaceHolder} alt="HomeImage" />
          </div>
        {/* </Card> */}
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Home;
