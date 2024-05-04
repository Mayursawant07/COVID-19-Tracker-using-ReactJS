import React from 'react';

import {Cards, Charts, CountryPicker} from './Components';
import style from './App.module.css';
import { fetchData } from './api';

import cornaImage from './images/image.png';

class App extends React.Component{
    state = {
        data : {},
        country: '',
    }

    async componentDidMount(){
        const fetchData = await fetchData();

        this.setState({data : fetchData});
    }

    handleCountryChange = async (country) => {
        const fetchData = await fetchData(country);
        
        this.setState({data : fetchData, country: country});
}

    render(){
        const {data, country} = this.state;

        return(
            <div className={style.container}>
                <img className={StyleSheet.image} src={cornaImage} alt='Covid-19'/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange} />
                <Charts data = {data} country = {country}/>
            </div>
        )
    }
}

export default App;