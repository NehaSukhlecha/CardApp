import React from 'react';
import { TouchableOpacity, View, Image, Text, Switch } from 'react-native';
import AppColor from '../../utills/AppColors';
import styles from "./styles";

export default CardComponent = (props) => {
    return (
      <TouchableOpacity style={styles.container}>
        <Image style={styles.logoImage}
          source={props.imageSource} />

        <View style={styles.subContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subTitle}>{props.subTitle}</Text>
        </View>

        <View style={styles.switch}>
          <Switch 
            thumbColor={AppColor.themeColor}
            ios_backgroundColor={AppColor.lightGrey}
            style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
            // onValueChange={toggleSwitch}
            // value={isEnabled}
          />
        </View>
      </TouchableOpacity>
    );
};
