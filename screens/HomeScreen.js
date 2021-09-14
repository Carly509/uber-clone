import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice';
import Favourites from '../components/Favourites';
import Map from '../components/Map'
import { Icon } from 'react-native-elements/dist/icons/Icon';

const HomeScreen = () => {

    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
            <TouchableOpacity
                // onPress={() => navigation.navigate('HomeScreen')}
             style={tw`absolute z-50 p-3`}>
                <Icon name="menu" size={35} />
            </TouchableOpacity>
                <TouchableOpacity style={[tw`h-20 rounded-xl my-5 mt-10 flex flex-row`,{backgroundColor: 'rgb(33,69,48)'}]}>
                    <View style={tw`flex-1 justify-center ml-5`}>
                        <Text style={tw`text-white my-1 text-lg`}>Explore local cuisines</Text>
                        <Text style={tw`text-white`}>Eat local</Text>
                    </View>
                    <Image 
                    style={{
                        width: 80,
                        height: 80,
                        resizeMode: 'contain',
                        marginTop: 2,
                        borderRadius: 10,
                    }}
                    source={require('../assets/localCuisine.png')}
                    />
                </TouchableOpacity>
                 <NavOptions />
                <GooglePlacesAutocomplete 
                placeholder='Where To?'
                styles={{
                    container: {
                        flex: 0,
                        paddingTop: 30,
                    },
                    textInput: {
                        fontSize: 18,
                        backgroundColor: 'rgb(237, 237, 237)',
                        fontWeight: 'bold',
                    }, 
                }}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description,
                    }))
                    dispatch(setDestination(null))
                  }}
                  fetchDetails={true}
                enablePoweredByContainer={false}
                minLength={2}
                returnKeyType={'search'}
                query={{
                    key: GOOGLE_MAPS_KEY,
                    language: 'en',
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
                />
                <Favourites />
                <View style={tw `h-1/3`}>
                    <Text style={tw `text-lg font-semibold my-3`}>Around You</Text>
                    <Map />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
