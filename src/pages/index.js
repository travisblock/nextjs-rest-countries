import Header from "components/global/head";
import Countries from "components/home/countries";
import Navbar from "components/global/nav";
import Filter from "components/home/filter";

export default function Home({ countries }) {
  return (
    <Header>
      <Navbar/>
      <main>
        <Filter/>
        <Countries countries={countries}/>
      </main>
    </Header>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://restcountries.com/v2/all')
  const countries = await res.json()
  return {
      props: {
          countries
      }
  }
}