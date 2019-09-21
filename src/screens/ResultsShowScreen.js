import React ,{useState , useEffect} from 'react';
import {View , Text , StyleSheet , FlatList , Image , Button} from 'react-native';

import axios from 'axios';

const ResultShowScreen = ({navigation}) => {
    const [results , setResults] = useState(null);
    const[subreeds , setSubbreeds] = useState('');
    const[subreedsimage , setSubbreedsimage] = useState('');
    const name =  navigation.getParam('name');

  //  console.log(results);

    const getResult = async (name) => {
     const responce = await axios.get(`https://dog.ceo/api/breed/${name}/images/random`);
     const breedResponce  = await axios.get(`https://dog.ceo/api/breed/${name}/list`);
   //  const breedImageResponce = await axios.get(`https://dog.ceo/api/breed/${name}/${item}/images`);
     //console.log(responce.data)
        setResults(responce.data);
        setSubbreeds(breedResponce.data);
    //    setSubbreedsimage(breedImageResponce.data);
     
    }

      
    
    console.log(results)
    console.log(subreeds.message)
    //console.log(subreedsimage.message)
 
    useEffect(() =>{
        getResult(name);
       
    },[]);

    ListEmpty = () => {
        return (
          //View to show when list is empty
          <View>
            <Text style={styles.warning}>No Sub-Breed Found!</Text>
          </View>
        );
      };
    

    if(!results) {
        return null;
    }

    if(!subreeds){
        return setSubbreeds('no');
         
    }

 //  console.log(name);
    return(
        <View style={styles.container}>
            <View style={styles.fixToText}>
                 <Text style={styles.name}>{name}</Text>
                <Button style={styles.btnRefresh}
                title='Refresh'
                onPress={() => getResult(name)}
                
                />
                
            
            </View>
          
            {/* <Text>{results.message}</Text> */}
            <Image style={styles.img} source={{uri : results.message}} />
            <Text style={styles.namesub}>Sub Breeds</Text>
            <FlatList
                data={subreeds.message}
                  keyExtractor={(subreeds) => subreeds}
                  renderItem={({ item }) => {
                      return ( 

                          <Text style={styles.sublist}>{item}</Text>
                    
                      )
                  }}
                  ListEmptyComponent={this.ListEmpty}
                  
            />
        </View>
    )

    
}


const styles = StyleSheet.create({
   container:{
    margin : 15,
    flex :1
   },
   
    name:{
    
    fontSize: 28,
    fontWeight : "bold",
    textTransform: 'capitalize'
    
   },
   namesub:{
    marginTop:10,
    fontSize: 28,
    fontWeight : "bold",
    textTransform: 'capitalize'
    
   },
   
    img: {
        
        marginTop : 20,
        alignSelf : 'center',
        borderRadius:20,
        height :400,
        width : 350,

    },
    list:{
        fontSize: 16,
        lineHeight: 40,
        textTransform: 'capitalize'
    },
    warning:{
        fontSize: 20,
        lineHeight: 40,
        textTransform: 'capitalize',
        textAlign : "center"
    },
    sublist:{
        fontSize: 20,
        lineHeight: 40,
        textTransform: 'capitalize',
        

    },
    fixToText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnRefresh:{
    margin : 15,
    fontSize: 16
    }
  });

  export default ResultShowScreen;