import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReduxContact } from "../Redux Folder";
import { doc,setDoc,getDoc } from "firebase/firestore";
import { db,auth } from "../Firebase";
const PORTFOLIOID="tK6b1sApDYThYpar7EwbIE3EtoB3";

const ContactAdmin = () => {

   const contactinfo = useSelector((state) =>state.stored.contactStored);
  const dispatchContact = useDispatch();

  const [contactForm, setContactForm] = useState({
    email: "",
    phone: "",
    location: "",
    languages: "",
    locationURL: "",
  });

  function handleContact(e) {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  }

 useEffect(() => {
    if (contactinfo && Object.keys(contactinfo).length > 0) {
      setContactForm(contactinfo);
    }
  }, [contactinfo]);

  useEffect(()=>{
    async function fetchContactFromFireBase(params) {
      const contactRef=doc(db,"users",PORTFOLIOID,"contact","profile")
      const savedData= await getDoc(contactRef)

      if(savedData.exists()){
        dispatchContact(setReduxContact(savedData.data()))
      }
    }

    fetchContactFromFireBase();
  },[dispatchContact])


  async function submitContact() {
  const user=auth.currentUser
   if(!user) return;
   const contactRef= doc(db,"users",user.uid,"contact","profile")
   await setDoc(contactRef,contactForm)
    dispatchContact(setReduxContact(contactForm));
  }

  
   return (
    <section className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

      <input
        type="text"
        placeholder="Location URL"
        className="w-full p-3 border rounded-lg mb-2"
        name="locationURL"
        value={contactForm.locationURL}
        onChange={handleContact}
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full p-3 border rounded-lg mb-2"
        name="email"
        value={contactForm.email}
        onChange={handleContact}
      />
      <input
        type="text"
        placeholder="Phone"
        className="w-full p-3 border rounded-lg mb-2"
        name="phone"
        value={contactForm.phone}
        onChange={handleContact}
      />
      <input
        type="text"
        placeholder="Location"
        className="w-full p-3 border rounded-lg mb-2"
        name="location"
        value={contactForm.location}
        onChange={handleContact}
      />
      <input
        type="text"
        placeholder="Languages"
        className="w-full p-3 border rounded-lg mb-2"
        name="languages"
        value={contactForm.languages}
        onChange={handleContact}
      />
      <button
        className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
        onClick={submitContact}
      >
        Save Changes
      </button>
    </section>
   );
}

export default ContactAdmin
