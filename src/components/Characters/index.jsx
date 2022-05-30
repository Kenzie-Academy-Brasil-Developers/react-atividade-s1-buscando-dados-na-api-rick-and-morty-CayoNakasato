import CharCard from "../CharCard";
import style from "./style.module.css";
function Characters({ charactersList }) {
  return (
    <>
      <h1 className={style.headerTitle}>Rick And Morty Characters</h1>
      <div className={style.container}>

        {charactersList.map((char) => {
          return char.status === "Alive" ? (
            <div className={style.card} key={char.id}>
              <CharCard char={char} status={"Alive"} />
            </div>
          ) : (
            <div className={style.cardDead} key={char.id}>
              <CharCard char={char} status={"Dead"} />
            </div>
          );
        })}

      </div>
    </>
  );
}

export default Characters;
