import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeReduxResume, setReduxBulkResume, settReduxResume } from "../Redux Folder";
import { db,auth } from "../Firebase";
import { addDoc, collection, deleteDoc, getDocs } from "firebase/firestore";

const ResumeAdmin = () => {
  const dispatchResume = useDispatch();
  const [loading, setLoading]=useState(false);
  const Resumeinfo = useSelector((state) => state.stored.resumeStored||[]);
  const [resumeForm, setResumeForm] = useState({
    id: 1,
    jobTitle: "",
    Company: "",
    Location: "",
    Years: "",
    responsibilities: "",
  });

  useEffect(()=>{
    async function fetchResumeFromFirebase(){
     const user=auth.currentUser;
    if(!user) return;
    try {
      const resumeRef= collection(db,"users",user.uid,"resumes");
      const fetchedData= await getDocs(resumeRef);
      const allResumes= fetchedData.docs.map((doc)=>({
        id:doc.id,
        ...doc.data()
      }))

      dispatchResume(setReduxBulkResume(allResumes));
    } catch (error) {
      console.log(error)
    }
    }

    fetchResumeFromFirebase();
  },[dispatchResume])


  function handleResume(e) {
    const { name, value } = e.target;
    setResumeForm((prev) => ({ ...prev, [name]: value }));
  }
  
  async function SubmitResume() {
    if(!resumeForm.jobTitle || !resumeForm.Company) return;

    const user= auth.currentUser;
    if(!user) return;
    setLoading(true)
    try {
      const resumeRef= collection(db,"users",user.uid,"resumes");
      const docRef= await addDoc (resumeRef,resumeForm)
      dispatchResume(settReduxResume({ ...resumeForm, id: docRef.id}));
      
    } catch (error) {
      console.log(error)
    }finally{
     setLoading(false)
    }


    setResumeForm({
      jobTitle: "",
      Company: "",
      Location: "",
      Years: "",
      responsibilities: "",
    });
  }


   async function handleDelete(id) {
    const confirmDelete = window.confirm("SURE YOU WANT TO DELETE?");
    if (!confirmDelete) return;

    const user = auth.currentUser;
    if(!user) return;
     const resumeRef= doc(db,"users",user.uid,"resumes",id);
     await deleteDoc(resumeRef);
     dispatchResume(removeReduxResume(id))
  }

  return (
    <>
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Resume</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Job Title"
            className="w-full p-3 border rounded-lg"
            name="jobTitle"
            value={resumeForm.jobTitle}
            onChange={handleResume}
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full p-3 border rounded-lg"
            name="Company"
            value={resumeForm.Company}
            onChange={handleResume}
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-3 border rounded-lg"
            name="Location"
            value={resumeForm.Location}
            onChange={handleResume}
          />
          <input
            type="text"
            placeholder="Years eg 2023 – 2024"
            className="w-full p-3 border rounded-lg"
            name="Years"
            value={resumeForm.Years}
            onChange={handleResume}
          />
          <textarea
            placeholder="Responsibilities"
            className="w-full h-24 p-3 border rounded-lg"
            name="responsibilities"
            value={resumeForm.responsibilities}
            onChange={handleResume}
          />
        </div>
        <button
          className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          onClick={SubmitResume}
        >
          Save Changes
        </button>
      </section>
      <section className="bg-white rounded-2xl shadow p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Resume</h2>
        <div>
          {Resumeinfo.map((item) => (
            <div className="button text-primary border-b border-nuetral-700">
              <h2 className="flex justify-between mb-2">
                {item.jobTitle}{" "}
                <button onClick={() => handleDelete(item.id)} disabled={loading}>cancel</button>
              </h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ResumeAdmin
