export default function Select({stitle,Sreq, children}){
    return (
        <>
             <div className={`w-[300px]   h-24`} >
            <div>
        <h1 className="text-xl text-blue-600 font-medium  pb-4 flex justify-center">
          {stitle} <div className="flex justify-center items-center ml-2 relative		 ">
                         <span className="text-red-600 flex justify-center items-center 	absolute  top-[5px] left-[1px]  " >{Sreq}</span>

            </div>
        </h1>
      </div>
            <select id="countries" class="bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:border-blue-600 dark:placeholder-gray-400   text-center  dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected classnName="text-xl bg-blue-600">Choose </option>
  {children}
</select>
</div>
        </>
    )
} 