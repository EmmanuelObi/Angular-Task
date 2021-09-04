import {useState, useEffect} from 'react';

function Pagination({ data, ShowComponent, pageLimit, dataLimit}) {
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

      // To make page scroll back to top when pagination changes
    useEffect(() => {
      window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);


    const goToNextPage = () => {
       setCurrentPage((page) => page + 1)
    }
  
    const goToPreviousPage =() => {
        setCurrentPage((page) => page - 1)
    }
  
    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
  
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, id) => start + id + 1);
    };
  
    return (
        <div>

    {/* I want to show 6 contributors at a time and 3 repositories at a time as well */}


    <div className="dataContainer">
      {getPaginatedData().map((d, id) => (
        <ShowComponent key={id} data={d} />
      ))}
    </div>

    {/*
        Trying to show the pagination with next and prev buttons
    */}


    <div className="pagination">
      {/* previous button */}
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        prev
      </button>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

      {/* next button */}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
        next
      </button>
    </div>
  </div>
    );
  }

  export default Pagination;