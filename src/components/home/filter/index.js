import Search from "components/global/icons/search";
import { useAppContext } from "context";
import { useEffect, useRef } from "react";
import style from "./style.module.css"

function Filter() {
    const {state, setState} = useAppContext();
    const inputRef = useRef(null);
    const selectRef = useRef(null);

    useEffect(() => {
        if (state.type === "name" && state.filter !== "") {
            inputRef.current.value = state.filter;
        }
        if (state.type === "region" && state.filter !== "") {
            selectRef.current.value = state.filter;
        }
    }, [])

    return(
        <section className={style.filter}>
            <form className={style.form}>
                <div className={style.search}>
                    <input
                        ref={inputRef} 
                        onKeyUp={(e) => setState({type: "name", filter: e.target.value})} 
                        className={style.input} 
                        type="text" 
                        placeholder="Search for a country..." />
                    <Search className={style.search_icon}/>
                </div>
                <div className={style.select}>
                    <select ref={selectRef} onChange={(e) => setState({type: "region", filter: e.target.value})}>
                        <option value="">Filter by Region</option>
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
            </form>
        </section>
    )
}

export default Filter;