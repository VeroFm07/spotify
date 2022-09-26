import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from 'redux/store/store'

//Úselo en toda su aplicación en lugar de simplemente `useDispatch` y `useSelector`
export const useAppDispatch=() => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;