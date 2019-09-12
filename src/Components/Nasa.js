import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Photos from './Photos';
import Title from './Title';
import Explanation from './Explanation';
import styled from 'styled-components'

const ButtonStyle = styled.button`
    font-size: 5rem;
    margin: 0 auto 2rem auto;
    display: flex;
    border-radius: 5px;
    background: ${props => (props.primary ? "#77aaff" : "#2a2223")};
    color: ${props => (props.primary ? "#2a2223" : "#fff")};
    transition: 0.2s ease-in;
  &:hover {
    background: ${props => (props.primary ? "black" : "#fff")};
    color: ${props => (props.primary ? "#77aaff" : "#2a2223")};
  }
    box-shadow:  1px 1px black,
        2px 2px black,
        3px 3px #77aaff,
        4px 4px #77aaff,
        5px 5px black,
        6px 6px black,
        7px 7px #77aaff,
        8px 8px #77aaff,
        9px 9px black,
        10px 10px black,
        11px 11px #77aaff,
        12px 12px #77aaff;
`;

const DivCon = styled.div`
  font-size: 2rem;
  margin: 2rem auto 2rem auto;
  display: flex;
  justify-content: center;
  text-shadow: 0 1px 0 #bbb,
        0 2px 0 #bbb,
        0 3px 0 #bbb,
        0 4px 0 #bbb,
        0 5px 0 #bbb,
        0 6px 1px #bbb,
        0 0px 3px #bbb,
        0 1px 3px #bbb,
        0 3px 5px #bbb,
        0 5px 10px #bbb,
        0 5px 20px #fff;
`;

function Nasa () {

    const [photo, setPhoto] = useState([])
    const [day, setDay] = useState("01")
    const [month, setMonth] = useState("01")
    const [year, setYear] = useState("1996")

    const ChangeDay = e => {
        if (day === "28"){
            setDay("01")
        } else if (day >= "09" && day <= "28" ){
            const stringToNum = Number(day)
            const add1 = stringToNum + 1
            const numToString = add1.toString().slice(0);
            setDay(numToString)
        } else {
            const stringToNum = Number(day)
            const add1 = stringToNum + 1
            const numToString = 0 + add1.toString()
            setDay(numToString)
        }
    }

    const ChangeMonth = e => {
        if (month === "12") {
            setMonth("01")
        } else if(month >= "09" && month <= "12"){
            const stringToNum = Number(month)
            const add1 = stringToNum + 1
            const numToString = add1.toString().slice(0)
            setMonth(numToString)
        } else {
            const stringToNum = Number(month)
            const add1 = stringToNum + 1
            const numToString = 0 + add1.toString()
            setMonth(numToString)
        }
    }

    const ChangeYear = e => {
        if (year === "2019"){
            setYear("1996")
        } else if(year <= "2019") {
            const stringToNum = Number(year)
            const add1 = stringToNum + 1
            const numToString = add1.toString()
            setYear(numToString)
        }
    }


    useEffect (() => {
        axios 
            .get(`https://api.nasa.gov/planetary/apod?api_key=gGTXarFstcIycfV74tgVHNFvwc277RmEY7eZBTW5&date=${year}-${month}-${day}`)
            .then(response => {
                console.log(response)
                setPhoto(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [day, month, year])
    
    return (
        <div className="container">
            <Title title={photo.title} />
            <Photos imgUrl={photo.url} />
            <DivCon>
                {photo.date}
            </DivCon>
            <Explanation descript={photo.explanation} />
            <ButtonStyle primary onClick={() => ChangeDay()}>Change Day</ButtonStyle>
            <ButtonStyle primary onClick={() => ChangeMonth()}>Change Month</ButtonStyle>
            <ButtonStyle primary onClick={() => ChangeYear()}>Change Year</ButtonStyle>
        </div>
        
    )
}


export default Nasa;