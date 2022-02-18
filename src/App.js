import { useState, useEffect } from 'react';
import Table from './components/table/Table';
import './App.css';
import LoadData from './components/loadData/LoadData';
import { motion } from "framer-motion";
import { animationOne, transitionOne } from "./animation";
import bg from "./components/images/star-wars.jpg";


function App() {
  const [searchValue, setSearchValue] = useState("");
  const [people, setPeople] = useState([]);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);

  }

  useEffect(() => {

    const fetchData = async () => {
      const baseURL = `https://swapi.dev/api/people/?page=`;
      let page = 1;
      let result = [];
      let finalResult = [];
      let data = {};

      do {
        try {
          const resp = await fetch(`${baseURL}${page}`);
          data = await resp.json();
          result = data.results;
          page++;

          for (let value of result) {
            const planet = value.homeworld;
            const resp2 = await fetch(`${planet}`);
            const planetObj = await resp2.json();
            value.planetName = planetObj.name;
          }

          finalResult.push(...result);

        } catch (err) {

          console.log(`Error${err}`);
        }

      } while (data.next !== null)

      setPeople(finalResult);

    }


    fetchData();


  }, []);

  const isLoaded = people.length > 0;

  const filteredPeople = people.filter((person) => {
    return person.name.includes(searchValue.charAt(0).toUpperCase() + searchValue.slice(1));
  })

  return (

    <motion.div className='app'
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transitionOne}
    >

      < header style={{
        background: `url(${bg}) `,
      }}>
        <div className="search-by-name">
          < input type="text" value={searchValue} onChange={handleSearch} placeholder="Type name..." />
        </div >
      </header>

      {isLoaded ? <Table filteredPeople={filteredPeople} /> : <LoadData />}

    </motion.div >

  );
}

export default App;
