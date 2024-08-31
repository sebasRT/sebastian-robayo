import { useEffect, useState } from "react"

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("")

    useEffect(()=>{
        setTheme(localStorage.theme)
    })
    
    const toggle = ()=> {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.theme = newTheme;
        document.documentElement.classList.toggle('dark');
    }

    return (
        <div className="absolute pointer-events-auto bottom-0 right-0 text-3xl p-2 bg-primary-100 dark:bg-primary-950 m-3 border border-primary-500 rounded-full" onClick={toggle} title="color theme switcher">
            {
                theme === "light" ? <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m15.844 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.781-1.428zm-5.432.814A8 8 0 1 0 18.93 16A9 9 0 0 1 10 7c0-.98.131-1.937.412-2.842M2 12C2 6.477 6.477 2 12 2h1.734l-.868 1.5C12.287 4.5 12 5.69 12 7a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626C20.162 19.137 16.417 22 12 22C6.477 22 2 17.523 2 12m18.5-5.584l.914 1.67l1.67.914l-1.67.914l-.914 1.67l-.914-1.67L17.916 9l1.67-.914z"/></svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4" strokeLinejoin="round"/><path strokeLinecap="round" d="M20 12h1M3 12h1m8 8v1m0-18v1m5.657 13.657l.707.707M5.636 5.636l.707.707m0 11.314l-.707.707M18.364 5.636l-.707.707"/></g></svg>
            }
        </div>
    )
}

export default ThemeSwitcher