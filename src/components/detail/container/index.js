import Details from "components/detail/details";
import style from "./style.module.css"
import Link from "next/link";
import ArrowLeft from "components/global/icons/arrowLeft";

function Container({ ...props }) {
    const {country, borders} = props;

    return (
        <section className={style.container}>
            <div className={style.container__back}>
                <Link href="/">
                    <a className={style.back}><ArrowLeft className={style.arrow}/> Back</a>
                </Link>
            </div>
            <Details country={country} borders={borders}/>
        </section>
    )
}

export default Container;