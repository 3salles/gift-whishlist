import { create } from "zustand";

import giftsInitialState from "./gifts-initial-state";
import {
  IFinalModal,
  IGift,
  IGiftsAction,
  IGiftsState,
} from "../types/gifts.type";
import { ref, set as firebaseSet, update } from "firebase/database";
import { firebaseDb } from "../../services/firebase-config";
import { uuid } from "../utils/uuid-generator";

const useGiftStore = create<IGiftsState & IGiftsAction>((set) => ({
  ...giftsInitialState,
  toggleFinalModal: (modal: IFinalModal) =>
    set((state) => ({ ...state, finalModal: modal })),
  onSelectGift: (gift: IGift) =>
    set((state) => ({ ...state, selectedGift: gift })),
  onSendGift: (gift: IGift, userName: string) =>
    set((state) => {
      const userData = { name: userName, gift: gift.uid, uid: uuid() };
      
      update(ref(firebaseDb, "gifts/" + gift.uid), { stock: gift.stock - 1 })
        .then(() => console.log("=> success gifts"))
        .catch(() => console.log("=> error gifts"));

      firebaseSet(ref(firebaseDb, "chosen/" + userData.uid), userData)
        .then(() => console.log("=> success users"))
        .catch(() => console.log("=> error users"));

      return {
        ...state,
        selectedGift: {} as IGift,
        finalModal: { step: "final", visible: true },
      };
    }),
}));

export default useGiftStore;
