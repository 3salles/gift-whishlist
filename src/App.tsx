import "./styles/App.scss";

import FinalModal from "./components/final-modal";
import { firebaseDb } from "./services/firebase-config";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import sortByLinkPresence from "./feature/utils/sort-by-link-presence";
import { IGift } from "./feature/types/gifts.type";
import MainContent from "./components/main-content";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function App() {
  const [gifts, setGifts] = useState<IGift[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const query = ref(firebaseDb, "gifts");

    onValue(query, (snapshot) => {
      const data = snapshot.val() as IGift[];

      if (snapshot.exists()) {
        const giftsArray = Object.values<IGift>(data);
        setGifts(sortByLinkPresence(giftsArray));
      } else {
        console.error("=> data not found"); //TODO - Add notification
      }
    });
  }, []);

  return (
    <>
      <section className={`main-container ${isLoading ? "--loader" : ""}`}>
        <header>
          <h1>Presentes de Casa Nova</h1>
        </header>
        {isLoading ? (
          <DotLottieReact
            src="https://lottie.host/19e18ffd-2b16-445e-9c76-6ae25ee8f6f7/L5VasCRnJS.lottie"
            loop
            autoplay
          />
        ) : (
          <MainContent gifts={gifts} />
        )}
      </section>
      <FinalModal />
    </>
  );
}

export default App;
