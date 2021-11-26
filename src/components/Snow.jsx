import "./snow.css";
import blooddrop from "../images/blood-drop.png";

const Snow = ({ darkMode }) => {
  return (
    <div
      className={darkMode ? "dark-snowflakes" : "snowflakes"}
      aria-hidden="true"
    >
      <div className={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div className={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div className={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div className={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div className={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div className={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div className={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div className={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div className={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div className={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
    </div>
  );
};

export default Snow;
