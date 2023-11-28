import React, { useEffect } from 'react';

export default React.forwardRef(({ title, pr, w,req }, ref) => {

  return (
    <div className={`w-${w} h-24`} >
      <div>
        <h1 className="text-xl text-blue-600 font-medium  pb-4 flex justify-center">
          {title} <div className="flex justify-center items-center ml-2 relative		 ">
                         <span className="text-red-600 flex justify-center items-center 	absolute  top-[5px] left-[1px]  " >{req}</span>

            </div>
        </h1>
      </div>
      <div className="">
        <div className="relative text-start ">
          <input
            type="text"
            id="Check-box-1"
            className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:border-blue-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={`${pr}`}
            ref={ref}
          />
        </div>
      </div>
    </div>
  );
});
