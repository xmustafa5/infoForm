
import  { useEffect, forwardRef } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const Checkbox = forwardRef(({ title }, ref) => {


  return (
    <div className="w-52 h-24 ">
      <div className="items-center mt-12 w-52 text-xl font-medium h-10  bg-white   rounded-lg sm:flex   ">
      <label
              htmlFor="check-box-2"
              className="w-full py-3 ms-2 text-xl text-blue-600 font-medium flex justify-end    "
            >
              {title}
            
        <div className=" border-gray-200 cursor-pointer relative  ">
          <div className="flex items-center ps-3">
            <input
              id="check-box-2"
              type="checkbox"
              value="sss"
              className='appearance-none h-8 w-8 border-2 rounded-md border-blue-700'
              ref={ref}
            />
            <FontAwesomeIcon icon={faCheck} 
            className='text-4xl h-8 w-8 text-blue-600 absolute left-3 top-0 text-opacity-100 check-2 transition '
            />
          </div>
        </div></label>
      </div>
    </div>
  );
});

export default Checkbox;
