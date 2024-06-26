import { useState, useEffect } from 'react'
import Leaf from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'; // Leaflet CSS for map styling


// Merging default Leaflet icon options with custom marker images
Leaf.Icon.Default.mergeOptions({
    iconRetinaUrl: require('../img/marker.png'),
    iconUrl: require('../img/marker.png'),
    shadowUrl: require('../img/marker.png')
});

// Define interface for country data
interface Country {
    country: string;
    countryInfo: {
        _id: number;
        lat: number;
        long: number;
    };
    active: number;
    recovered: number;
    deaths: number;
}

const WorldMap = () => {
    const [countriesData, setCountriesData] = useState<Country[]>([]);

    // useEffect hook to fetch countries data when component mounts
    useEffect(() => {
        // Function to fetch countries data
        const calToSetEffectCountries = async () => {
            const countriesApiUrl = "https://disease.sh/v3/covid-19/countries";
            const response = await fetch(countriesApiUrl);
            const dataCountry = await response.json();
            setCountriesData(dataCountry);
        };
        // Calling function to fetch countries data
        calToSetEffectCountries();
    }, []); // Dependency array to ensure useEffect runs only once


    // Rendering the WorldMap
    return (
        <div className='p-5'>
            <h1 className="text-2xl font-bold text-[#0c0f06] mb-5">
                Corona Cases World Map
            </h1>
            <div className='h-[200px] md:h-[450px] border'>
                <MapContainer center={[20.593683, 78.962883]} zoom={4} style={{ height: "100%" }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
                    {countriesData?.map((country) => (
                        <Marker
                            key={country.countryInfo._id}
                            position={[country.countryInfo.lat, country.countryInfo.long]}
                        >
                            <Popup>
                                <div>
                                    <h2>{country.country}</h2>
                                    <p>
                                        Active Cases: {country.active} <br />
                                        Recovered Cases: {country.recovered} <br />
                                        Deaths: {country.deaths}
                                    </p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    )
}

export default WorldMap
