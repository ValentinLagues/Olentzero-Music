import "./darkmode.css";

const DarkMode = ({ setDarkMode, darkMode }) => {
  return (
    <div className="dark-mode">
      <label className="dark-mode-label" htmlFor="checkbox">
        Dark Mode
      </label>
      <input
        className="dark-mode-checkbox"
        type="checkbox"
        value={darkMode}
        onClick={() => setDarkMode(!darkMode)}
      />
    </div>
  );
};

export default DarkMode;
