import React from 'react';
import { GrAdd } from 'react-icons/gr';

const NoticeBoard = () => {
  return (
    <div className="fixed right-0 top-0 bg-black my-20 rounded-tl-lg rounded-tb-lg h-96 w-20 flex flex-col items-center justify-center transition-all duration-300 ease-in-out">
      <p className="text-rotate text-white text-lg font-semibold tracking-wider">
        <GrAdd />
      </p>
      <br />
      <p className="text-rotate text-white text-md font-semibold tracking-wider">
        N
      </p>
      <p className="text-rotate text-white text-md font-semibold tracking-wider">
        o
      </p>
      <p className="text-rotate text-white text-md font-semibold tracking-wider">
        t
      </p>
      <p className="text-rotate text-white text-md font-semibold tracking-wider">
        i
      </p>
      <p className="text-rotate text-white text-md font-semibold tracking-wider">
        c
      </p>
      <p className="text-rotate text-white text-md font-semibold tracking-wider">
        e
      </p>
      <br/>
      <p className="text-rotate text-white text-md font-semibold tracking-wider">
        b
      </p>
      <p className="text-rotate text-white text-md font-semibold tracking-wider">
        o
      </p>
      <p className="text-rotate text-white text-md font-semibold tracking-wider">
        a
      </p>
      <p className="text-rotate text-white text-md font-semibold tracking-wider">
        r
      </p>
      <p className="text-rotate text-white text-md font-semibold tracking-wider">
        d
      </p>
    </div>
  );
};

export default NoticeBoard;
