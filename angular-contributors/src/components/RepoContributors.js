import React from 'react'
import {Link} from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import Loading from './Loading'

const RepoContributors = ({id1, id2}) => {
    const {data, loading} = useFetch(`https://api.github.com/repos/${id1}/${id2}/contributors`) 
    return (
        <>
        {loading && <Loading />}
        <div className="content">
        {data && data.map((cont, id) => {
            return (
                <>
                
                    <div className="box">
                        <div className="image">
                            <img src={cont.avatar_url} alt="" />
                        </div>
                        <p className="name">{cont.login}</p>
                        <div className="social">
                            <span className="white"
                            ><i className="fab fa-telegram-plane"></i>&nbsp; {cont.contributions}</span
                            >
                        </div>
                        <Link to={`/contributorinfo/${cont.login}`} className="button">Connect</Link>
                    </div>
                </>
            )
            
        })}
        </div>
        </>
    )
}

export default RepoContributors
