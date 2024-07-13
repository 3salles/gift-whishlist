import "./styles/App.scss";

import Card from "./components/commons/card";
import FinalModal from "./components/final-modal";
import { firebaseDb } from "./services/firebase-config";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import sortByLinkPresence from "./feature/utils/sort-by-link-presence";
import { IGift } from "./feature/types/gifts.type";
import useGiftStore from "./feature/store/gifts.store";

function App() {
  const [gifts, setGifts] = useState<any>([]);
  const { selectedGift } = useGiftStore();
  console.log("=> ", selectedGift);

  useEffect(() => {
    const query = ref(firebaseDb, "gifts");

    const unsubscribe = onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        const projectsArray = Object.values<IGift>(data);
        setGifts(sortByLinkPresence(projectsArray));
      }
    });

    return () => unsubscribe();
  }, []);

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
          {sortByLinkPresence(gifts).map((gift: IGift) => (
            <Card key={gift.uid} gift={gift} />
          ))}
        </article>
      </section>
      <FinalModal />
    </>
  );
}

export default App;
