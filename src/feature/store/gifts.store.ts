import { create } from "zustand";


import giftsInitialState from './gifts-initial-state';
import { IFinalModal, IGift, IGiftsAction, IGiftsState } from "../types/gifts.type";


const useGiftStore = create<IGiftsState & IGiftsAction>((set) => ({
...giftsInitialState,
toggleFinalModal: (modal:IFinalModal) => set((state) => ({...state, finalModal: modal})),
onSelectGift: (gift: IGift) => set((state) => ({...state, selectedGift: gift}))
}))

export default useGiftStore