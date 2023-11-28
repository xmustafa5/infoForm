import Inputs from "./input";
import Checkbox from "./checkbox";
import { useRef ,useState } from "react";
import Select from "./selected";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
export default function Form() {
  const refs = [
    { title: "File No.", ref: useRef(null) },
    { title: "Gender", ref: useRef('') },
    { title: "Full Name", ref: useRef(null) },
    { title: "Mother Name", ref: useRef(null) },
    { title: "Province No", ref: useRef(null) },
    { title: "Clivilized", ref: useRef(null) },
    { title: "Countryside", ref: useRef(null) },
    { title: "Age", ref: useRef(null) },
    { title: "Address", ref: useRef(null) },
    { title: "Phone No.", ref: useRef(null) },
    { title: "Sicial Status", ref: useRef(null) },
    { title: "Birth Date", ref: useRef(null) },
    { title: "Email", ref: useRef(null) },
    { title: "Ammarent impairments", ref: useRef(null) },
    { title: "Ammarent impairments", ref: useRef(null) },
    { title: "Ammarent impairments", ref: useRef(null) },
    { title: "Birth Address", ref: useRef(null) },
    { title: "Relative Phone No", ref: useRef(null) },
    { title: "Job", ref: useRef(null) },
    { title: "Job type", ref: useRef(null) },
    { title: "Review Status", ref: useRef(null) },
    { title: "Admission Date", ref: useRef(null) },
    { title: "Refered form", ref: useRef(null) },
    { title: "Unit", ref: useRef(null) },
    { title: "Religion", ref: useRef(null) },
    { title: "Bed No.", ref: useRef(null) },
    { title: "Floor No.", ref: useRef(null) },
    { title: "Date", ref: useRef(null) },
    { title: "Transformations", ref: useRef(null) },
    { title: "Ploice Status", ref: useRef(null) },
    { title: "Exit Date", ref: useRef(null) },
    { title: "Exit Status", ref: useRef(null) },
    { title: "Death Date", ref: useRef(null) },
    { title: "Specialist Doctor Signature", ref: useRef(null) },
    { title: "Permanent Doctor Signature", ref: useRef(null) },
  ];
  const InfoInput = [
    { title: "File No.", w: "[300px]", pr: " " },
    { title: "Gender", w: "[300px]", pr: " ", req: "*" },
    { title: "Full Name", w: "[300px]", pr: " ", req: "*" },
    { title: "Mother Name", w: "[300px]", pr: " ", req: "*" },
    { title: "Province No", w: "[300px]", pr: " " },
    { title: "Clivilized", w: "[300px]", pr: " " },
    { title: "countryside", w: "[300px]", pr: " " },
    { title: "Age", w: "[300px]", pr: " ", req: "*" },
    { title: "Address", w: "[300px]", pr: " ", req: "*" },
    { title: "Phone No.", w: "[300px]", pr: " ", req: "*" },
    { title: "Sicial Status", w: "[300px]", pr: " ", req: "*" },
    { title: "Birth Date", w: "[300px]", pr: " ", req: "*" },
    { title: "Email", w: "[300px]", pr: " " },
    { title: "Ammarent impairments", w: "[300px]", pr: " " },
    { title: "Ammarent impairments", w: "[300px]", pr: " " },
    { title: "Birth Address", w: "[300px]", pr: " ", req: "*" },
    { title: "Relative Phone No", w: "[300px]", pr: " " },
    { title: "Job", w: "[300px]", pr: " " },
    { title: "Job type", w: "[300px]", pr: " " },
    { title: "Review Status", w: "[300px]", pr: " ", req: "*" },
    { title: "Admission Date", w: "[300px]", pr: " ", req: "*" },
    { title: "Refered form", w: "[300px]", pr: " " },
    { title: "Unit", w: "[300px]", pr: " " },
    { title: "Religion", w: "[300px]", pr: " " },
    { title: "Bed No..", w: "[300px]", pr: " ", req: "*" },
    { title: "Floor No.", w: "[300px]", pr: " ", req: "*" },
    { title: "Date", w: "[300px]", pr: " " },
    { title: "Transformations", pr: " ", w: "full" },
    { title: "Ploice Status ", w: "[300px]", pr: " " },
    { title: "Exit Date", w: "[300px]", pr: " " },
    { title: "Exit Status", w: "[300px]", pr: " " },
    { title: "Death Date", w: "[300px]", pr: " " },
    { title: "Permanent Doctor Signature", w: "[300px]", pr: " " },
    { title: "Specialist Doctor Signature", w: "[300px]", pr: " " },
    { title: "Statical No.", w: "[300px]", pr: " " },
  ];
    const selected = [
      {stitle: "Gender", Sreq: "*"},
      {stitle: "Social Status", Sreq: "*"},
      {stitle: "Job Type", Sreq: "*"},
      {stitle: "Review Status", Sreq: "*"},
      {stitle: "Religion", Sreq: ""},
      {stitle: "Exit Status", Sreq: ""},
      {stitle: "Certification", Sreq: ""},
    ]
  const handleSubmit = (event) => {
    event.preventDefault();

    // Access the values using the refs
    // const file = refs[0].ref.current.value;
    // const gender = refs[1].ref.current.value;
    // const FullName = refs[2].ref.current.value;
    // const Mother = refs[3].ref.current.value;
    // const Province = refs[4].ref.current.value;
    // const Clivilized = refs[5].ref.current.checked;
    // const Countryside = refs[6].ref.current.checked;

    // refs.forEach((item) => {
    //   if (item.ref.current) {
    //     if (item.ref.current.type === "checkbox") {
    //       console.log(`${item.title}: `, item.ref.current.checked);
    //     } else {
    //       console.log(`${item.title}: `, item.ref.current.value);
    //     }
    //   }
    // });

     console.log({ Option });
  };
  const [isOption, setIsOption] = useState(false);
  const [Option, setOption] = useState('Choose');

  const handleClick = () => {
    setIsOption(prevState => !prevState);
    
  };
  return (
    <>
      <div onSubmit={handleSubmit} className="ml-[260px]">
      <div>
      <div
        className={`animated-box ${isOption ? 'rotate-animation' : 'dssf'}`}
        onClick={handleClick}
      >
        Click me
      </div>
    </div>
        <form className="items-center mt-[90px] ml-[10px] ">
          <div className="flex justify-center w-full gap-2">
            <Inputs ref={refs[0].ref} {...InfoInput[0]} />
            {/* <Inputs ref={refs[1].ref} {...InfoInput[1]} /> */}
           {/* <Select {...selected[0]}>
           <option value="CA">Male</option>
           <option value="FR">Famale</option>
           </Select> */}
           <div className={`w-[300px]   h-24`} >
            <div>
                <h1 className="text-xl text-blue-600 font-medium  pb-4 flex justify-center">
                dedeed 
                <div className="flex justify-center items-center ml-2 relative		 ">
                <span className="text-red-600 flex justify-center items-center 	absolute  top-[5px] left-[1px]  " >*</span>
                </div>
                </h1>
            </div>
            <div className="">
               <div className="relative text-start ">
                  <div  onClick={handleClick} class={`bg-gray-50 border   border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:border-blue-800 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
                       {Option}
                  </div>
                  <div className='h-full  mt-2 w-30 border-2 rounded-md border-blue-700'>
                       <div className='w-full'>                              
                       <div onClick={() => setOption('Male')}  className='w-full hover:bg-gray-900 hover:text-white text-gray-600 text-center border-b border-black text-[18px]'>Male</div>
                        </div>    
         
                        <div className='w-full'>                              
                        <div onClick={()=>setOption('Female')}  className='w-full hover:bg-gray-900 hover:text-white  text-gray-600 text-center border-b border-black text-[18px] '>Female</div>
                        </div> 
                 
        </div>
        </div>
        
      </div>
      
      </div>
     
     






            <Inputs ref={refs[2].ref} {...InfoInput[2]} />
            <Inputs ref={refs[3].ref} {...InfoInput[3]} />
          </div>
          <div className="flex justify-center gap-2 mt-4 pr-4">
            <Inputs ref={refs[4].ref} {...InfoInput[4]} />
            <div className="w-40 h-24 flex justify-start ">
      <div className="items-center mt-12 w-52 text-xl font-medium h-10  bg-white   rounded-lg sm:flex   ">
      <label
              htmlFor="check-box-1"
              className="w-full py-3 ms-2 text-xl text-blue-600 font-medium flex justify-end    "
            >
              Floor No.
            
        <div className=" border-gray-200 cursor-pointer relative  ">
          <div className="flex items-center ps-3">
            <input
              id="check-box-1"
              type="radio"
              value="sss"
              name="checkboxGroup"
              className='appearance-none h-8 w-8 border-2 rounded-md border-blue-700'
              
            />
            <FontAwesomeIcon icon={faCheck} 
            className='text-4xl h-6 w-6 text-blue-600 absolute left-4 top-[4px]  check check-1 transition '
            />
          </div>
        </div></label>
      </div>
    </div>
    <div className="w-40 h-24 flex justify-start ">
      <div className="items-center mt-12 w-52 text-xl font-medium h-10  bg-white   rounded-lg sm:flex   ">
      <label
              htmlFor="check-box-2"
              className="w-full py-3 ms-2 text-xl text-blue-600 font-medium flex justify-end    "
            >
              countryside
            
        <div className=" border-gray-200 cursor-pointer relative  ">
          <div className="flex items-center ps-3">
            <input
              id="check-box-2"
              type="radio"
              value="sss"
              name="checkboxGroup"
              className='appearance-none h-8 w-8 border-2 rounded-md border-blue-700'
           
            />
            <FontAwesomeIcon icon={faCheck} 
            className='text-4xl h-6 w-6 text-blue-600 absolute left-4 top-[4px]  check check-2 transition '
            />
          </div>
        </div></label>
      </div>
    </div>            <Inputs ref={refs[7].ref} {...InfoInput[7]} />
            <Inputs ref={refs[8].ref} {...InfoInput[8]} />
          </div>
          <div className="flex justify-center w-full gap-2">
            <Inputs ref={refs[9].ref} {...InfoInput[9]} />
            {/* <Inputs ref={refs[10].ref} {...InfoInput[10]} /> */}
            <Select {...selected[1]}>
           <option value="CA">Male</option>
           <option value="FR">Famale</option>
           </Select>
            <Inputs ref={refs[11].ref} {...InfoInput[11]} />
            <Inputs ref={refs[12].ref} {...InfoInput[12]} />
          </div>
          <div className="flex justify-center w-full gap-2">
          <div className={`w-[300px] h-24`} >
      <div>
        <h1 className="text-xl text-blue-600 font-medium  pb-4 flex justify-center">
        Ammarent impairments
           <div className="flex justify-center items-center ml-2 relative		 ">
                         <span className="text-red-600 flex justify-center items-center 	absolute  top-[5px] left-[1px]  " ></span>

            </div>
        </h1>
      </div>
      <div className="">
        <div className="relative text-start flex gap-4 ">
        <input
            type="text"
            id="simple-search"
            className="bg-gray-50 w-[50px] border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:border-blue-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         
          />
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:border-blue-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         
          />
        </div>
      </div>
    </div>            <Inputs ref={refs[15].ref} {...InfoInput[15]} />
            <Inputs ref={refs[16].ref} {...InfoInput[16]} />
            <Inputs ref={refs[17].ref} {...InfoInput[17]} />
          </div>
          <div className="flex justify-center w-full gap-2">
          <Select {...selected[2]}>
           <option value="CA">Male</option>
           <option value="FR">Famale</option>
           </Select> 
           <Select {...selected[3]}>
           <option value="CA">Male</option>
           <option value="FR">Famale</option>
           </Select>
            <Inputs ref={refs[20].ref} {...InfoInput[20]} />
            <Inputs ref={refs[21].ref} {...InfoInput[21]} />
          </div>
          <div className="flex justify-center gap-2 mt-4 pr-4">
            <Inputs ref={refs[22].ref} {...InfoInput[22]} />
            <Select {...selected[4]}>
           <option value="CA">Male</option>
           <option value="FR">Famale</option>
           </Select>     
           <div className="w-40 h-24 flex justify-start ">
      <div className="items-center mt-12 w-52 text-xl font-medium h-10  bg-white   rounded-lg sm:flex   ">
      <label
              htmlFor="check-box-3"
              className="w-full py-3 ms-2 text-xl text-blue-600 font-medium flex justify-end    "
            >
              Bed No.
            
        <div className=" border-gray-200 cursor-pointer relative  ">
          <div className="flex items-center ps-3">
            <input
              id="check-box-3"
              type="radio"
              value="sss"
              name="checkboxGroup1"
              className='appearance-none h-8 w-8 border-2 rounded-md border-blue-700'
           
            />
            <FontAwesomeIcon icon={faCheck} 
            className='text-4xl h-6 w-6 text-blue-600 absolute left-4 top-[4px] check  check-3 transition '
            />
          </div>
        </div></label>
      </div>
      
    </div>
    <div className="w-40 h-24 flex justify-start ">
      <div className="items-center mt-12 w-52 text-xl font-medium h-10  bg-white   rounded-lg sm:flex   ">
      <label
              htmlFor="check-box-4"
              className="w-full py-3 ms-2 text-xl text-blue-600 font-medium flex justify-end    "
            >
              Floor No.
            
        <div className=" border-gray-200 cursor-pointer relative  ">
          <div className="flex items-center ps-3">
            <input
              id="check-box-4"
              type="radio"
              value="sss"
              name="checkboxGroup1"
              className='appearance-none h-8 w-8 border-2 rounded-md border-blue-700'
           
            />
            <FontAwesomeIcon icon={faCheck} 
            className='text-4xl h-6 w-6 text-blue-600 absolute left-4 top-[4px] check  check-4 transition '
            />
          </div>
        </div></label>
      </div>
      </div>
                  <Inputs ref={refs[26].ref} {...InfoInput[26]} />
          </div>
          <div className="flex justify-center gap-12 ">
            <Inputs ref={refs[27].ref} {...InfoInput[27]} />
          </div>
          <div className="flex justify-center w-full gap-2">
            <Inputs ref={refs[28].ref} {...InfoInput[28]} />
            <Inputs ref={refs[29].ref} {...InfoInput[29]} />
            <Select {...selected[5]}>
           <option value="CA">Male</option>
           <option value="FR">Famale</option>
           </Select>            <Inputs ref={refs[31].ref} {...InfoInput[31]} />
            <Inputs ref={refs[32].ref} {...InfoInput[34]} />
          </div>
          <div className="flex justify-center  gap-12 mb-10 ">
            <div className={`w-full h-24`}>
              <div>
                <h1 className="text-xl text-blue-600 font-medium	 pb-4 flex justify-start">
                  First Diagnosis <span className="text-red-600">*</span>
                </h1>
              </div>
              <div className="">
                <div className="relative text-start ">
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full gap-2 pt-8">
            <div className="flex justify-center">
              <div>
              <h1 className="text-xl text-blue-600 font-medium  h-full pb-2  flex justify-center items-center">
                  Anotomy
                </h1>
              </div>
              <div className="">
                <div className="relative text-start ">
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border w-[50px] mx-4   border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:border-blue-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
              <h1 className="text-xl text-blue-600 font-medium  h-full pb-2  flex justify-center items-center">
                  Days of No.
                </h1>
              </div>
              <div className="">
                <div className="relative text-start ">
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border w-[50px] mx-4  border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   ps-10 p-2.5  dark:border-blue-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
                <h1 className="text-xl text-blue-600  font-medium  h-full pb-2  flex justify-center items-center">
                  Days of writting
                </h1>
              </div>
              <div className="">
                <div className="relative text-start mr-3 ">
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border  ml-4 border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:border-blue-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div>
              <h1 className="text-xl text-blue-600 font-medium  h-full pb-2  flex justify-center items-center">
                  Get days off in the first Entery
                </h1>
              </div>
              <div className="">
                <div className="relative text-start ">
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border w-[50px] ml-4 border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  ps-10 p-2.5  dark:border-blue-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full gap-2 pt-8 ">
          <div className="flex justify-center w-full gap-2 pt-8 ">
            
            <Inputs ref={refs[18].ref} {...InfoInput[18]} />
            <Select {...selected[6]}>
           <option value="CA">Male</option>
           <option value="FR">Famale</option>
           </Select>         </div>
         <div className="flex justify-center w-full gap-2 pt-8 mt-8">
         <div className="flex justify-center ">
              <div className=""  >
              <h1 className="text-xl text-blue-600 font-medium  h-full pb-2  flex justify-center items-center">
              Smoker:

                </h1>
              </div>
              <div className="flex justify-center items-center ">
                <div className="relative text-start ">
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border w-[50px] mx-1   border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:border-blue-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className=""  >
              <h1 className="text-xl text-blue-600 font-medium  h-full pb-2  flex justify-center items-center">
                  Diabetic:
                </h1>
              </div>
              <div className="flex justify-center items-center ">
                <div className="relative text-start ">
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border w-[50px] mx-1   border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:border-blue-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className=""  >
              <h1 className="text-xl text-blue-600 font-medium  h-full pb-2  flex justify-center items-center">
                  BF:
                </h1>
              </div>
              <div className="flex justify-center items-center ">
                <div className="relative text-start ">
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border w-[50px] mx-1   border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:border-blue-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            </div>
            </div>

          <div className="w-[300px] flex h-[100px] mb-5">
            <h1 className="text-xl text-blue-600 font-medium	pr-3 pb-4 flex justify-start">
              DD: 
              <div className="flex justify-center items-center ml-2 pr-3 relative		 ">
                         <span className="text-red-600 flex justify-center items-center 	absolute  top-[5px] left-[1px]  " >*</span>

            </div>            </h1>
            <div className="relative w-36 h-36 flex justify-center items-center border-2 border-dashed		rounded-md 		 border-blue-600">
            <div class="w-10 h-10 bg-white rounded-full absolute -right-5 top-1/2 -translate-y-1/2 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 8.787 8.242"><g id="Group_121245" data-name="Group 121245" transform="translate(0.5 0.5)"><line id="Line_235" data-name="Line 235" x2="7.787" transform="translate(0 3.621)" fill="none" stroke="#5156be" stroke-linecap="round" stroke-width="1"></line><line id="Line_236" data-name="Line 236" x2="7.242" transform="translate(3.893 0) rotate(90)" fill="none" stroke="#5156be" stroke-linecap="round" stroke-width="1"></line></g></svg></div>
          <div className='  '>
          <svg xmlns="http://www.w3.org/2000/svg" width="35.755" height="32.068" viewBox="0 0 35.755 32.068"><g id="upload-big-arrow_1_" data-name="upload-big-arrow (1)" transform="translate(0 -23.714)"><g id="Group_121011" data-name="Group 121011" transform="translate(8.119 23.714)"><path id="Path_8568" data-name="Path 8568" d="M105.91,34.953h3.618V45.687a1.971,1.971,0,0,0,1.971,1.971h5.38a1.971,1.971,0,0,0,1.971-1.971V34.953h3.617a1.48,1.48,0,0,0,1.046-2.527l-8.278-8.279a1.483,1.483,0,0,0-2.094,0l-8.277,8.279a1.48,1.48,0,0,0,1.046,2.527Z" transform="translate(-104.431 -23.714)" fill="#5156be"></path></g><g id="Group_121012" data-name="Group 121012" transform="translate(0 38.976)"><path id="Path_8569" data-name="Path 8569" d="M33.977,220.029a1.777,1.777,0,0,0-1.777,1.778v7.433a4.044,4.044,0,0,1-4.04,4.038H7.594a4.043,4.043,0,0,1-4.038-4.038v-7.433a1.778,1.778,0,1,0-3.556,0v7.434a7.6,7.6,0,0,0,7.594,7.594H28.161a7.6,7.6,0,0,0,7.594-7.594v-7.434A1.778,1.778,0,0,0,33.977,220.029Z" transform="translate(0 -220.029)" fill="#5156be"></path></g></g></svg>

            </div>
            <input
      className="w-full h-full cursor-pointer  absolute top-0 left-0 z-10 opacity-0 cursor-pointer"
      id="file_input"
      type="file"
    />
            </div>
            
          </div>
          <div className="flex justify-around	 w-full gap-2 pt-8">
          <Inputs ref={refs[33].ref} {...InfoInput[32]} />
            <Inputs ref={refs[34].ref} {...InfoInput[33]} />
          </div>

          
          <div className="absolute right-5 top-14 ">
                <button type="sumbit"  className="text-white  hover:bg-gray-900 focus:outline-none focus:ring-4 bg-red-600  font-medium  text-xl px-10 py-2.5 me-2 mb-2 ">Cancel</button>
                
                <button type="button" className="text-white bg-blue-400 hover:bg-gray-900 focus:outline-none focus:ring-4  focus:ring-gray-300 font-medium  text-xl px-10 py-2.5 me-2 mb-2 ">save</button>
             
          </div>
        </form>
      </div>
    </>
  );
}
