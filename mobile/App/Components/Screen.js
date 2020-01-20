// react component - show amount of content to user
// insde different files in app


// Part 1: import libraries
import React from 'react'; 
    // how different components work together
    // import whole React library
import { Text, StyleSheet } from 'react-native';
    // knows how to use info from components and show to user
    // curly braces - importing just a few small parts out of a given library



// Part 2: create compoent itself: returns JSX
    // Funciton returning some amout of JSX (looks like HTML)

const ExampleComponents = () => {
    return <Text style={styles.textStyle}>This is a component</Text>;

}




// Part 3: Create Stlesheet (layout)

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,

    }
})




// Part 4: export component we created elseware in file
export default ExampleComponents;

