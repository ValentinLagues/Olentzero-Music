import "./snow.css";
import blooddrop from "../images/blood-drop.png";

const Snow = ({ darkMode }) => {
  return (
    <div class={darkMode ? "dark-snowflakes" : "snowflakes"} aria-hidden="true">
      <div class={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div class={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div class={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div class={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div class={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div class={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div class={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div class={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div class={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
      <div class={darkMode ? "dark-snowflake" : "snowflake"}>
        {darkMode ? <img src={blooddrop} alt="blood-drop" /> : "❄"}
      </div>
    </div>
  );
};

export default Snow;
