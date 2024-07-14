import { IGift } from "../../feature/types/gifts.type";
import sortByLinkPresence from "../../feature/utils/sort-by-link-presence";
import Card from "../commons/card";

export default function MainContent({ gifts }: { gifts: IGift[] }) {
  return (
    <>
      <article>
        Aqui está a lista de algumas coisas que eu gostaria de ganhar, alguns
        itens tem o link da Amazon para se basearem, mas podem comprar de outros
        lugares e de outras marcas S2. Lembrando que a lista de presentes é
        opcional, o importante é sua presença!!
      </article>
      <article className="card-wrapper">
        {sortByLinkPresence(gifts).map((gift: IGift) => (
          <Card key={gift.uid} gift={gift} />
        ))}
      </article>
    </>
  );
}
