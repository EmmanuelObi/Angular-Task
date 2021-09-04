import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Contributor from './components/Contributor';
import RepoDetails from './components/RepoDetails';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SearchContributors from './components/SearchContributors';
import useFetch from './Hooks/useFetch';

const App = () => {
  // const {data: repos, loading} = useFetch('https://api.github.com/users/angular/repos');

  let {data: contributors, loading} = useFetch('https://api.github.com/repos/angular/angular/contributors');
  const [searchField, setSearchField] = useState(""); 

  const handleChange = (e) => {
    e.preventDefault()
    setSearchField(e.target.value)
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <SearchContributors loading= {loading} contributors={contributors} searchField={searchField} handleChange={handleChange}/>
          </Route>
          <Route path="/contributorinfo/:id">
            <Contributor />
          </Route>
          <Route path="/repositorydetails/:id1/:id2">
            <RepoDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

