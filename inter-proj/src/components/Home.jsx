import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import StoryBoard from "./StoryBoard";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* slider */}
      <div className="flex ">
      <div><Sidebar /></div>
       
       <StoryBoard/>
       
       </div>
     
    </div>
  );
};

export default Home;
