import styles from "./App.module.css";

const Buttons = ({ button }) => {
  const Buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "0",
    "-",
    "*",
    "/",
    ".",
    "C",
    "=",
  ];
  return (
    <div>
      <div className={styles.buttonsContainer}>
        {Buttons.map((btn, index) => (
          <button
            key={index}
            className={styles.button}
            onClick={() => button(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
