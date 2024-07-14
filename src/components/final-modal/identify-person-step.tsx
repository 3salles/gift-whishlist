import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import useGiftStore from "../../feature/store/gifts.store";
import { ChangeEvent, useState } from "react";

export default function IdentifyPersonStep() {
  const { finalModal, selectedGift, toggleFinalModal, onSendGift } =
    useGiftStore();

  const [userName, setUserName] = useState("");

  const onUserInputChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setUserName(evt.target.value);

  const onCancel = () => toggleFinalModal({ ...finalModal, visible: false });

  const onSend = () => {
    onSendGift(selectedGift, userName);
    setUserName("");
  };

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

      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={onUserInputChange}
      />

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
