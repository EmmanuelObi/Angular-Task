import Pagination from "./Pagination";
import ProfileCard from "./ProfileCard";
import Loading from "./Loading";

function SearchContributors({
  contributors,
  searchField,
  handleChange,
  loading,
  contributorsPerPage,
  currentContributor,
  totalContributors,
  paginate,
  setContributorInfo,
}) {
  // const sortByFollowers = () => {
  //   currentContributor = currentContributor.sort((a, b) => {
  //     return b.followers - a.followers;
  //   });
  // };
  const sortByPublications = () => {
    currentContributor = currentContributor.sort((a, b) => {
      return (
        b.public_repos + b.public_gists - (a.public_repos + a.public_gists)
      );
    });
  };
  return (
    <>
      <div className="container-fluid empty bg-black"></div>
      <div className="container-fluid empty bg-blue"></div>
      <div className="container-fluid search">
        <div className="container search">
          <form className="form-inline mx-auto">
            <input
              className="form-control mx-auto"
              type="text"
              placeholder="Search"
              value={searchField}
              onChange={handleChange}
              aria-label="Search"
            />
          </form>
          <div className="dropdown text-center">
            <a
              className="dropdown-toggle"
              href="!#"
              id="Dropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Filters
            </a>
            <div className="dropdown-menu" aria-labelledby="Dropdown">
              <a
                className="dropdown-item"
                href="!#"
                onClick={() =>
                  setContributorInfo((a, b) => b.followers - a.followers)
                }
              >
                Most Followers
              </a>
              <a
                className="dropdown-item"
                href="!#"
                onClick={sortByPublications}
              >
                Most Publications
              </a>
            </div>
          </div>

          <div className="results">
            {loading ? (
              <Loading />
            ) : (
              currentContributor.map((contributor, key) => {
                return (
                  <ProfileCard
                    contributor={contributor}
                    contributors={contributors}
                    key={key}
                  />
                );
              })
            )}
            <Pagination
              contributorsPerPage={contributorsPerPage}
              totalContributors={totalContributors}
              paginate={paginate}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchContributors;
