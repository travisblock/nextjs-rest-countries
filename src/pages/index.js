import Header from "components/global/head";
import Countries from "components/home/countries";
import Navbar from "components/global/nav";
import Filter from "components/home/filter";
import Footer from "components/global/footer";

export default function Home({ countries }) {
  return (
    <Header>
      <Navbar/>
      <main>
        <Filter/>
        <Countries countries={countries}/>
      </main>
      <Footer/>
    </Header>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://restcountries.com/v2/all?fields=flag,name,region,population,capital,alpha3Code')
  const countries = await res.json()
  return {
      props: {
          countries
      }
  }
}