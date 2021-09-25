import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
export const Weather = ()=>{
    const currentWeather= useSelector(state=> state.weatherReducer.currentWeather)
    if(currentWeather === null){
        return null;
    }

    return  <Container>
        <div>
            <img src={"https:"+currentWeather.icon_url} />
        </div>
        <div>
            <Temprature>{currentWeather.temp_c}°C</Temprature>
            <Location>{currentWeather.location}</Location>
        </div>
    </Container>

}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Temprature = styled.div`
    font-size: 20px;
    color: white;
    line-height: 20px;
`

const Location = styled.div`
    font-size: 12px;
    color: white;`