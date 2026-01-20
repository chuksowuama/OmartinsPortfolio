import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeReduxWork,
  setReduxBulkwork,
  setReduxWork,
} from "../Redux Folder";
import { db, auth } from "../Firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const WorksAdmin = () => {
  const dispatchWork = useDispatch();
  const Workinfo = useSelector((state) => state.stored.workStored || []);
  const [loading, setLoading] = useState(false);
  const fileinputRef = useRef(null);
  const [WorkForm, setWorkForm] = useState({
    projectTitle: "",
    projectURL: "",
    projectDescription: "",
    projectimg: null,
    projectType: "",
  });

  /* ================= FETCH WORKS ================= */

  useEffect(() => {
    async function fetchworkfromFirebase() {
      const user = auth.currentUser;
      if (!user) return;

      const workref = collection(db, "users", user.uid, "works");

      const fetchedData = await getDocs(workref);

      const allProjects = fetchedData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      dispatchWork(setReduxBulkwork(allProjects));
    }

    fetchworkfromFirebase();
  }, [dispatchWork]);

  /* ================= FORM HANDLER ================= */

  function handleWorks(e) {
    const { name, value, files } = e.target;

    if (files && files.length > 0) {
      setWorkForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setWorkForm((prev) => ({ ...prev, [name]: value }));
    }
  }

  /* ================= CLOUDINARY UPLOAD ================= */

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "portfolio_upload"); // your preset
    formData.append("folder", `users/works`); // optional

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dqyrgh1vt/image/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error?.message || "Cloudinary upload failed");
    }

    return data.secure_url;
  };

  /* ================= SUBMIT WORK ================= */
  async function submitWork() {
    if (!WorkForm.projectTitle || !WorkForm.projectURL) return;

    const user = auth.currentUser;
    if (!user) return;
    setLoading(true);
    try {
      let imgURL = "";
      // Upload image ONLY if user selected one
      if (WorkForm.projectimg) {
        imgURL = await uploadToCloudinary(WorkForm.projectimg);
      }
      const workData = {
        projectTitle: WorkForm.projectTitle,
        projectURL: WorkForm.projectURL,
        projectDescription: WorkForm.projectDescription,
        projectimg: imgURL,
        projectType: WorkForm.projectType,
      };
      const workRef = collection(db, "users", user.uid, "works");
      const docRef = await addDoc(workRef, workData);
      dispatchWork(setReduxWork({ ...workData, id: docRef.id }));

      // Reset form
      setWorkForm({
        projectTitle: "",
        projectURL: "",
        projectDescription: "",
        projectimg: null,
        projectType: "",
      });
      if (fileinputRef.current) {
        fileinputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to upload project: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  /* ================= DELETE WORK ================= */

  async function handleDelete(id) {
    const confirmDelete = window.confirm("sure you want to delete?");
    if (!confirmDelete) return;
    const user = auth.currentUser;

    if (!user) return;

    const workref = doc(db, "users", user.uid, "works", id);
    await deleteDoc(workref);
    dispatchWork(removeReduxWork(id));
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
          ref={fileinputRef}
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
        <button
          className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          onClick={submitWork}
        >
          Save Changes
        </button>
      </section>

      <section className="bg-white rounded-2xl shadow p-6 mt-6">
        <h1 className="text-2xl font-bold mb-4">Add New Project</h1>
        <div>
          {Workinfo.map((item) => (
            <div className="button text-primary border-b border-nuetral-700">
              <h2 className="flex justify-between mb-2">
                {item.projectTitle}{" "}
                <button
                  onClick={() => handleDelete(item.id)}
                  disabled={loading}
                >
                  cancel
                </button>
              </h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WorksAdmin;
