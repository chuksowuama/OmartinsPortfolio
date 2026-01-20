import { createSlice } from "@reduxjs/toolkit";

const myProfile = createSlice({
  name: "Chuks",
  initialState: {
    aboutStored: [],
    contactStored: {},
    resumeStored: [],
    workStored: [],
    technicalSkillsStored: [],
    educationStored: [],
    certificateStored: [],
    leadershipStored: [],
    user:null
  },

  reducers: {
    // about reducer function
    settReduxAbout: (state, action) => {
      state.aboutStored = action.payload;
    },
    setReduxBulkAbout:(state,action)=>{
      state.aboutStored=action.payload
    },
    setReduxTechnicalSkills: (state, action) => {
      if (!Array.isArray(state.technicalSkillsStored)) {
        state.technicalSkillsStored = [];
      }
      const item=action.payload;
      state.technicalSkillsStored.push(item);
    },

    setReduxEducation: (state, action) => {
      if (!Array.isArray(state.educationStored)) {
        state.educationStored = [];
      }
      const item=action.payload;
      state.educationStored.push(item);
    },

    setReduxCertificate: (state, action) => {
      if (!Array.isArray(state.certificateStored)) {
        state.certificateStored = [];
      }
       const item=action.payload;
      state.certificateStored.push(item);
    },

    setReduxLeadership: (state, action) => {
      if (!Array.isArray(state.leadershipStored)) {
        state.leadershipStored = [];
      }
      const item=action.payload;
      state.leadershipStored.push(item);
    },

    // contact reducer function
    setReduxContact: (state, action) => {
      state.contactStored = action.payload;
    },

    // resume reducer function
    settReduxResume: (state, action) => {
      if (!Array.isArray(state.resumeStored)) {
        state.resumeStored = [];
      }
      const item=action.payload
      state.resumeStored.push(item)
    },

      setReduxBulkResume:(state,action)=>{
      state.resumeStored=action.payload
    },
    // work reducer function
    setReduxWork: (state, action) => {
      if (!Array.isArray(state.workStored)) {
        state.workStored = [];
      }
        const item=action.payload
      state.workStored.push(item);
    },

    setReduxBulkwork:(state,action)=>{
      state.workStored=action.payload
    },

    // Remove an item from the state
    removeReduxResume: (state, action) => {
      state.resumeStored = state.resumeStored.filter(
        (item) => item.id !== action.payload
      );
    },

    removeReduxWork: (state, action) => {
      state.workStored = state.workStored.filter(
        (item) => item.id !== action.payload
      );
    },
    removeSkills: (state, action) => {
      state.technicalSkillsStored = state.technicalSkillsStored.filter(
        (item) => item.id !== action.payload
      );
    },

    removeEdu: (state, action) => {
      state.educationStored = state.educationStored.filter(
        (item) => item.id !== action.payload
      );
    },
    removeLeader: (state, action) => {
      state.leadershipStored = state.leadershipStored.filter(
        (item) => item.id !== action.payload
      );
    },
    removeCert: (state, action) => {
      state.certificateStored = state.certificateStored.filter(
        (item) => item.id !== action.payload
      );
    },

    setReduxLogin:(state,action)=>{
      state.user=action.payload
    }

    //  updatedReduxResume:(state,action)=>{
    //   const updatedResume=action.payload
    //    const index= state.resumeStored.findIndex((item)=>item.id===updatedResume.id)
    //    if(index !== -1){
    //     state.resumeStored[index]=updatedResume
    //    }
    //  }
  },
});

export const {
  settReduxAbout,
  setReduxContact,
  settReduxResume,
  setReduxWork,
  // updatedReduxResume,
  setReduxTechnicalSkills,
  setReduxEducation,
  setReduxCertificate,
  setReduxLeadership,
  removeCert,
  removeLeader,
  removeEdu,
  removeSkills,
  removeReduxWork,
  removeReduxResume,
  setReduxBulkwork,
  setReduxBulkResume,
  setReduxLogin,
  setReduxBulkAbout,
} = myProfile.actions;
export default myProfile.reducer;
