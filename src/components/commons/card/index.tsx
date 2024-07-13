import useGiftStore from "../../../feature/store/gifts.store";
import "./styles.scss";

import { BsFillGiftFill } from "react-icons/bs";

interface ICardProps {
  image: { src: string; alt: string };
  name: string;
  link?: string;
}

export default function Card({ image, name, link }: ICardProps) {
  const { toggleFinalModal } = useGiftStore();

  const onGift = () => toggleFinalModal({ visible: true, step: "identify" });

  return (
    <div className="card-container">
      <img src={image.src} alt={image.alt} />
      <p className={`${link ? "" : "card-container-adjust-height"}`}>{name}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Sugestão de compra
        </a>
      )}
      <button onClick={onGift}>
        <BsFillGiftFill />
        Presentear
      </button>
    </div>
  );
}
