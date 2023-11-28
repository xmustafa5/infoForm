export default function Button({children}){
    return (
        <li>
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               {children}
            </div>
         </li>
    )
} 