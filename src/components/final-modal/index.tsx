import "./styles.scss";

import Modal from "../commons/modal";
import FinalStep from "./final-step";
import IdentifyPersonStep from "./identify-person-step";
import useGiftStore from "../../feature/store/gifts.store";

export default function FinalModal() {
  const { finalModal } = useGiftStore();

  const steps = { identify: <IdentifyPersonStep />, final: <FinalStep /> };

  return (
    <Modal visible={finalModal.visible} content={steps[finalModal.step]} />
  );
}
