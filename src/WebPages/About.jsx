import React from "react";
import { technicalSkills } from "../assets/Data";
import { useSelector } from "react-redux";

const About = () => {
  const selectedabout = useSelector((state) => state.stored.aboutStored||{});
  const selectedSkills = useSelector(
    (state) => state.stored.technicalSkillsStored ?? []
  );
  const selectedEdu = useSelector(
    (state) => state.stored.educationStored ?? []
  );
  const selectedcert = useSelector(
    (state) => state.stored.certificateStored ?? []
  );
  const selectedLeader = useSelector(
    (state) => state.stored.leadershipStored ?? []
  );

  const {
    professionalSumary,
    fullName,
  } = selectedabout;

  return (
    <>
      <div className="page">
        <h1 className="pageHeader">About Me</h1>

        <div className="grid grid-cols-1 gap-10 border-l border-neutral-700 pl-6">
          {/* Left Content */}
          <div>
            <p className="text-lg mb-4">
              Hello! I’m{" "}
              <span className="text-yellow-400 font-medium">{fullName}</span>.
            </p>
            <p className="writeUp leading-relaxed">{professionalSumary}</p>
          </div>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-400">
                <span className="text-sm">🎓</span>
              </div>
              <h2 className="text-lg font-semibold">Education</h2>
            </div>

            <div className="space-y-10 relative border-l border-neutral-700 pl-6">
              {
                selectedEdu.map((item)=>(
                 <div>
                <span className="text-xs text-gray-400">{item.yearsAttended}</span>
                <h3 className="mt-2 font-medium">
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

            <div className="flex flex-wrap gap-4 writeUp">
              {selectedSkills.length &&
                selectedSkills.map((skills) => (
                  <div className="flex sm:flex-col md:flex-row items-center gap-4  p-4 rounded-md border border-secondary w-full sm:w-[48%]">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-yellow-400 text-yellow-400">
                      <i
                        className={`fa-brands ${skills.skillIconClass} text-xl`}
                      ></i>
                    </div>
                    <div>
                      <h4 className="font-semibold sm:text-center md:text-start">
                        {skills.skillName}
                      </h4>
                      <p className="text-sm text-secondary sm:text-center md:text-start">
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
               {selectedLeader.map((item) => (
              <p className="writeUp">
                <span>{item.roleOrganization}</span>
                <span>{item.leadershipYears}</span> <br />
                <pre className="mt-2">{item.leadershipResponsibilities}</pre>
              </p>
            ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Certification</h2>
            <div className="writeUp border-b border-neutral-400">
              {
                selectedcert.map((item)=>(
                  <p className="writeUp mt-1"><span>{item.certificationName}</span> <span>{item.certificationYear}</span></p>
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
