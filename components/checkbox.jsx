
import  { useEffect, forwardRef } from 'react';

const Checkbox = forwardRef(({ title }, ref) => {


  return (
    <div className="w-52 h-24">
      <div className="items-center mt-12 w-52 text-sm font-medium h-10 text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <div className="border-b border-gray-200 sm:border-b-0 dark:border-gray-600">
          <div className="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value=""
              className="w-10 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              ref={ref}
            />
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {title}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Checkbox;
