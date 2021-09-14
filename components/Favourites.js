import React from 'react'
import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const Favourites = () => {
    return (
        <TouchableOpacity style={tw`flex flex-row`}>
            <Icon
                   style={tw`p-2 bg-gray-100 rounded-full w-10 mt-4`}
                    name="star"
                    color="black"
                    type="antdesign"/>
            <Text style={tw`mt-7 mx-5  font-semibold`}>CHoose a saved place</Text>
            
            <Icon
                   style={tw`p-2 rounded-full w-10 mt-4 ml-20 `}
                    name="chevron-right"
                    color="gray"
                    type="fontawesome"/>
        </TouchableOpacity>
    )
}

export default Favourites

const styles = StyleSheet.create({})
