import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SerachBar from '../Components/SerachBar'; 
import useResult from '../hooks/useResults';
import ResultList from '../Components/ResultList';
import _ from 'lodash';



const SearchScreen = () => {


  const [term, setTerm] = useState('');
  const [serachApi , results ,errorMessage , serachFunction ] = useResult();


  const getResult = () =>{
    return results;
  }
  
  return (

    <View>
      <SerachBar
        term={term}
        onTermChange={(newTerm) => 
          {setTerm(newTerm);
            serachFunction(term)
          }}
        onTermSubmit={() => serachApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length}</Text> */}
      <ResultList 
     
      results={getResult()} 
      title="Breeds"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchScreen;
