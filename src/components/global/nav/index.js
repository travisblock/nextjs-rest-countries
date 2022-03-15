import Link from "next/link"
import Moon from "components/global/icons/moon"
import style from "./style.module.css"
import Sun from "components/global/icons/sun"
import { useTheme } from "next-themes";

function Navbar () {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <h1 className={style.title}>
                    <Link href="/">
                        <a>Where in the world ?</a>
                    </Link>
                </h1>
                <div onClick={() => setTheme(isDark ? "light" : "dark")} className={style.switcher}>
                    { isDark ? (<><Sun className={style.icon}/> Light Mode</>) : (<><Moon className={style.icon}/> Dark Mode</>) }
                </div>
            </nav>
        </header>
    )
}

export default Navbar