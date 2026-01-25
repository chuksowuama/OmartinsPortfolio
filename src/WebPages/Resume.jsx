import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../Firebase";
const PORTFOLIOID = "tK6b1sApDYThYpar7EwbIE3EtoB3";

const Resume = ({ resumeTheme }) => {
  const [Resumeinfo, setResumeinfo] = useState([]);

  useEffect(() => {
    async function fetchAboutFromFirebase() {
      const resumeRef = collection(db, "users", PORTFOLIOID, "resumes");
      const resumeData = await getDocs(resumeRef);
      const allResume = resumeData.docs.map((ref) => ({
        id: ref.id,
        ...ref.data(),
      }));
      setResumeinfo(allResume);
    }
    fetchAboutFromFirebase();
  }, []);

  return (
    <>
      <div className={`page   dark:bg-primary dark:text-secondary ${resumeTheme==="light"?"bg-secondary text-primary":"bg-primary text-secondary"}`}>
        <div className="max-w-6xl mx-auto">
          <h1 className="pageHeader font-semibold mb-10 border-b border-neutral-700 pb-3">
            Resume
          </h1>
          <div className="grid grid-cols-1 gap-12">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full border border-tertiary flex items-center justify-center text-tertiary">
                  <span className="text-sm">💼</span>
                </div>
                <h2 className="smallHeader font-semibold">Experience</h2>
              </div>

              <div className="space-y-10 relative border-l border-neutral-700 sm:pl:2 lg:pl-6 w-full">
                {Resumeinfo.map((item) => (
                  <div>
                    <span className="text-body text-tertiary border border-tertiary-400 px-2 py-0.5 rounded">
                      {item.Years}
                    </span>
                    <h3 className="mt-2 font-medium textbody">{item.jobTitle}</h3>
                    <p className="textbody ">
                      {item.Company} — {item.Location}
                    </p>
                    <p className="textbody  mt-2 whitespace-pre-line ">
                      {item.responsibilities}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
