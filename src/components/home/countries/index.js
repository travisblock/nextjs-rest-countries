import Card from "components/home/card";
import { useAppContext } from "context";
import { useEffect, useState } from "react";
import style from "./style.module.css"

function Countries({ countries }) {
    const [results, setResults] = useState(countries);
    const { state } = useAppContext();

    useEffect(() => {

        function filterCountries() {
            const { filter: search } = state;
            const filteredCountries = countries.filter(country => {
                return country.name.toLowerCase().includes(search.toLowerCase());
            });
            setResults(filteredCountries);
        }

        function filterCountriesByRegion() {
            const { filter: region } = state;
            const filteredCountries = countries.filter(country => {
                return region != '' ? country.region.toLowerCase() === region.toLowerCase() : true;
            });
            setResults(filteredCountries);
        }
        
        if (state.type === "name") {
            filterCountries();
        } else if (state.type === "region") {
            filterCountriesByRegion();
        }
    }, [state.filter]);

    return (
        <section className={style.countries}>
            {results.map(country => (
                <Card key={country.name} country={country} />
            ))}
        </section>
    )
}

export default Countries;