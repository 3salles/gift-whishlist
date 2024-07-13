import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import useGiftStore from "../../store/gifts.store";

export default function IdentifyPersonStep() {
  const { finalModal, toggleFinalModal } = useGiftStore();

  const onCancel = () => toggleFinalModal({ ...finalModal, visible: false });
  const onSend = () => toggleFinalModal({ ...finalModal, step: "final" });

  return (
    <div className="final-modal-content">
      <DotLottieReact
        src="https://lottie.host/32091bd2-a072-4862-b90b-5b78826c5a6f/adOw7J8pD7.lottie"
        loop
        autoplay
      />

      <p>
        Para fins de controle interno do sistema, por favor, se identifique.
      </p>
      <span>Relaxa, não será revelado o presente que você está dando.</span>

      <input type="text" placeholder="Digite seu nome" />

      <footer>
        <button className="primary" onClick={onSend}>
          Enviar
        </button>
        <button className="secondary" onClick={onCancel}>
          Cancelar
        </button>
      </footer>
    </div>
  );
}
