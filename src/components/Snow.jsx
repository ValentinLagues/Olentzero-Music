import "./snow.css";


const Snow = ({darkMode}) => {

    return (
        <div class={darkMode ? "dark-snowflakes" : "snowflakes"} aria-hidden="true">
            <div class={darkMode ? "dark-snowflake" : "snowflake"}>
            {darkMode ? "🩸" : "❄"}
            </div>
            <div class={darkMode ? "dark-snowflake" : "snowflake"}>
            {darkMode ? "🩸" : "❄"}
            </div>
            <div class={darkMode ? "dark-snowflake" : "snowflake"}>
            {darkMode ? "🩸" : "❄"}
            </div>
            <div class={darkMode ? "dark-snowflake" : "snowflake"}>
            {darkMode ? "🩸" : "❄"}
            </div>
            <div class={darkMode ? "dark-snowflake" : "snowflake"}>
            {darkMode ? "🩸" : "❄"}
            </div>
            <div class={darkMode ? "dark-snowflake" : "snowflake"}>
            {darkMode ? "🩸" : "❄"}
            </div>
            <div class={darkMode ? "dark-snowflake" : "snowflake"}>
            {darkMode ? "🩸" : "❄"}
            </div>
            <div class={darkMode ? "dark-snowflake" : "snowflake"}>
            {darkMode ? "🩸" : "❄"}
            </div>
            <div class={darkMode ? "dark-snowflake" : "snowflake"}>
            {darkMode ? "🩸" : "❄"}
            </div>
            <div class={darkMode ? "dark-snowflake" : "snowflake"}>
            {darkMode ? "🩸" : "❄"}
            </div>
        </div>
    )
}

export default Snow;