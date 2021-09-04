import React from 'react'
import ProfileCard from './ProfileCard'
import Loading from './Loading'
import Pagination from './Pagination'

const SearchContributors = ({loading, contributors, searchField, handleChange}) => {

  return (
    <div>
      {/* <div className="container-fluid empty bg-black"></div>
    <div className="container-fluid empty bg-blue"></div> */}
      <div className="container-fluid search">
      <div className="container search">
        <form className="form-inline mx-auto">
          <input
            className="form-control mx-auto"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchField}
            onChange={handleChange}
          />
        </form>
        <div className="dropdown text-center">
          <a
            className="dropdown-toggle"
            href="/"
            id="Dropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filters
          </a>
          <div className="dropdown-menu" aria-labelledby="Dropdown">
            <a className="dropdown-item" href="/">Most Contributions</a>
            <a className="dropdown-item" href="/">Most Followers</a>
            <a className="dropdown-item" href="/">Most Publications</a>
          </div>
        </div>
        <div className="results">
        {loading && <Loading />}
        {contributors && 
        <Pagination
                data={contributors}
                ShowComponent={ProfileCard}
                pageLimit={3}
                dataLimit={9}
                searchField={searchField}
              />
        }
        </div>
      </div>
    </div>
    </div>
  )
}

export default SearchContributors

