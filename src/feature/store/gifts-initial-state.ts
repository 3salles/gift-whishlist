import { IGift, IGiftsState } from "../types/gifts.type"


const giftsInitialState: IGiftsState = {
  finalModal: {visible: false, step: 'identify'},
  selectedGift: {} as IGift,
}


export default giftsInitialState