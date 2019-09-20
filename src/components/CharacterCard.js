import React from "react";


// import styled from "styled-components";



const CharacterCard = props => {
  return (
    <div key={props.id}>
      <h1>{props.name}</h1>
    </div>
  )
}
export default CharacterCard


