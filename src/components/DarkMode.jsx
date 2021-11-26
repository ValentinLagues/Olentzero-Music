import "./darkmode.css";

const DarkMode = ({ setDarkMode, darkMode }) => {
  return (
    <div className={darkMode ? "dark-mode" : "mode"}>
      <label
        className={darkMode ? "dark-mode-label" : "mode-label"}
        htmlFor="checkbox"
      >
        Dark Mode
      </label>
      <button
        className="dark-mode-checkbox"
        type="button"
        value={darkMode}
        onClick={() => setDarkMode(!darkMode)}
      />
    </div>
  );
};

export default DarkMode;
