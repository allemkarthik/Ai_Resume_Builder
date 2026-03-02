import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; 

export type ATSResponse = {
  score: number;
  missingSkills: string[];
  recommendations: string[];
  resume: string;        // store resume text
  jobDescription: string; // store job description
};

type ATSState = {
  score: number | null;
  missingSkills: string[];
  recommendations: string[];
  resume: string;
  jobDescription: string;
};

const initialState: ATSState = {
  score: null,
  missingSkills: [],
  recommendations: [],
  resume: "",
  jobDescription: "",
};

const atsSlice = createSlice({
  name: "ats",
  initialState,
  reducers: {
    setATSResult: (state, action: PayloadAction<ATSResponse>) => {
      const safeScore = Math.min(Math.max(action.payload.score || 0, 0), 100);

      state.score = safeScore;
      state.missingSkills = action.payload.missingSkills || [];
      state.recommendations = action.payload.recommendations || [];
      state.resume = action.payload.resume || "";
      state.jobDescription = action.payload.jobDescription || "";
    },
    resetATS: (state) => {
      state.score = null;
      state.missingSkills = [];
      state.recommendations = [];
      state.resume = "";
      state.jobDescription = "";
    },
  },
});

export const { setATSResult, resetATS } = atsSlice.actions;
export default atsSlice.reducer;