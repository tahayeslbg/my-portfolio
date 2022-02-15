import { useTheme } from 'next-themes'

//Ikonlar
import { IoMoon } from "react-icons/io5";
import { RiSunFill } from "react-icons/ri";

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();

    if(theme =="light") {
        document.querySelector(".moon").style.display = "none";
        document.querySelector(".sun").style.display = "flex";
        document.querySelector(".sun").style.background = "transparent";
        document.querySelector(".sun").style.border = "none";
        document.querySelector(".sun").style.cursor = "pointer";
        document.querySelector(".sun").style.fontSize = "20px";
    }

    if(theme =="dark") {
        document.querySelector(".sun").style.display = "none";
        document.querySelector(".moon").style.display = "flex";
        document.querySelector(".moon").style.background = "transparent";
        document.querySelector(".moon").style.border = "none";
        document.querySelector(".moon").style.cursor = "pointer";
        document.querySelector(".moon").style.fontSize = "20px";
    }

    return (
        <div>
        <button className='sun' onClick={() => setTheme('dark')}><RiSunFill /></button>
        <button className='moon' onClick={() => setTheme('light')}><IoMoon /></button>
        </div>
    )
}

export default ThemeChanger;