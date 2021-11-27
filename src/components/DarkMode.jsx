import "./darkmode.css";

const DarkMode = ({ setDarkMode, darkMode }) => {
  return (
    <div className={darkMode ? "dark-mode" : "mode"}>
      <button
        className={darkMode ? "dark-mode-label" : "mode-label"}
        type="button"
        value={darkMode}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Santa Mode" : "Evil Santa Mode"}
      </button>
    </div>
  );
};

export default DarkMode;
