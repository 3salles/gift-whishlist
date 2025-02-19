export type IFinalModal = { visible: boolean; step: "identify" | "final" };

export interface IGift {
  name: string;
  uid: string;
  image: {
    alt: string;
    src: string;
  };
  stock: number;
  limited: boolean;
  link?: string;
}
export interface IGiftsState {
  finalModal: IFinalModal;
  selectedGift: IGift;
}

export interface IGiftsAction {
  toggleFinalModal: (modal: IFinalModal) => void;
  onSelectGift: (gift: IGift) => void;
  onSendGift: (gift: IGift, user: string) => void;
}
