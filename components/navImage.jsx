export default function NavImage(){
    return (
        <>
            <div className="bg-gray-600 h-[110px] relative">
                <div className="bg-blue-600 h-[150px] w-[150px] absolute left-[300px] top-[30px] rounded-lg">

                </div>
                <div className="absolute right-5 top-14 ">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">close</button>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">save</button>
             </div>
              </div>
        </>
    )
} 