import { useState, useEffect} from "react";
import axios from 'axios';
import Navbar from "./components/Navbar.js";
import SearchContributors from "./components/SearchContributors.js";

function App() {

  const [searchField, setSearchField] = useState("")
  let [contributors, setContributors] = useState([])
  let [contributorInfo, setcontributorInfo ] = useState([])
  let [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false) 
  const [currentPage, setcurrentPage] = useState(1)
  const [contributorsPerPage] = useState(12)
 

  
  useEffect(() => {

  
      const fetchData = async () => {
        setLoading(true)
        let contributorUrl;
        let userUrl;
        let i = 1;
        const repoUrl = 'https://api.github.com/orgs/angular/repos'
        const repoResponse = await axios.get(repoUrl)

        for (i; i < repoResponse.data.length; i++) {
          contributorUrl = `https://api.github.com/repos/${repoResponse.data[i].full_name}/contributors`
          const contributorResponse = await axios.get(contributorUrl)
         
          for (let j = 0; j < contributorResponse.data.length; j++) {
            setContributors(c => [...c, contributorResponse.data[j]])
          }
        }
        // Remove Duplicate data from contributors array
        setContributors(c => Array.from(new Set(c.map(cList => cList.id))).map(id => {
          return c.find(cList => cList.id === id)
        }))

        let k = 0;
        do {
           userUrl = `https://api.github.com/users/${contributors[k].['login']}`
            const userResponse = await axios.get(userUrl)
            setcontributorInfo(c => [...c,userResponse.data])
          k++
        }
        while (k < contributors.length)
        
        setRepos(repoResponse.data)
        
        setLoading(false)
      }

      fetchData()
     
  },[])
  
  // Get current contributors (pagination)
  const indexOfLastContributor = currentPage * contributorsPerPage;
  const indexOfFirstContributor = indexOfLastContributor - contributorsPerPage;
  let currentContributor = contributorInfo.slice(indexOfFirstContributor, indexOfLastContributor);
  const totalContributors = contributorInfo.length;

  
  
  // handle search bar
  
  const handleChange = (e) => {
    e.preventDefault()
    setSearchField(e.target.value)
  }
  if (searchField.length > 0) {
    currentContributor = currentContributor.filter((contributor) => {
      return contributor.name.toLowerCase().match(searchField)
    })
  }
  

// Change Page (pagination)
  const paginate = (pageNumber) => setcurrentPage(pageNumber)

  return (
    <div className="App">
      <Navbar searchField={searchField} handleChange={handleChange} />
      <SearchContributors contributors={contributors} setContributorInfo={setcontributorInfo} contributorInfo={contributorInfo} totalContributors={totalContributors} contributorsPerPage={contributorsPerPage} currentContributor={currentContributor} loading={loading} searchField={searchField} setSearchField={setSearchField} paginate={paginate} handleChange={handleChange}  />
    </div>
  );
}
export default App;
