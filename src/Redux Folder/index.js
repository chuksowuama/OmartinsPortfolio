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
    LoginStored:{}
  },

  reducers: {
    // about reducer function
    settReduxAbout: (state, action) => {
      state.aboutStored = action.payload;
    },
    setReduxTechnicalSkills: (state, action) => {
      const ID = state.technicalSkillsStored.length
        ? Number(
            state.technicalSkillsStored[state.technicalSkillsStored.length - 1]
              .id + 1
          )
        : 1;
      console.log(ID);
      if (!Array.isArray(state.technicalSkillsStored)) {
        state.technicalSkillsStored = [];
      }
      state.technicalSkillsStored.push({ ...action.payload, id: ID });
    },

    setReduxEducation: (state, action) => {
      if (!Array.isArray(state.educationStored)) {
        state.educationStored = [];
      }

      const ID = state.educationStored.length
        ? Number(state.educationStored[state.educationStored.length - 1].id + 1)
        : 1;

      state.educationStored.push({ ...action.payload, id: ID });
    },

    setReduxCertificate: (state, action) => {
      if (!Array.isArray(state.certificateStored)) {
        state.certificateStored = [];
      }
      const ID = state.certificateStored.length
        ? Number(
            state.certificateStored[state.certificateStored.length - 1].id + 1
          )
        : 1;
      state.certificateStored.push({ ...action.payload, id: ID });
    },

    setReduxLeadership: (state, action) => {
      if (!Array.isArray(state.leadershipStored)) {
        state.leadershipStored = [];
      }
      const ID = state.leadershipStored.length
        ? state.leadershipStored[state.leadershipStored.length - 1].id + 1
        : 1;
      state.leadershipStored.push({ ...action.payload, id: ID });
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
      const ID = state.resumeStored.length
        ? state.resumeStored[state.resumeStored.length - 1].id + 1
        : 1;
      state.resumeStored.push({ ...action.payload, id: ID });
    },

    // work reducer function
    setReduxWork: (state, action) => {
      if (!Array.isArray(state.workStored)) {
        state.workStored = [];
      }
      const ID = state.workStored.length
        ? state.workStored[state.workStored.length - 1].id + 1
        : 1;
      state.workStored.push({ ...action.payload, id: ID });
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
      state.LoginStored=action.payload
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
  setReduxLogin
} = myProfile.actions;
export default myProfile.reducer;
