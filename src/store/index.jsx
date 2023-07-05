import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootSlice";
import TeamSlice from "./TeamSlice";
import FeatureSlice from "./FeatureSlice";
import FaqSlice from "./FaqSlice";
import AboutSlice from "./AboutSlice";
import HeaderSlice from "./HeaderSlice";
import AuthSlice from "./AuthSlice";

export const store = configureStore({
  reducer: {
    root: RootReducer,
    teams: TeamSlice,
    features: FeatureSlice,
    faq: FaqSlice,
    about: AboutSlice,
    home: HeaderSlice,
    auth: AuthSlice,
  },
});
