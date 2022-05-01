import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store/reducers";

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useTypedDispatch = (): AppDispatch => useDispatch();
