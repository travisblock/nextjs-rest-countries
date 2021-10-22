import style from "./style.module.css"
import Image from "next/image"

function Details({ ...props }) {
    const {country} = props;

    return (
        <div className={style.details}>
            <div className={style.flag}>
                <Image src={country.flag} alt={country.name} width="100%" height="100%" layout="responsive" objectFit="contain"/>
            </div>
            <div className={style.info}>
                <h1 className={style.name}>{country.name}</h1>
            </div>
        </div>
    )
}

export default Details