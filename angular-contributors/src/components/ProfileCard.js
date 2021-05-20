const ProfileCard = ({ contributor, contributors, key, check }) => {
  return (
    <>
      <div className="box">
        <div className="image">
          <img src={contributor.avatar_url} alt="" />
        </div>
        <p className="name">{contributor.name}</p>
        <div className="social">
          <span className="red">
            <i className="far fa-heart"></i>&nbsp;
            {}
          </span>
          <span className="blue">
            <i className="fab fa-telegram-plane"></i>&nbsp;
            {contributor.public_repos + contributor.public_gists}
          </span>
          <span className="green">
            <i className="fas fa-user"></i>&nbsp; {contributor.followers}
          </span>
        </div>
        <a href="!#" className="button">
          Connect
        </a>
      </div>
    </>
  );
};

export default ProfileCard;
