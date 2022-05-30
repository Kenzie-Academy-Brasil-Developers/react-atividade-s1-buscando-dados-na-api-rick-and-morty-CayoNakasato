import style from "./style.module.css";

function CharCard({ char, status }) {
  return (
      <div className={style.cardCharacter}>
        <h2 className={style.characterName}>{char.name}</h2>

        <img src={char.image} alt={char.name} className={style.cardImage} />

        <span className={style.characterOrigin}>{char.origin.name}</span>

        {status === "Alive" ?
        
        (
          <p className={style.alive}>{status}</p>
        ): 

        (
          <p className={style.dead}>{status}</p>
        )}
      </div>
  );
}

export default CharCard;
