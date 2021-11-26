
const DarkMode = ({setDarkMode, darkMode}) => {

    return (
        <div>
            <label htmlFor="checkbox">Dark Mode</label>
            <input type="checkbox" value={darkMode} onClick={(() => setDarkMode(!darkMode))} />
        </div>
    )
}

export default DarkMode;