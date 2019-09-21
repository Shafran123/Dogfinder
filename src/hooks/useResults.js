import {useEffect , useState} from 'react';
import dog from '../api/dog';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const serachApi = async (searchTerm) => {
  try{
    const responce = await dog.get('/breeds/list', {
      params: {
        term: searchTerm
      }
    })
      .then(function (response) {
        console.log(response.data.message.length);
        setResults(response.data.message);
      })
  } catch(err) {
     console.log(err);
     setErrorMessage("Some Thing Worng"); 
  }
  
  
      /* fetch('https://dog.ceo/api/breeds/list', {
            method: 'GET',
            term: searchTerm
         })
         .then((response) => response.json())
         .then((responseJson) => {
        //    console.log(responseJson.message.length);
             setResults(responseJson.message);
         }).catch((error) => {
           console.error(error);
       
        }); */
    }
  
    //call search api component render
    useEffect(() => {
      serachApi();
    }, [])
 
    return[serachApi , results , errorMessage];
}
