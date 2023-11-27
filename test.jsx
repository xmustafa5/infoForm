import Image from 'next/image'
import Button from './../components/button';
import NavImage from './../components/navImage';
import Form from './../components/form';
import { useState } from 'react';


export default function Home() {
   const [isActive,setIsActive]=useState(false) 
   const showSideBar = ()=>{
      setIsActive((prevIsActive) => !prevIsActive);

   }
  return (
    <>
    
    
<div className='flex'>


<aside id="default-sidebar" className={`  z-40  h-screen transition-transform ease-in-out -translate-x-${isActive? '2 w-64':'full w-0'} `} aria-label="Sidebar">
<button onClick={showSideBar} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex absolute left-[236px] items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <Button>main Dashbord</Button>
         <Button>Doctors</Button>
         <Button>patient</Button>
         <Button>pharmacy</Button>
         <Button>rodiology</Button>
         <Button>lab</Button>
         <Button>Human hr</Button>
         <Button>Department</Button>
       
          
      </ul>
   </div>
</aside>

<div className=" w-full ">
  <NavImage/>
  <Form/>
</div>
</div>
    </>
  )
}

export default function NavImage(){
    return (
        <>
            <div className="bg-gray-600 w-full h-[110px] ">
                <div className="bg-blue-600 h-[150px] w-[150px]  left-[300px] top-[30px] rounded-lg">
                </div>
                <div className="absolute right-5 top-14 ">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">close</button>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">save</button>
             </div>
              </div>
        </>
    )
} 
