export type IFinalModal = { visible: boolean; step: "identify" | "final" };

export interface IGift {
  name: string;
  uid: string;
  image: {
    alt: string;
    src: string;
  };
  available?: string;
  link?: string;
}
export interface IGiftsState {
  finalModal: IFinalModal;
}

export interface IGiftsAction {
  toggleFinalModal: (modal: IFinalModal) => void;
}
