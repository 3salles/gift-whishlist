import "./styles.scss";

import Modal from "../commons/modal";
import FinalStep from "./final-step";

export default function FinalModal() {
  return <Modal visible content={<FinalStep />} />;
}
