import "./styles.scss";

import { BsFillGiftFill } from "react-icons/bs";

interface ICardProps {
  image: { src: string; alt: string };
  name: string;
  link?: string;
}

export default function Card({ image, name, link }: ICardProps) {
  return (
    <div className="card-container">
      <img src={image.src} alt={image.alt} />
      <p>{name}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Sugestão de compra
        </a>
      )}
      <button>
        <BsFillGiftFill />
        Presentear
      </button>
    </div>
  );
}
