import Card from "./components/card";
import "./styles/App.scss";
import giftList from "./gift-list.json";

function App() {
  const { gifts } = giftList;

  console.log("=> ", gifts);
  return (
    <section className="main-container">
      <header>
        <h1>Presentes de Casa Nova</h1>
      </header>
      <article>
        {gifts.map((gift) => (
          <Card name={gift.name} image={gift.image} link={gift.link} />
        ))}
      </article>
    </section>
  );
}

export default App;
