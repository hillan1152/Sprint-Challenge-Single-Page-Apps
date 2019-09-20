import React from "react";
import Header from "./components/Header.js";
import { Route } from "react-router-dom";

import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";
import FormikSearchForm from "./components/SearchForm";

export default function App() {
  return (
    <main>
      <div>
         <Header />
         <FormikSearchForm/>
         <CharacterList/>
      </div>

    <Route exact path='/' component={WelcomePage}/>
    <Route exact path="/character-list" component={CharacterList}/>

    </main>
  );
}
