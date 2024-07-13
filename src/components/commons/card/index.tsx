import useGiftStore from "../../../feature/store/gifts.store";
import "./styles.scss";

import { BsFillGiftFill } from "react-icons/bs";

interface ICardProps {
  image: { src: string; alt: string };
  name: string;
  available?: number;
  link?: string;
}

export default function Card({ image, name, link, available }: ICardProps) {
  const { toggleFinalModal } = useGiftStore();

  const onGift = () => toggleFinalModal({ visible: true, step: "identify" });
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
