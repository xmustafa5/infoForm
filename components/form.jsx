import Inputs from "./input";
import Checkbox from './checkbox';
import { useRef } from "react";

export default function Form() {
  const refs = [
    { title: "File No.", ref: useRef(null) },
    { title: "Gender", ref: useRef(null) },
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
  ];
    const InfoInput = [
        { title: "File No.",w:"64"  ,pr:" "},
        { title: "Gender",w:"64" ,pr:" " },
        { title: "Full Name",w:"64" ,pr:" " },
        { title: "Mother Name",w:"64" ,pr:" " },
        { title: "Province No",w:"64" ,pr:" " },
        { title: "Clivilized",w:"64" ,pr:" " },
        { title: "countryside",w:"64" ,pr:" " },
        { title: "Age",w:"64" ,pr:" " },
        { title: "Address",w:"64" ,pr:" " },
        { title: "Phone No.",w:"64" ,pr:" " },
        { title: "Sicial Status",w:"64" ,pr:" " },
        { title: "Birth Date",w:"64" ,pr:" " },
        { title: "Email",w:"64" ,pr:" " },
        { title: "Ammarent impairments",w:"64" ,pr:" " },
        { title: "Ammarent impairments",w:"64" ,pr:" " },
        { title: "Birth Address",w:"64" ,pr:" " },
        { title: "Relative Phone No",w:"64" ,pr:" " },
        { title: "Job",w:"64" ,pr:" " },
        { title: "Job type",w:"64" ,pr:" " },
        { title: "Review Status",w:"64" ,pr:" " },
        { title: "Admission Date",w:"64" ,pr:" " },
        { title: "Refered form",w:"64" ,pr:" " },
        { title: "Unit",w:"64" ,pr:" " },
        { title: "Religion",w:"64" ,pr:" " },
        { title: "Bed No..",w:"64" ,pr:" " },
        { title: "Floor No.",w:"64" ,pr:" " },
        { title: "Date",w:"64" ,pr:" " },
        { title: "Transformations" ,pr:" ",w:"full" },
        { title: "Ploice Status ",w:"64" ,pr:" " },
        { title: "Exit Date",w:"64" ,pr:" " },
        { title: "Exit Status",w:"64" ,pr:" " },
        { title: "Death Date",w:"64" ,pr:" " },
      ];

      const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        // Access the values using the refs
        const fileNoValue = refs[0].ref.current.value;
        const genderValue = refs[1].ref.current.value;
        const check = refs[5].ref.current.value;
        // ... Access values for other fields
    
        // Do something with the form data
        console.log('Form submitted with values:', { fileNoValue, genderValue,check });
    
        // Add your logic for handling the form data, such as making an API request, etc.
      };
  return (
    <>
      <div  onSubmit={handleSubmit} className="ml-[260px]">
        <form className="items-center mt-[90px] ml-[10px] ">
          <div className="flex justify-center gap-12">
            <Inputs ref={refs[0].ref} {...InfoInput[0]}/>
            <Inputs ref={refs[1].ref} {...InfoInput[1]}/>
            <Inputs ref={refs[2].ref} {...InfoInput[2]}/>
            <Inputs ref={refs[3].ref} {...InfoInput[3]}/>
          </div>
          <div className="flex justify-center gap-2 mt-4 pr-4">
            <Inputs ref={refs[4].ref} {...InfoInput[4]}/>
            <Checkbox ref={refs[5].ref} {...InfoInput[5]}/>
            <Checkbox ref={refs[6].ref} {...InfoInput[6]}/>
            <Inputs ref={refs[7].ref} {...InfoInput[7]}/>
            <Inputs ref={refs[8].ref} {...InfoInput[8]}/>
           
          </div>
          <div className="flex justify-center gap-12 mt-4">
            <Inputs ref={refs[9].ref} {...InfoInput[9]}/>
            <Inputs ref={refs[10].ref} {...InfoInput[10]}/>
            <Inputs ref={refs[11].ref} {...InfoInput[11]}/>
            <Inputs ref={refs[12].ref} {...InfoInput[12]}/>
          </div>
          <div className="flex justify-center gap-12 mt-4">
            <Inputs ref={refs[14].ref} {...InfoInput[14]}/>
            <Inputs ref={refs[15].ref} {...InfoInput[15]}/>
            <Inputs ref={refs[16].ref} {...InfoInput[16]}/>
            <Inputs ref={refs[17].ref} {...InfoInput[17]}/>
          </div>
          <div className="flex justify-center gap-12 mt-4">
            <Inputs ref={refs[18].ref} {...InfoInput[18]}/>
            <Inputs ref={refs[19].ref} {...InfoInput[19]}/>
            <Inputs ref={refs[20].ref} {...InfoInput[20]}/>
            <Inputs ref={refs[21].ref} {...InfoInput[21]}/>
          </div>
          <div className="flex justify-center gap-2 mt-4 pr-4">
            <Inputs ref={refs[22].ref} {...InfoInput[22]}/>
            <Inputs ref={refs[23].ref} {...InfoInput[23]}/>
            <Checkbox ref={refs[24].ref} {...InfoInput[24]}/>
            <Checkbox ref={refs[25].ref} {...InfoInput[25]}/>
            <Inputs ref={refs[26].ref} {...InfoInput[26]}/>
          </div>
          <div className="flex justify-center gap-12 ">
            <Inputs ref={refs[27].ref} {...InfoInput[27]}/>
                </div>
                <div className="flex justify-center gap-12 mt-4">
            <Inputs ref={refs[28].ref} {...InfoInput[28]}/>
            <Inputs ref={refs[29].ref} {...InfoInput[29]}/>
         
            <Inputs ref={refs[30].ref} {...InfoInput[30]}/>
            <Inputs ref={refs[31].ref} {...InfoInput[31]}/>
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
