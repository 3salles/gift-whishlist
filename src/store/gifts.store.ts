import { create } from "zustand";
import { IFinalModal, IGiftsAction } from './../feature/types/gifts.type';
import { IGiftsState } from "../feature/types/gifts.type";
import giftsInitialState from './gifts-initial-state';


const useGiftStore = create<IGiftsState & IGiftsAction>((set) => ({
...giftsInitialState,
toggleFinalModal: (modal:IFinalModal) => set((state) => ({...state, finalModal: modal}))
}))

export default useGiftStore