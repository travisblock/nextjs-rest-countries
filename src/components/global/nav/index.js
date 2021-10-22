import Link from "next/link"
import Moon from "components/global/icons/moon"
import style from "./style.module.css"
import { useEffect, useState } from "react";
import Sun from "components/global/icons/sun"

function Navbar () {
    const [dark, setDark] = useState(false);

    const handleSwitcher = () => {
        setDark(!dark);
        localStorage.setItem("dark", !dark);
    }

    useEffect(() => {
        if (localStorage.getItem("dark") === "true") {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
            setDark(true);
        } else {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            setDark(false);
        }
    }, [dark])

    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <h1 className={style.title}>
                    <Link href="/">
                        <a>Where in the world ?</a>
                    </Link>
                </h1>
                <div onClick={handleSwitcher} className={style.switcher}>
                    { dark ? (<><Sun className={style.icon}/> Light Mode</>) : (<><Moon className={style.icon}/> Dark Mode</>) }
                </div>
            </nav>
        </header>
    )
}

export default Navbar