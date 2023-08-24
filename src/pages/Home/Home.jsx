import React, { useState } from "react";
import { Card, NavBar, Footer, Loading, Image } from "../../components";
import PlaceHolder from "../../assets/PlaceHolder.png";
import { BiLeaf } from "react-icons/bi";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="h-screen">
      {isLoading && <Loading />}
      <NavBar />
      <div className="mx-1  mt-8 md:mx-6">
        {/* <Card> */}
        <div className=" md:flex-row gap-4">
          <div>
            <h1 className="font-bold text-3xl text-center ">
              BUY DIRECTLY FROM FARMERS ON{" "}
              <span className="text-green">AGRIMART</span>
            </h1>
          </div>
          <Image src={PlaceHolder} alt="HomeImage" />
        </div>
        {/* </Card> */}
      </div>
      <div className="text-center pt-6">
        <h1 className="font-bold text-3xl ">Our Services</h1>
        <div className="flex flex-col md:flex-row justify-center items-center pt-6">
          <Card
            title={<BiLeaf className=" text-white bg-green rounded-full text-9xl p-3" />}
          >
            We provide our clients with all the range of services. We will fix
            any malfunction in record terms so you will have no worries! We
          </Card>
          <Card title={<BiLeaf className=" text-white bg-green rounded-full text-9xl p-3" />}>
            We provide our clients with all the range of services. We will fix
            any malfunction in record terms so you will have no worries! We
          </Card>
          <Card title={<BiLeaf className=" text-white bg-green rounded-full text-9xl p-3" />}>
            We provide our clients with all the range of services. We will fix
            any malfunction in record terms so you will have no worries! We
          </Card>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default Home;
