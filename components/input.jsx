import React, { useEffect } from 'react';

export default React.forwardRef(({ title, pr, w }, ref) => {

  return (
    <div className={`w-${w} h-24`} >
      <div>
        <h1 className="text-2xl text-blue-400 pb-4 flex justify-center">
          {title}
        </h1>
      </div>
      <div className="">
        <div className="relative">
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={`${pr}`}
            ref={ref}
          />
        </div>
      </div>
    </div>
  );
});
