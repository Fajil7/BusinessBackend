import React, { useEffect, useState } from "react";
import { getForms, updateFormStatus } from "./Api";
import FormCard from "./FormCard";
import { FaUser } from "react-icons/fa";

const FormList = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const formsData = await getForms();
      setForms(formsData);
    } catch (error) {
      console.error("Error fetching forms:", error);
    }
  };

  const handleStatusUpdate = async (formId, status) => {
    try {
      await updateFormStatus(formId, status);
      fetchForms();
    } catch (error) {
      console.error(`Error updating status for form ${formId}:`, error);
    }
  };

  return (
    <div className=" grid grid-cols-[250px,calc(100%-250px)]">
      <div className="h-screen m-0 bg-stone-700 text-white w-full relative ">
        <div className=" h-full bg-[rgb(17,32,48)] text-white w-[250px] fixed top-0 left-0">
          <div className=" bg-sky-900 h-20 flex justify-center items-center gap-4 font-semibold">
            <div className="text-3xl p-3 bg-white text-slate-700 rounded-full">
              <FaUser />
            </div>
            <h1>
              MSMEDOST <br /> Admin
            </h1>
          </div>
          <img
            src="https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg"
            className=" -z-10 absolute h-full opacity-10"
            alt=""
          />
          <ul className=" ml-10 mt-6 flex flex-col gap-4 z-30">
            <li>Dashboard</li>
          </ul>
        </div>
      </div>

      <div className="p-6 flex flex-wrap gap-6 justify-center">
        {forms.map((form) => (
            <div className=" border-4 border-gray-700 border-opacity-10 shadow-lg w-fit h-fit p-4 flex justify-center items-center flex-col">
                <img className=" w-16 object-cover" src="https://img.icons8.com/?size=100&id=492ILERveW8G&format=png&color=000000" alt="" />
          <FormCard
          key={form._id}
          form={form}
          handleStatusUpdate={handleStatusUpdate}
          
          />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormList;
