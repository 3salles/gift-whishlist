import "./styles.scss";

import { ReactNode } from "react";
import { IoCloseSharp } from "react-icons/io5";
import useGiftStore from "../../../feature/store/gifts.store";

interface IModal {
  content: ReactNode;
  visible: boolean;
}

export default function Modal({ content, visible }: IModal) {
  const { toggleFinalModal } = useGiftStore();
  const onClose = () => toggleFinalModal({ visible: false, step: "final" });

  if (!visible) {
    return null;
  }

  return (
    <section className="modal-overlay">
      <article className="modal-content">
        <IoCloseSharp onClick={onClose} />
        {content}
      </article>
    </section>
  );
}
