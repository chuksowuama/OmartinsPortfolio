import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeReduxWork, setReduxWork } from "../Redux Folder";


const WorksAdmin = () => {
    const dispatchWork=useDispatch()
  const Workinfo=useSelector((state)=>state.stored.workStored||[])
  const [WorkForm, setWorkForm] = useState({
    projectTitle: "",
    projectURL: "",
    projectDescription: "",
    projectimg: "",
    projectType: "",
  });

  function handleWorks(e) {
    const{name,value,files}=e.target

    if(files && files.length>0){
      const reader=new FileReader();
      reader.onloadend=()=>{
        setWorkForm((prev)=>({...prev,[name]:reader.result}))
      }
      reader.readAsDataURL(files[0])
    }else{
    setWorkForm((prev)=>({...prev,[name]:value}))
    }
   
  }

   function submitWork(){
    if(!WorkForm.projectTitle && !WorkForm.projectURL)return;
    dispatchWork(setReduxWork(WorkForm))
  setWorkForm({
  projectTitle: "",
  projectURL: "",
  projectDescription: "",
  projectimg: "",
  projectType: "",
});
  }

   function handleDelete(id){
    const confirmDelete=window.confirm("sure you want to delete?")
    if(confirmDelete){
      dispatchWork(removeReduxWork(id))
    }
   }


  return (
    <>
    <section className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Portfolio Works</h2>
      <input
        type="text"
        placeholder="Project Title"
        className="w-full p-3 border rounded-lg mb-2"
        name="projectTitle"
        value={WorkForm.projectTitle}
        onChange={handleWorks}
      />
      <input
        type="file"
        placeholder="Project Image"
        className="w-full p-3 border rounded-lg mb-2"
        name="projectimg"
        id=""
        onChange={handleWorks}
      />
      <input
        type="text"
        placeholder="Project URL"
        className="w-full p-3 border rounded-lg mb-2"
        name="projectURL"
        value={WorkForm.projectURL}
        onChange={handleWorks}
      />

      <textarea
        placeholder="Project Description"
        className="w-full h-24 p-3 border rounded-lg mb-2"
        name="projectDescription"
        value={WorkForm.projectDescription}
        onChange={handleWorks}
      />
      <button className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800" onClick={submitWork}>
        Save Changes
      </button>
    </section>

      <section className="bg-white rounded-2xl shadow p-6 mt-6">
      <h1 className="text-2xl font-bold mb-4">Add New Project</h1>
       <div>
       {Workinfo.map((item)=>(
        <div className="button text-primary border-b border-nuetral-700">
          <h2 className="flex justify-between mb-2">{item.projectTitle} <button onClick={()=>handleDelete(item.id)}>cancel</button></h2>
        </div>
       ))}
       </div>
    </section>
    </>
  );
}

export default WorksAdmin


