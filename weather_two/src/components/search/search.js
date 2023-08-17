import { useCallback, useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL } from "../../api";
import { geoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    //current weater comp.

    //forcast weaterh comp.

    //Loading and fetching the data from the API
    const loadOptions = (inputValue) => {
        //fetch the cities data from GeoDP Api
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
        ) //this more advance code, brought to you by the internet. 
            .then((response) => response.json())
            //creating an array of objects with value and label
            .then((response) => {
                return{
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            })
            .catch (err => console.error(err));
};

//change the change of search data
const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
};

//the big bad thingy
return (
    <AsyncPaginate
        //search bar infomation
        placeholder="Enter City"
        debounceTimeout={600} //ms Debunks
        value={search}
        onChange={handleOnChange}

        //loading options code
        loadOptions={loadOptions}
    />
)
 }

export default Search;