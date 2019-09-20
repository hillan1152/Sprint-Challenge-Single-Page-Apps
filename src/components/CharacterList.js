import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

import styled from "styled-components";

const NameTitle = styled.h1`
  color: red;
  font-weight: bold;
  font-size: 30px;

`;


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array! 
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacters(res.data.results);
        console.log(res.data.results);
      })
      .catch(error => {
        console.log("There is an error", error)
      })

  }, []);

  return (
    <section className="character-list">
      {characters.map(character => {
        return <NameTitle>{character.name} </NameTitle>
      })}
    </section>
  );
}
