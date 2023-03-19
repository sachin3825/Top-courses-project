function Filter({ filterData, setCategory, category }) {
  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div
      className={`w-11/12 flex flex-wrap space-x-4 justify-center mx-auto py-4`}
    >
      {filterData.map((data) => {
        return (
          <button
            onClick={() => filterHandler(data.title)}
            className={`bg-bgDark text-white font-medium rounded-md px-2 py-1 hover:bg-opacity-50 border-2
              ${
                category === data.title
                  ? "bg-opacity-60 border-white"
                  : "bg-opacity-40 border-transparent"
              } `}
            key={data.id}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
}
export default Filter;
