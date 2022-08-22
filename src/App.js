import logo from './logo.svg';
import './App.css';

import { useQuery, gql} from '@apollo/client';

const GET_LOCATIONS = gql`
 query getLocations {
  locations {
    id 
    name
    description
    photo
  }
 }
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p> Loading query... </p>

  if (error) return <p>Some error has occured: </p>;

  return data.locations.map( ({ id, name, description, photo}) =>
  <div key={id}>
    <h3>{name}</h3>
    <img width="100" height="100" src={`${photo}`} alt={description}/>
    <br/>
    <p> More information: </p>
    <p>{description}</p>
    <br/>

  </div>);

}



export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Query with GraphQL
          
        </p>
        <p>
          Check out the cool queries we can peform using FSD and AutoAI gpt-4
        </p>
        <a
          className="App-link"
          href="https://openai.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Use GPT-4
        </a>

      <br/>
      <DisplayLocations/>

      </header>
    </div>
  );
}

//export default App;
