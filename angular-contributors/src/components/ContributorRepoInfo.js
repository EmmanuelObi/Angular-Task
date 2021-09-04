import React from 'react'
// import {Link} from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import Loading from './Loading'
import Pagination from './Pagination'
import ContributorRepos from './ContributorRepos'

const ContributorRepoInfo = ({id}) => {

    const {data: repos, loading} = useFetch(`https://api.github.com/users/${id}/repos`)

    return (
        <>
            {loading && <Loading />}
            { repos &&
            <Pagination
                data={repos}
                ShowComponent={ContributorRepos}
                pageLimit={5}
                dataLimit={3}
              />
}
        </>
    )
}

export default ContributorRepoInfo