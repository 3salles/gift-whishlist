import { ReactNode } from "react";
import "./styles.scss";

import { IoCloseSharp } from "react-icons/io5";

interface IModal {
  content: ReactNode;
  visible: boolean;
  closable?: boolean;
  onClose?: () => void;
}

export default function Modal({
  content,
  visible,
  closable,
  onClose = () => null,
}: IModal) {
  if (!visible) {
    return null;
  }

  return (
    <section className="modal-overlay">
      <article className="modal-content">
        {closable && <IoCloseSharp onClick={onClose} />}
        {content}
      </article>
    </section>
  );
}
