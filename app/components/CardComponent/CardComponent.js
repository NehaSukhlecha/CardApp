import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from "./styles";

export default CardComponent = (props) => {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/aspire-logo.png')} 
            style={styles.logoImage}/>
        <Text style={styles.nameText}>Mark Henry</Text>
        <View style={styles.cardContainer}>
          <Text style={styles.cardText}>4242   4242   4242   4242</Text>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.cardText}>Thru: 12/20</Text>
          <Text style={styles.cardText}>    </Text>
          <Text style={styles.cardText}>CVV: 456</Text>
        </View>
        <Image source={require('../../assets/visa-logo.png')} 
            style={styles.visalogo}/>
      </View>
    );
};
