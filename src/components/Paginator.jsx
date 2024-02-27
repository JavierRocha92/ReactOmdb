/* eslint-disable react/prop-types */

export const Paginator = ({ page, fetchData }) => {
  const handleClick = (order) => {
    if (order === "previous" && page > 1) {
      fetchData(page - 1);
    }
    if (order === "next") {
      fetchData(page + 1);
    }
  };
  return (
    <div className="paginator p-4">
      <button
        onClick={() => handleClick("previous")}
        className="btn bg-primary text-light p-3 w-25"
      >
        Anterior
      </button>
      <h6 className="page">{(page - 2 > 0) && page - 2}</h6>
      <h3 className="page">{(page - 1 > 0) && page - 1}</h3>
      <h1 className="page text-danger">{page}</h1>
      <h3 className="page">{page + 1}</h3>
      <h6 className="page">{page + 2}</h6>
      <button
        onClick={() => handleClick("next")}
        className="btn bg-danger text-light p-3 w-25"
      >
        Siguiente
      </button>
    </div>
  );
};
