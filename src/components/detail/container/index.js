import Details from "components/detail/details";
import style from "./style.module.css"
import Link from "next/link";

function Container({ ...props }) {
    const {country} = props;

    return (
        <section className={style.container}>
            <div className={style.container__back}>
                <Link href="/">
                    <a className={style.back}>Back</a>
                </Link>
            </div>
            <Details country={country}/>
        </section>
    )
}

export default Container;