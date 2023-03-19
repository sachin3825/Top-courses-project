import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spiner from "./Components/Spiner";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  // API call using useEffect
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("something went wrong");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col min-h-screen bg-bgDark2'>
      <Navbar />
      <Filter
        filterData={filterData}
        category={category}
        setCategory={setCategory}
      />
      <div className='w-11/12 flex-wrap max-2-[1200px] mx-auto flex justify-center items-center min-h-[50vh]'>
        {loading ? <Spiner /> : <Cards courses={courses} category={category} />}
      </div>
    </div>
  );
};

export default App;
