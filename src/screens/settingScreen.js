import React from 'react';
import {View, Text, Share, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#F0F8FF', paddingTop: 10}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#FF4500', fontSize: 20, fontWeight: 'bold'}}>
          Setting
        </Text>
      </View>

      <View style={{flex: 1, MarginLeft: 10}}>
        <TouchableOpacity
          style={styles.item}
          onPress={() =>
            Share.share({
              message: 'Microwave Recipe Handbook',
            })
          }>
          <Ionicons name="share-social-sharp" color="black" size={23} />
          <Text style={{paddingLeft: 10, fontSize: 20}}>Share App</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons name="star-half-sharp" color="black" size={23} />
          <Text style={{paddingLeft: 10, fontSize: 20}}>Rate Our App</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={()=>Linking.openURL("http://play.google.com/store/apps/details?id=in.bansalindia.microwaveovenrecipeshindi")}>
          <Ionicons name="apps-sharp" color="black" size={23} />
          <Text style={{paddingLeft: 10, fontSize: 20}}>
            Many More Application
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 23,
    flexDirection: 'row',
  },
});
export default SettingScreen;
