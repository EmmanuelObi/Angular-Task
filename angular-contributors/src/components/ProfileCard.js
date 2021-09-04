import React from 'react';
import useFetch from '../Hooks/useFetch';
import Loading from './Loading';
import {Link} from 'react-router-dom'

const ProfileCard = (props) => {
  const {login , contributions} = props.data;
  // const searchField = props.searchField;
  const {data, loading} = useFetch(`https://api.github.com/users/${login}`);

  return (
    <>
      {loading && <Loading />}
      {data && 
          <div className="box">
            <div className="image">
              <img src={data.avatar_url} alt="" />
            </div>
            <p className="name">{data.name}</p>
            <div className="social">
              <span className="red"><i className="far fa-heart"></i>&nbsp;{data.public_repos + data.public_gists}</span>
              <span className="blue"
                ><i className="fab fa-telegram-plane"></i>&nbsp;{contributions}</span
              >
              <span className="green"><i className="fas fa-user"></i>&nbsp;{data.followers}</span>
            </div>
            <Link to={`/contributorinfo/${login}`} className="button">Connect</Link>
          </div>
      }

  </>
  );
};

export default ProfileCard;
