                   //Imports
//-------------------------------------------------//
import style from "./Pagination.module.css";

                   //Component
//-------------------------------------------------//
const Pagination = ({ setPage, page, maxPages }) => {
  const functionGoToPage = (numberToPage) => {
    setPage(numberToPage);
  };
  //Este codigo genera la serie e botones que se muestra en el home
  const buttons = Array.from({ length: maxPages }, (_, index) => index + 1);

  const functionNext = () => {
    setPage(page + 1);
  };
  const functionPrev = () => {
    setPage(page - 1);
  };

  return (
    <div className={style.divButtons}>
      <button
        className={style.button}
        onClick={functionPrev}
        disabled={page === 1 || page < 1}
      >
        Previous Page
      </button>
      {buttons.map((numberToPage) => (
        <button
          key={numberToPage}
          className={`${style.buttons} ${
            numberToPage === page ? style.active : ""
          }`}
          onClick={() => functionGoToPage(numberToPage)}
        >
          {numberToPage}
        </button>
      ))}
      <button
        className={style.button}
        onClick={functionNext}
        disabled={page === maxPages}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;