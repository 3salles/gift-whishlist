export type IFinalModal = {visible: boolean, step: 'identify' | 'final'}

export interface IGiftsState {
  finalModal: IFinalModal;
}

export interface IGiftsAction {
  toggleFinalModal: (modal: IFinalModal) => void
}