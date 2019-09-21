import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const ResultList = ({ title, results, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={results}
                keyExtractor={(results) => results}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultsShow' , {name : item})}>
                        <Text style={styles.list}>{item}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
  
        margin: 15

    },
    title: {

        fontSize: 32,
        fontWeight: 'bold'
    },
    list: {
        fontSize: 16,
        lineHeight: 40,
        textTransform: 'capitalize'

    }
});

export default withNavigation(ResultList);