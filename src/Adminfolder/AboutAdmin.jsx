import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCert,
  removeEdu,
  removeLeader,
  removeSkills,
  setReduxCertificate,
  setReduxEducation,
  setReduxLeadership,
  setReduxTechnicalSkills,
  settReduxAbout,
} from "../Redux Folder";

const AboutAdmin = () => {
  const dispatchAbout = useDispatch();
  const selectedabout = useSelector((state) => state.stored.aboutStored ?? {});
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

  const [AboutForm, setAboutForm] = useState({
    professionalSumary: "",
    fullName: "",
  });

  //These Area hold all the states for the different inputs form
  const [skills, setSkills] = useState({
    skillName: "",
    skillIconClass: "",
    skillDescription: "",
  });

  const [education, setEducation] = useState({
    degreeInstitution: "",
    yearsAttended: "",
  });

  const [certificate, setcertificate] = useState({
    certificationName: "",
    certificationYear: "",
  });

  const [leadership, setLeadership] = useState({
    roleOrganization: "",
    leadershipYears: "",
    leadershipResponsibilities: "",
  });

  function HandleAbout(e) {
    const { name, value } = e.target;
    setAboutForm((prev) => ({ ...prev, [name]: value }));
  }

  function HandleSkill(e) {
    const { name, value } = e.target;
    setSkills((prev) => ({ ...prev, [name]: value }));
  }

  function HandleEducation(e) {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  }

  function HandleCertification(e) {
    const { name, value } = e.target;
    setcertificate((prev) => ({ ...prev, [name]: value }));
  }
  function HandleLeadership(e) {
    const { name, value } = e.target;
    setLeadership((prev) => ({ ...prev, [name]: value }));
  }

  //--------------------------------------------

  function addTechnicalSkill() {
    if (!skills.skillName.trim() || !skills.skillDescription.trim()) return;
    dispatchAbout(setReduxTechnicalSkills(skills));
    setSkills({
      skillName: "",
      skillIconClass: "",
      skillDescription: "",
    });
  }

  function addEducation() {
    if (!education.degreeInstitution.trim() && !education.yearsAttended.trim())
      return;
    dispatchAbout(setReduxEducation(education));
    setEducation({
      degreeInstitution: "",
      yearsAttended: "",
    });
  }
  function addLeadership() {
    if (
      !leadership.roleOrganization.trim() ||
      !leadership.leadershipResponsibilities.trim()
    )
      return;
    dispatchAbout(setReduxLeadership(leadership));
    setLeadership({
      roleOrganization: "",
      leadershipYears: "",
      leadershipResponsibilities:""
    });
  }

  function addCertificate() {
    if (
      !certificate.certificationName.trim() ||
      !certificate.certificationYear.trim()
    )
      return;
    dispatchAbout(setReduxCertificate(certificate));
    setcertificate({
      certificationName: "",
      certificationYear: "",
    });
  }

  function submitAbout() {
    const AboutFullForm = {
      ...AboutForm,
      technicalSkills: selectedSkills,
      Education: selectedEdu,
      certificate: selectedcert,
      leadership: selectedLeader,
    };
    dispatchAbout(settReduxAbout({ ...AboutFullForm }));
    setSkills({
      skillName: "",
      skillIconClass: "",
      skillDescription: "",
    });
    setEducation({
      degreeInstitution: "",
      yearsAttended: "",
    });
    setcertificate({
      certificationName: "",
      certificationYear: "",
    });
    setLeadership({
      roleOrganization: "",
      leadershipYears: "",

    });
  }

  useEffect(() => {
    if (selectedabout && Object.keys(selectedabout).length > 0) {
      setAboutForm(selectedabout);
    }
  }, [selectedabout]);

  function handleDeleteSKill(id) {
    const confirmDelete = window.confirm("Are you sure to delete skill");
    if (confirmDelete) {
      dispatchAbout(removeSkills(id));
    }
  }

  function handleDeleteEdu(id) {
    const confirmDelete = window.confirm("Are you sure to delete skill");
    if (confirmDelete) {
      dispatchAbout(removeEdu(id));
    }
  }

  function handleDeleteCertification(id) {
    const confirmDelete = window.confirm("Are you sure to delete skill");
    if (confirmDelete) {
      dispatchAbout(removeCert(id));
    }
  }

  function handleDeleteLeadership(id) {
    const confirmDelete = window.confirm("Are you sure to delete skill");
    if (confirmDelete) {
      dispatchAbout(removeLeader(id));
    }
  }
  //  function handleDelele(id) {
  //   const confirmDelete = window.confirm("Are you sure to delete skill");
  //   if (confirmDelete) {
  //     dispatchAbout(removeSkills(id));
  //   }
  // }

  return (
    <>
      <section className=" space-y-6">
        <section className="bg-white rounded-2xl shadow p-6 space-y-6">
          <h2 className="text-xl font-semibold">Edit About Section</h2>
          <textarea
            placeholder="Professional Summary"
            className="w-full h-32 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            name="professionalSumary"
            value={AboutForm.professionalSumary}
            onChange={HandleAbout}
          />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
            name="fullName"
            value={AboutForm.fullName}
            onChange={HandleAbout}
          />
        </section>
        {/* Education Section */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Degree & Institution"
              className="w-full p-3 border rounded-lg"
              name="degreeInstitution"
              value={education.degreeInstitution}
              onChange={HandleEducation}
            />
            <input
              type="text"
              placeholder="Years Attended"
              className="w-full p-3 border rounded-lg"
              name="yearsAttended"
              value={education.yearsAttended}
              onChange={HandleEducation}
            />
          </div>
          <button
            type="button"
            className="px-3 py-2 bg-primary mt-4 text-white rounded-lg button"
            onClick={addEducation}
          >
            Add Degree
          </button>
        </section>

        {/* Technical Skills */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Skill Name"
              className="p-3 border rounded-lg"
              name="skillName"
              value={skills.skillName}
              onChange={HandleSkill}
            />
            <input
              type="text"
              placeholder="Skill Icon Class"
              className="p-3 border rounded-lg"
              name="skillIconClass"
              value={skills.skillIconClass}
              onChange={HandleSkill}
            />
            <textarea
              placeholder="Skill Description"
              className="w-full h-20 p-3 border rounded-lg"
              name="skillDescription"
              value={skills.skillDescription}
              onChange={HandleSkill}
            />
            <button
              type="button"
              onClick={addTechnicalSkill}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg"
            >
              Add Skill
            </button>
          </div>
        </section>

        {/* Leadership Experience */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Leadership Experience</h2>
          <input
            type="text"
            placeholder="Role & Organization"
            className="w-full p-3 border rounded-lg mb-2"
            name="roleOrganization"
            value={leadership.roleOrganization}
            onChange={HandleLeadership}
          />
          <input
            type="text"
            placeholder="Years"
            className="w-full p-3 border rounded-lg mb-2"
            name="leadershipYears"
            value={leadership.leadershipYears}
            onChange={HandleLeadership}
          />
          <textarea
            placeholder="Responsibilities"
            className="w-full h-24 p-3 border rounded-lg"
            name="leadershipResponsibilities"
            value={leadership.leadershipResponsibilities}
            onChange={HandleLeadership}
          />
          <button
            type="button"
            className="px-3 py-2 bg-primary mt-4 text-white rounded-lg button"
            onClick={addLeadership}
          >
            Add Leadership
          </button>
        </section>

        {/* Certifications */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Certifications</h2>
          <input
            type="text"
            placeholder="Certification Name"
            className="w-full p-3 border rounded-lg mb-2"
            name="certificationName"
            value={certificate.certificationName}
            onChange={HandleCertification}
          />
          <input
            type="text"
            placeholder="Year"
            className="w-full p-3 border rounded-lg"
            name="certificationYear"
            value={certificate.certificationYear}
            onChange={HandleCertification}
          />
          <button
            type="button"
            className="px-3 py-2 bg-primary mt-4 text-white rounded-lg button"
            onClick={addCertificate}
          >
            Add Certificate
          </button>
        </section>
        <button
          className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          onClick={submitAbout}
        >
          Save Changes
        </button>
      </section>

      {/* information view */}

      <section className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-2xl shadow p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">MY Degree</h2>
          <div>
            {selectedEdu.length > 0 &&
              selectedEdu.map((item) => (
                <div className="button text-primary border-b border-nuetral-700">
                  <h2 className="flex justify-between mb-2">
                    {item.degreeInstitution}{" "}
                    <button onClick={() => handleDeleteEdu(item.id)}>
                      cancel
                    </button>
                  </h2>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">MY SKILLS</h2>
          <div>
            {selectedSkills.length > 0 &&
              selectedSkills.map((item) => (
                <div className="button text-primary border-b border-nuetral-700">
                  <h2 className="flex justify-between mb-2">
                    {item.skillName}{" "}
                    <button onClick={() => handleDeleteSKill(item.id)}>
                      cancel
                    </button>
                  </h2>
                </div>
              ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">MY Certifications</h2>
          <div>
            {selectedcert.length > 0 &&
              selectedcert.map((item) => (
                <div className="button text-primary border-b border-nuetral-700">
                  <h2 className="flex justify-between mb-2">
                    {item.certificationName}{" "}
                    <button onClick={() => handleDeleteCertification(item.id)}>
                      cancel
                    </button>
                  </h2>
                </div>
              ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Leadership Skills</h2>
          <div>
            {selectedLeader.length > 0 &&
              selectedLeader.map((item) => (
                <div className="button text-primary border-b border-nuetral-700">
                  <h2 className="flex justify-between mb-2">
                    {item.roleOrganization}{" "}
                    <button onClick={() => handleDeleteLeadership(item.id)}>
                      cancel
                    </button>
                  </h2>
                </div>
              ))}
          </div>
        </div>
                <div className="bg-white rounded-2xl shadow p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div>
            {selectedEdu.length > 0 &&
              selectedEdu.map((item) => (
                <div className="button text-primary border-b border-nuetral-700">
                  <h2 className="flex justify-between mb-2">
                    {item.degreeInstitution}/{item.yearsAttended}
                    <button onClick={() => handleDeleteEdu(item.id)}>
                      cancel
                    </button>
                  </h2>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAdmin;
