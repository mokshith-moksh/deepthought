import React from "react";
import Cards from "./Cards";

const StoryBoard = () => {
  const para = [
    {
      id: 1,
      head: "Explore the world of management",
      sen:
        "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling, and completion. How? Do you want to manage each and every step of your life?",
    },
  ];

  const cards = [
    {
      id: 1,
      head: "Technical Project Management",
      des:
        "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
    },
    {
      id: 2,
      head: "Threadbuild",
      des:
        "Watch the video and threadbuild, and jot out key threads while watching the video",
    },
    {
      id: 3,
      head: "Structure your Pointers",
      des:
        "Write a 300 - 400 word article from your thread. Publish your understanding and showcase your understanding to the entire world",
    },
    {
      id: 4,
      head: "4SA Method",
      des: "To Explore more read more",
    },
  ];

  return (
    <div className="flex flex-col ml-64">
      <div className="flex justify-between ">
        <h1 className="text-3xl text-darkblue font-bold mt-6">
          Technical Project Management
        </h1>
        <button className="fixed translate-x-[1500px] z-10 bg-darkblue px-6 py-3 my-2 text-white rounded-lg">
          submit task
        </button>
      </div>

      <div className="my-8 sm:my-10 md:my-12 lg:my-16 xl:my-20">
        {para.map((params) => (
          <div key={params.id} className="bg-headgray p-6 rounded-lg">
            <h1 className="font-bold my-2">{params.head}</h1>
            <p>{params.sen}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 w-11/12 ">
        {cards.map((card) => (
          <Cards key={card.id} head={card.head} des={card.des} img={card.img} />
        ))}
      </div>
    </div>
  );
};

export default StoryBoard;
