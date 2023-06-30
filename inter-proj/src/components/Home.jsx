import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import StoryBoard from "./StoryBoard";
import NoticeBoard from "./NoticeBoard";
import question from "../assets/question-mark.png";
import meeting from "../assets/meeting.png";
import schedule from "../assets/schedule.png";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* slider */}
      <div className="flex">
        <Sidebar />
        <StoryBoard />
        <NoticeBoard />

        <div className="flex flex-col -translate-x-7 translate-y-96 my-72 ">
          <img src={question} alt="" className="bg-darkblue p-2 rounded-lg cursor-pointer" />
          <br />
          <img src={meeting} alt="" className="bg-darkblue p-2 rounded-lg cursor-pointer " />
          <br />
          <img src={schedule} alt="" className="bg-darkblue p-2 rounded-lg cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Home;
