import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Resume = () => {
 const Resumeinfo=useSelector((state)=>Array.isArray(state.stored.resumeStored)?state.stored.resumeStored:[]  )

  return (
    <>
      <div className="page">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold mb-10 border-b border-neutral-700 pb-3">Resume</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-400">
              <span className="text-sm">💼</span>
            </div>
            <h2 className="text-lg font-semibold">Experience</h2>
          </div>

          <div className="space-y-10 relative border-l border-neutral-700 pl-6">
              {
                Resumeinfo.map((item)=>(
                <div>
                <span className="text-xs text-yellow-400 border border-yellow-400 px-2 py-0.5 rounded">
                {item.Years}
              </span>
              <h3 className="mt-2 font-medium">{item.jobTitle}</h3>
              <p className="text-sm text-gray-400">
                {item.Company} — {item.Location}
              </p>
              <pre className="text-sm text-gray-500 mt-2">
                {item.responsibilities}
              </pre>
                </div>
                ))
              }
          </div>
        </section>
          </div>   
        </div>
      </div>
    </>
  );
};

export default Resume;

