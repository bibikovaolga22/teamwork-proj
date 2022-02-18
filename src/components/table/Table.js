import './Table.css';
import Moment from 'react-moment';


const Table = ({ filteredPeople }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Planet Name</th>
        </tr>
      </thead>

      <tbody>
        {filteredPeople.map((person, index) => {
          return <tr key={index} >
            <td>{person.name}</td>
            <td>{person.height}</td>
            <td>{person.mass}</td>
            <td><Moment format="ddd, MMM DD YYYY, HH:mm:ss UTC">{person.created}</Moment></td>
            <td><Moment format="ddd, MMM DD YYYY, HH:mm:ss UTC">{person.edited}</Moment></td>
            <td>{person.planetName}</td>
          </tr>
        })}
      </tbody>
    </table>
  );
}

export default Table;