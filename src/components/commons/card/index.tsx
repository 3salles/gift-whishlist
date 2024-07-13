import useGiftStore from "../../../feature/store/gifts.store";
import { IGift } from "../../../feature/types/gifts.type";
import "./styles.scss";

import { BsFillGiftFill } from "react-icons/bs";

interface ICardProps {
  gift: IGift;
}

export default function Card({ gift }: ICardProps) {
  const { toggleFinalModal, onSelectGift } = useGiftStore();

  const { image, name, link, available } = gift;

  const onGift = () => {
    onSelectGift(gift);
    toggleFinalModal({ visible: true, step: "identify" });
  };
  const disabled = !available && available === 0;

  return (
    <div className="card-container">
      <img src={image.src} alt={image.alt} />
      <p className={`${link ? "" : "card-container-adjust-height"}`}>{name}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Sugestão de compra
        </a>
      )}
      <button onClick={onGift} disabled={disabled}>
        {disabled ? (
          <p>Indisponível</p>
        ) : (
          <>
            <BsFillGiftFill />
            Presentear
          </>
        )}
      </button>
    </div>
  );
}
