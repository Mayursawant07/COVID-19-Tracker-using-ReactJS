import React, {useState,useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries  } from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchCountries, setFetchedCountries] = useState ([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
    }, [setFetchedCountries])

    return (
        <FormControl className={StyleSheet.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
                <option value=''>Global</option>
                {fetchCountries.map((country,i) => <option key={i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;