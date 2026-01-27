import React, { useEffect, useState } from 'react'
import { auth, db } from '../Firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const Profile = () => {
 const[details,setDetails]=useState({
    ProfileName:"",
    occupation:"",
    profilePic:""
 })
 const[displayDetails,setDisplayDetails]=useState(null)
 const PORTFOLIOID="tK6b1sApDYThYpar7EwbIE3EtoB3";

 function handleDetails(e){
    const{name,value,files}=e.target;
    setDetails((prev)=>({...prev,[name]:files? files[0]:value}))
 }

useEffect(()=>{
    async function fetchDetails(){
     try {
       const detailsData= doc(db,"users",PORTFOLIOID,"details","PortfolioDetails")
       const detailsSnap= await getDoc(detailsData)
       if(detailsSnap.exists()){
        setDisplayDetails(detailsSnap.data())
       }
     } catch (error) {
        console.log("error fetching details",error)
     }
    }
    fetchDetails()
},[])

  async function UplaodToCloudinary(file){
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
  }

  async function submitDetails(){
    if(!details.ProfileName || !details.occupation) return;

    let User=auth.currentUser
    if(!User){
     console.log("no user found")
     return;
    }
    let imgURL=""
    if(details.profilePic){
    imgURL= await UplaodToCloudinary(details.profilePic)
    }
    const profdetails={
    ProfileName:details.ProfileName,
    occupation:details.occupation,
    profilePic:imgURL
    }
    const detailsData= doc(db,"users",User.uid,"details","PortfolioDetails")
     await setDoc(detailsData,profdetails)
 }

 useEffect(()=>{
if(displayDetails && Object.keys(displayDetails).length>0){
    setDetails(displayDetails)
}
 },[displayDetails])

 console.log(displayDetails)


  return (
    <>
    <section>
         <h2 className="text-xl font-semibold mb-4">Portfolio Works</h2>
        <input
          type="file"
          placeholder="profilePic"
          className="w-full p-3 border rounded-lg mb-2"
          name="profilePic"
          id=""
        //   ref={fileinputRef}
          onChange={handleDetails}
        />
        <input
          type="text"
          placeholder="ProfileName"
          className="w-full p-3 border rounded-lg mb-2"
          name="ProfileName"
          value={details.ProfileName}
          onChange={handleDetails}
        />
        <input
          type="text"
          placeholder="occupation"
          className="w-full p-3 border rounded-lg mb-2"
          name="occupation"
          value={details.occupation}
          onChange={handleDetails}
        />
        <button
          className="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
          onClick={submitDetails}
        >
          Save Changes
        </button>
    </section>

     <section>
       <h2>Display Details</h2>
       {displayDetails && (
         <div>
           <p>{displayDetails.ProfileName}</p>
           <p>{displayDetails.occupation}</p>
           {displayDetails.profilePic && (
             <img src={displayDetails.profilePic} alt="Profile" className='w-40 h-40' />
           )}
         </div>
       )}
     </section>
    </>
  )
}

export default Profile
