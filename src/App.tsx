import "./styles/App.scss";

import giftList from "./gift-list.json";
import Card from "./components/commons/card";
import FinalModal from "./components/final-modal";
import { firebaseDb } from "./services/firebase-config";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";

function App() {
  // const { gifts } = giftList;

  const [gifts, setGifts] = useState<any>([]);

  useEffect(() => {
    const query = ref(firebaseDb, "gifts");

    const unsubscribe = onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        const projectsArray = Object.values(data);
        setGifts(projectsArray);
      }
    });

    return () => unsubscribe();
  }, []);

  const giftsByKey: any = {};

  giftList.gifts.forEach((gift) => {
    giftsByKey[gift.uid] = gift;
  });

  console.log("=> ", gifts);

  return (
    <>
      <section className="main-container">
        <header>
          <h1>Presentes de Casa Nova</h1>
        </header>
        <article>
          Aqui está a lista de algumas coisas que eu gostaria de ganhar, alguns
          itens tem o link da Amazon para se basearem, mas podem comprar de
          outros lugares e de outras marcas S2.
        </article>
        <article className="card-wrapper">
          {gifts.map((gift: any) => (
            <Card
              key={gift.name}
              name={gift.name}
              image={gift.image}
              link={gift.link}
            />
          ))}
        </article>
      </section>
      <FinalModal />
    </>
  );
}

export default App;
