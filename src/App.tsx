import Card from "./components/card";
import "./styles/App.scss";
import giftList from "./gift-list.json";

function App() {
  const { gifts } = giftList;

  return (
    <section className="main-container">
      <header>
        <h1>Presentes de Casa Nova</h1>
      </header>
      <article>
        Aqui está a lista de algumas coisas que eu gostaria de ganhar, alguns
        itens tem o link da Amazon para se basearem, mas podem comprar de outros
        lugares e de outras marcas S2.
      </article>
      <article className="card-wrapper">
        {gifts.map((gift) => (
          <Card name={gift.name} image={gift.image} link={gift.link} />
        ))}
      </article>
    </section>
  );
}

export default App;
