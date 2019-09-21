import { useEffect, useState } from 'react';
import dog from '../api/dog';
import axios from 'axios'
import _ from 'lodash';

export default () => {
  const [results, setResults] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const serachApi = async (searchTerm) => {
      try {
        const responce = await dog.get('/breeds/list', {
          params: {
            term: searchTerm
          }
        })
          .then(function (response) {
            console.log(response.data.message.length);
            setResults(response.data.message);
          })
      } catch (err) {
        console.log(err);
        setErrorMessage("Some Thing Worng");
      }

  }
  const serachFunction = (term) =>{
    const newData = results.filter( (results) =>{
       const textdata = term.toLowerCase();
       
       return results.indexOf(textdata) > -1;
    })

    console.log(newData);
    setResults(newData);
    
  }




  useEffect(() => {
    serachApi();
  }, [])

  return [serachApi, results, errorMessage , serachFunction];
}
