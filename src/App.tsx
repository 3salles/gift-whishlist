import Card from "./components/card";
import "./styles/App.scss";

function App() {
  return (
    <section className="main-container">
      <header>
        <h1>Presentes de Casa Nova</h1>
      </header>
      <article>
        <Card />
      </article>
    </section>
  );
}

export default App;
