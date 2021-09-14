import React from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native';
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';

const data = [
    {
        id: "1335",
        title: "Ride",
        image: require('../assets/ride.png'),
        screen: "MapScreen",
    },
    {
        id: "435461",
        title: "Food",
        image: require('../assets/food.png'),
        screen: "EatScreen",
    },
    {
        id: "4354",
        title: "Reserve",
        image: require('../assets/reserve.png'),
        screen: "EatScreen",
    },
    {
        id: "4461",
        title: "Vaccine",
        image: require('../assets/vaccine.png'),
        screen: "EatScreen",
    },
    {
        id: "35461",
        title: "Hourly",
        image: require('../assets/hourly.png'),
        screen: "EatScreen",
    },
    {
        id: "461",
        title: "Grocery",
        image: require('../assets/grocery.png'),
        screen: "EatScreen",
    },
    {
        id: "43561",
        title: "Package",
        image: require('../assets/package.png'),
        screen: "EatScreen",
    },
    {
        id: "3541",
        title: "Transit",
        image: require('../assets/transit.png'),
        screen: "EatScreen",
    },
]

const NavOptions = () => {

     const navigation = useNavigation()
     const origin = useSelector(selectOrigin)

    return (
       <FlatList 
       data={data}
       keyExtractor={(item) => item.id}
       numColumns={Math.ceil(data.length / 2)}
       showsVerticalScrollIndicator={false}
       showsHorizontalScrollIndicator={false}
       renderItem={({item}) => (
        <View>
           <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={[tw`p-2 pl-4 pb-8 pt-4 m-1 w-20 h-20 rounded-xl`,{backgroundColor: 'rgb(238, 238, 238)'}]}
            >
            {/* if location non selected put opacity or disable both next buttons */}
            {/* <View style={tw`${!origin && 'opacity-20'}`}> */}
               <View >
                   <Image
                    source={item.image}
                    style={{width: 55, height: 55, resizeMode: 'contain'}}
                    />
                   {/* <Icon
                   style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright"
                    color="white"
                    type="antdesign"/> */}
                </View>
           </TouchableOpacity>
                    <Text style={tw` text-center mb-3`}>{item.title}</Text>
             </View>
       )}
       />
    )
}

export default NavOptions
