import Document, { Html, Head, Main, NextScript } from 'next/document'

function MyDocument(props) {
  return (
    <Html>
        <Head />
        <body className="light">
          <Main />
          <NextScript />
        </body>
    </Html>
  )
}

export async function getInitialProps(ctx) {
  const initialProps = await Document.getInitialProps(ctx)
  return { ...initialProps }
}

export default MyDocument