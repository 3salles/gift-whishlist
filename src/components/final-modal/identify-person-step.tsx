import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function IdentifyPersonStep() {
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
        <button className="primary">Enviar</button>
        <button className="secondary">Cancelar</button>
      </footer>
    </div>
  );
}
