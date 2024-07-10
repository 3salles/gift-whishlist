import "./styles.scss";

export default function Card() {
  return (
    <div className="card-container">
      <img
        src="https://m.media-amazon.com/images/I/51sTCIytT9L._AC_SL1200_.jpg"
        alt="Imagem de uma pipoqueira vermelha da Tramontina"
      />
      <p>Pipoqueira</p>
      <a
        href="https://www.amazon.com.br/Tramontina-PIPOQUEIRA-20CM-LORETO-VERMELHO/dp/B09W4CSX53/ref=asc_df_B09W4CSX53/?tag=googleshopp00-20&linkCode=df0&hvadid=555495720867&hvpos=&hvnetw=g&hvrand=13161590242518066902&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9197317&hvtargid=pla-1648147887490&psc=1&mcid=a8e89279af9331418bd701d92cbb4116"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sugestão de compra
      </a>
      <button>Presentear</button>
    </div>
  );
}
