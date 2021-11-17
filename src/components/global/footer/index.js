import style from './style.module.css'
import Image from 'next/image'

export default function Footer () {
    return (
        <footer className={style.footer}>
            <a href="https://github.com/ajid2/nextjs-rest-countries" target="_blank" rel="noopener noreferrer">
                <Image src="/github-logo-light.png" alt="logo" width={40} height={40} />
            </a>
        </footer>
    )
}