import React from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "1335",
        title: "Get A Ride",
        image: require('../assets/carUber.png'),
        screen: "MapScreen",
    },
    {
        id: "435461",
        title: "Order Food",
        image: require('../assets/foodUber.png'),
        screen: "EatScreen",
    },
]

const NavOptions = () => {

     const navigation = useNavigation()

    return (
       <FlatList 
       data={data}
       horizontal={true}
       keyExtractor={(item) => item.id}
       renderItem={({item}) => (
           <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-50`}
            >
               <View >
                   <Image source={item.image}
                    style={{width: 140, height: 140, resizeMode: 'contain'}}
                    />
                   <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                   <Icon
                   style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright"
                    color="white"
                    type="antdesign"/>
                </View>
           </TouchableOpacity>
       )}

       />
    )
}

export default NavOptions