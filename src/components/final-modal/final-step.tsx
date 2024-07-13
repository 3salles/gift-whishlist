import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function FinalStep() {
  return (
    <div className="final-modal-content">
      <DotLottieReact
        src="https://lottie.host/dd16f8c0-96e4-4e5e-aa6b-7bd02740e5c8/xsmX6CESDC.lottie"
        loop
        autoplay
      />

      <p>Obrigada pelo presente! Te vejo no rolê!</p>
      <button>Fechar</button>
    </div>
  );
}
