import Container from 'components/detail/container';
import Header from 'components/global/head';
import Navbar from 'components/global/nav';

function Country({ country, borders }) {
    return (
        <Header title={`Country Of ${country.name}`}>
            <Navbar/>
            <main>
                <Container country={country} borders={borders}/>
            </main>
        </Header>
    );
}

export default Country;

export async function getStaticPaths() {
    const res = await fetch('https://restcountries.com/v2/all');
    const countries = await res.json();
    const paths = countries.map(country => ({
      params: {
        id: country.alpha3Code
      }
    }));
    return {
      paths,
      fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://restcountries.com/v2/alpha/${params.id}?fields=flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders`);
    const country = await res.json();
    let countryBorderDataArr = [];
    if (country.borders && country.borders.length > 0) {
      const countryBorder = country.borders.join(',');
      const countryBorderRes = await fetch(`https://restcountries.com/v2/alpha?codes=${countryBorder}&fields=name`);
      const countryBorderData = await countryBorderRes.json();
      countryBorderDataArr =  countryBorderData.map(country => country.name);
    }
    return {
      props: {
        country,
        borders: countryBorderDataArr
      }
    }
}