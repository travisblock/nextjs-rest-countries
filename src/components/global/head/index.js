import Head from 'next/head'

function Header({...props}) {
    const { title = '' } = props
    return (
        <>
        <Head>
            <title>{ title ? `${title} |` : ''} Next.js Countries</title>
            <meta name="description" content="List all countries using REST API with Next.js" />
            <meta name="keywords" content="next.js, countries, rest, api" />
            <meta name="author" content="Ajid Stark" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600;800&display=swap" rel="stylesheet"/>
        </Head>
        {props.children}
        </>
    )
}

export default Header