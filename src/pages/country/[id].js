import Container from 'components/detail/container';
import Header from 'components/global/head';
import Navbar from 'components/global/nav';

function Country({ country }) {
    return (
        <Header title={`Country Of ${country.name}`}>
            <Navbar/>
            <main>
                <Container country={country}/>
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
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://restcountries.com/v2/alpha/${params.id}`);
    const country = await res.json();
    return {
      props: {
        country
      }
    }
}