import React, { useState, useEffect } from "react";
import {
  Card,
  NavBar,
  Footer,
  Modal,
  Loading,
  Image,
  ScrollToTop,
} from "../../components";
import PlaceHolder from "../../assets/PlaceHolder.png";
import { BiLeaf } from "react-icons/bi";
import Reviews from "../../components/common/Reviews";
import SideBar from "../../components/SideBar";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [toogle, setToogle] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toogleHandler = (e) => {
    setToogle(!toogle);
    e.stopPropagation();
  };
 
  return (
    <main className="h-screen">
      {isLoading && <Loading />}
      {toogle && <SideBar toogleHandler={toogleHandler} toogle={toogle} />}
      <button onClick={toogleHandler}> show sidebar</button>
      {showModal && <Modal />}
      <NavBar />
      <div className="mx-1 mt-8 md:mx-6">
        {/* <Card> */}
        <div className="md:flex-row">
          <div>
            <h1 className="font-bold text-3xl text-center ">
              BUY DIRECTLY FROM FARMERS ON
              <span className="text-green"> AGRIMART</span>
            </h1>
          </div>
          <Image src={PlaceHolder} alt="HomeImage" />
        </div>
        {/* </Card> */}
      </div>
      <div className="text-center pt-6">
        <h1 className="font-bold text-3xl tracking-widest ">Our Services</h1>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:mx-4 sm:gap-4">
          <Card
            title={
              <BiLeaf className=" text-white bg-green rounded-full text-9xl p-3" />
            }
          >
            We provide our clients with all the range of services. We will fix
            any malfunction in record terms so you will have no worries! We
          </Card>
          <Card
            title={
              <BiLeaf className=" text-white bg-green rounded-full text-9xl p-3" />
            }
          >
            We provide our clients with all the range of services. We will fix
            any malfunction in record terms so you will have no worries! We
          </Card>
          <Card
            title={
              <BiLeaf className=" text-white bg-green rounded-full text-9xl p-3" />
            }
          >
            We provide our clients with all the range of services. We will fix
            any malfunction in record terms so you will have no worries! We
          </Card>
        </div>
      </div>
      <Reviews />
      <ScrollToTop className="relative bottom-0 right-0 z-10" />
      <Footer />
    </main>
  );
};

export default Home;
