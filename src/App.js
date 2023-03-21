
import './App.css';
import Countries from './component/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}



// function LoadCountries() {
//   const [countries,setCountries]=useState([]);
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=> setCountries(data))
//   },[])
//   console.log(countries[0])
//   return(
//       <div>
//         <h1>Visiting Every Countries in the world</h1>
//         <h3>Available Countries: {countries.length}</h3> 
      
//         {
//           countries.map(country => <Country name={country.name.common} capital={country.capital}></Country>)
//         }
//       </div>
//     )
// }

// function Country(props){

//   return (
//       <div>
//         <h2>Name: {props.name}</h2>
//         <h3>Capital: {props.capital}</h3>
//       </div>
//     )
// }

export default App;
