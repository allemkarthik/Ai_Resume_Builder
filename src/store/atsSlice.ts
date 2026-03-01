import { createSlice } from "@reduxjs/toolkit";
import  {PayloadAction} from "@reduxjs/toolkit";

export type ATSResponse = {
  score: number;
  missingSkills: string[];
  recommendations: string[];
};

type ATSState = {
  score: number | null;
  missingSkills: string[];
  recommendations: string[];
};

const initialState: ATSState = {
  score: null,
  missingSkills: [],
  recommendations: [],
};

const atsSlice = createSlice({
  name: "ats",
  initialState,
  reducers: {
    setATSResult: (state, action: PayloadAction<ATSResponse>) => {
      const safeScore = Math.min(
        Math.max(action.payload.score || 0, 0),
        100
      );

      state.score = safeScore;
      state.missingSkills = action.payload.missingSkills || [];
      state.recommendations = action.payload.recommendations || [];
    },
    resetATS: (state) => {
      state.score = null;
      state.missingSkills = [];
      state.recommendations = [];
    },
  },
});

export const { setATSResult, resetATS } = atsSlice.actions;
export default atsSlice.reducer;