import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const useTypedDispatch = (): AppDispatch => useDispatch();

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
