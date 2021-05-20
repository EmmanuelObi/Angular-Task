const Pagination = ({
  contributorsPerPage,
  totalContributors,
  paginate,
  loading,
}) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalContributors / contributorsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav aria-label="Page navigation" className="navigation">
        <ul className="pagination">
          {loading ? (
            <h6>This might take a minute....</h6>
          ) : (
            pageNumbers.map((number) => {
              return (
                <li className="page-item" key={number}>
                  <a
                    onClick={() => paginate(number)}
                    className="page-link"
                    href="!#"
                  >
                    {number}
                  </a>
                </li>
              );
            })
          )}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
