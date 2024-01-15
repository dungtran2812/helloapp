import React, { Component } from "react"
import { useContext } from "react"
import { ThemeContext, ThemeProvider } from "./ThemeContext"
export default function Navigation() {  
    const { theme, toggle, dark} = useContext(ThemeContext)
    
        return (
            <div>
                <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <ul >
                        <li><a className="active" href="#home" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Home</a></li>
                        <li><a href="#news" style={{ backgroundColor: theme.backgroundColor, color: theme.color }} >News</a></li>
                        <li><a href="#about" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>About</a></li>
                        <li><a href="#contact" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>Contact</a></li>
                    </ul>
                    <div style={{position: "right"}}>
                        <a className="switch-mode" href="#" onClick={toggle} style={{backgroundColor: theme.backgroundColor,color: theme.color, outline: 'none'}} data-testid="toggle-theme-btn">
                            switch Nav to {!dark ? "dark" : "light"} mode
                        </a>
                    </div>
                </nav>
            </div>
        )
}
