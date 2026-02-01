import React, { useEffect, useState } from "react";
import {collection, getDocs } from "firebase/firestore";
import { db} from "../Firebase";
const PORTFOLIOID="tK6b1sApDYThYpar7EwbIE3EtoB3";
const Workd = ({ workTheme }) => {
    const [WorkData, setWorkData] = useState([]);
  
    useEffect(() => {
      async function fetchworkfromFirebase() {
  
        const workref = collection(db, "users",PORTFOLIOID, "works");
  
        const fetchedData = await getDocs(workref);
  
        const allProjects = fetchedData.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
  
       setWorkData(allProjects)
      }
  
      fetchworkfromFirebase();
    }, []);

  return (
    <>
      <section className={`page min-h-screen ${workTheme==="light"?"bg-secondary text-primary":"bg-primary text-secondary"} `}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/10 pb-4 mb-10">
          <h2 className="pageHeader font-semibold">Works</h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card */}

        {
          WorkData.map((item)=>(
          <a href={item.projectURL} className="block" target="_blank" rel="rel noreferrer" >
          <div className="p-3 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            src={item.projectimg}
            alt={item.projectTitle}
            className="w-full h-64 object-cover"
          />
          <div className="mt-4">
            <h3 className="text-lg font-medium">{item.projectTitle}</h3>
            <p className="textbody ">{item.projectType}</p>
          </div>
        </div>
        </a>
          ))
        }
    </div>
      </section>
    </>
  );
};

export default Workd;
