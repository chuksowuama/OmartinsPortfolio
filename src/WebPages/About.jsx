import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
const PORTFOLIOID="tK6b1sApDYThYpar7EwbIE3EtoB3";

const About = ({ aboutTheme }) => {
const[aboutData,setAboutData]=useState(null);

  useEffect(()=>{
    async function fetchAboutFromFirebase(){
     const aboutRef=doc(db,"users",PORTFOLIOID,"About","AboutDetails");
      const savedData= await getDoc(aboutRef);
      if(savedData.exists()){
         setAboutData(savedData.data());
      }
    }
    fetchAboutFromFirebase();
  },[])

  if(!aboutData) return null
  const {
    fullName,
    professionalSumary,
    technicalSkills = [],
    Education = [],
    certificate = [],
    leadership = [],
  }=aboutData;

  return (
    <>
      <div className={`page ${aboutTheme==="light"?"bg-secondary text-primary ":"bg-primary text-secondary "} `}>
        <h1 className="pageHeader">About Me</h1>

        <div className="grid grid-cols-1 gap-10 border-l border-neutral-700 sm:pl:2 lg:pl-6">
          {/* Left Content */}
          <div>
            <p className="pageHeader mb-4">
              Hello! I’m{" "}
              <span className="text-yellow-400 font-medium textbody">{fullName}</span>.
            </p>
            <p className="writeUp leading-relaxed textbody">{professionalSumary}</p>
          </div>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-400">
                <span className="text-sm">🎓</span>
              </div>
              <h2 className="smallHeader font-semibold">Education</h2>
            </div>

            <div className="space-y-10 relative border-l border-neutral-700 sm:pl:2 lg:pl-6">
              {
                Education.map((item)=>(
                 <div>
                <span className="textbody">{item.yearsAttended}</span>
                <h3 className="mt-2 font-medium textbody">
                 {item.degreeInstitution}
                </h3>
              </div>
                ))
              }
            </div>
          </section>
          {/* Technical skillz */}
          <section>
            <h2 className="smallHeader mb-6">Technical Skills</h2>

            <div className="grid grid-cols-2 gap-4 writeUp">
              {technicalSkills.length &&
                technicalSkills.map((skills) => (
                  <div className={`flex sm:flex-col md:flex-row items-center gap-4 p-4 rounded-md w-full border${aboutTheme==="light" ? "border-neutral-700" : "border-neutral-300"}`}>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-yellow-400 text-yellow-400">
                      <i
                        className={`fa-brands ${skills.skillIconClass} text-xl`}
                      ></i>
                    </div>
                    <div>
                      <h4 className="font-semibold sm:text-center md:text-start textbody">
                        {skills.skillName}
                      </h4>
                      <p className="textbody sm:text-center md:text-start">
                        {skills.skillDescription}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          <section>
            <h2 className="smallHeader">Leadership Experience</h2>
            <div className="border-b border-neutral-400">
               {leadership.map((item) => (
              <p className="writeUp textbody mt-4">
                <span className="textbody">{item.roleOrganization}</span>
                <span className="textbody">{item.leadershipYears}</span> <br />
                <p className="mt-2 whitespace-pre-line textbody">{item.leadershipResponsibilities}</p>
              </p>
            ))}
            </div>
          </section>

          <section>
            <h2 className="smallHeader font-semibold mb-3">Certification</h2>
            <div className="writeUp border-b border-neutral-400">
              {
                certificate.map((item)=>(
                  <p className="writeUp mt-1 textbody"><span>{item.certificationName}</span> <span>{item.certificationYear}</span></p>
                ))
              }
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;


//  const selectedabout = useSelector((state) => state.stored.aboutStored||{});
//   const selectedSkills = useSelector(
//     (state) => state.stored.technicalSkillsStored ?? []
//   );
//   const selectedEdu = useSelector(
//     (state) => state.stored.educationStored ?? []
//   );
//   const selectedcert = useSelector(
//     (state) => state.stored.certificateStored ?? []
//   );
//   const selectedLeader = useSelector(
//     (state) => state.stored.leadershipStored ?? []
//   );