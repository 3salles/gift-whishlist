import { create } from "zustand";


import giftsInitialState from './gifts-initial-state';
import { IFinalModal, IGiftsAction, IGiftsState } from "../types/gifts.type";


const useGiftStore = create<IGiftsState & IGiftsAction>((set) => ({
...giftsInitialState,
toggleFinalModal: (modal:IFinalModal) => set((state) => ({...state, finalModal: modal}))
}))

export default useGiftStore