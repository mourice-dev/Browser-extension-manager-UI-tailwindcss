/** @format */

import { useState } from "react";
import devlens from "../assets/images/logo-devlens.svg";
import console from "../assets/images/logo-console-plus.svg";
import dom from "../assets/images/logo-dom-snapshot.svg";
import grid from "../assets/images/logo-grid-guides.svg";
import json from "../assets/images/logo-json-wizard.svg";
import link from "../assets/images/logo-link-checker.svg";
import markup from "../assets/images/logo-markup-notes.svg";
import palette from "../assets/images/logo-palette-picker.svg";
import speed from "../assets/images/logo-speed-boost.svg";
import tab from "../assets/images/logo-tab-master-pro.svg";
import style from "../assets/images/logo-style-spy.svg";
import view from "../assets/images/logo-viewport-buddy.svg";

function List() {
  const [isActive, setIsActive] = useState([
    { image: devlens, status: true },
    { image: console, status: false },
    { image: dom, status: true },
    { image: grid, status: true },
    { image: json, status: false },
    { image: link, status: false },
    { image: markup, status: true },
    { image: palette, status: true },
    { image: speed, status: false },
    { image: tab, status: false },
    { image: style, status: false },
    { image: view, status: false },
  ]);

  const [custome, setCustome] = useState<null | false | true>(null);

  const items = isActive
    .filter((item) => {
      if (custome === null) {
        return true;
      }
      return item.status === custome;
    })
    .map((item, index) => {
      return (
        <>
          <div className='bg-Neutral-800 rounded-2xl border-1 border-Neutral-600 mt-3 md:mt-0'>
            <div className='p-4'>
              <div className='flex gap-4'>
                <div>
                  <img src={item.image} alt='' className='h-10' />
                </div>
                <div>
                  <p className='font-bold text-white'>DevLens</p>
                  <p className='text-sm text-gray-400'>
                    Quickly inspect page layouts and visualize element
                    boundaries.
                  </p>
                </div>
              </div>
              <div className='flex justify-between items-center mt-8'>
                <div
                  className=' flex justify-center items-center cursor-pointer'
                  onClick={() =>
                    setIsActive(
                      isActive.filter((_, itemIndex) => itemIndex != index),
                    )
                  }>
                  <div className='flex justify-center items-center rounded-3xl border-1 border-Neutral-600 text-white px-3 py-1 cursor-pointer hover:bg-Neutral-700 transition duration-500 '>
                    <p className='text-sm'>Remove</p>
                  </div>
                </div>
                <div
                  className={`flex  items-center ${item.status ? "bg-Red justify-end" : "bg-Neutral-600 justify-start"}  w-8 h-4 rounded-xl cursor-pointer`}
                  onClick={() =>
                    setIsActive((prev) =>
                      prev.map((item, itemIndex) =>
                        itemIndex === index ?
                          { ...item, status: !item.status }
                        : item,
                      ),
                    )
                  }>
                  <div
                    className={`bg-white rounded-full w-4 h-4 cursor-pointer`}></div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });

  return (
    <div className='mt-10 md:mt-15'>
      <div className='md:flex justify-between items-center text-white'>
        <div className='flex justify-center items-center text-center'>
          <p className='text-2xl font-bold'>Extensions List</p>
        </div>
        <div className='flex justify-center md:justify-between gap-3 items-center mt-2 md:mt-0'>
          <div
            className='flex justify-center items-center  border-1 hover:border-Red text-center bg-Red px-3 py-1 rounded-2xl text-Neutral-800 border-1 cursor-pointer'
            onClick={() => setCustome(null)}>
            <p>All</p>
          </div>
          <div
            className='flex justify-center items-center  border-1 hover:border-Red text-center bg-Neutral-700 px-3 py-1 text-white text-sm rounded-2xl border-1 border-Neutral-600 cursor-pointer'
            onClick={() => setCustome(true)}>
            <p>Active</p>
          </div>
          <div
            className='flex justify-center items-center  border-1 hover:border-Red text-center bg-Neutral-700 px-3 py-1 text-white text-sm rounded-2xl border-1 border-Neutral-600 cursor-pointer'
            onClick={() => setCustome(false)}>
            <p>Inactive</p>
          </div>
        </div>
      </div>
      <div className=' flex-col md:grid md:grid-cols-3 md:gap-3 mt-5'>
        {items}
      </div>
    </div>
  );
}

export default List;
