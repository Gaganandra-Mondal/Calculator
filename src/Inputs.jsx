import styles from "./App.module.css";

const Inputs = ({ Dplay }) => {
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        className={styles.input}
        placeholder="LETS CALCULATE"
        value={Dplay}
        readOnly
      />
    </div>
  );
};

export default Inputs;
