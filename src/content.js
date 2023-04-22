import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Content(){
    const contextTheme = useContext(ThemeContext)
    console.log(contextTheme)
    return (
        <div style={ { marginTop: '20px' } } className="content">
            <button onClick={contextTheme.handleSetTheme}>toggle</button>
            <h3 
                style={contextTheme.theme === 'light' ? {color: 'red'} : {}} 
                className={contextTheme.theme}
            >
                hello phuc nguyen
            </h3>
        </div>
    )
}

export default Content;