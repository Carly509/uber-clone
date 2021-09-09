import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw `bg-white flex-1`}>
            <Text style={tw`text-center p-5 text-xl`}>
                Good morning user
            </Text>
            <View style={tw `border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where to?'
                        styles={toInputBoxStyles}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }))
                            navigation.navigate('RideOptionsCard')
                            // dispatch(setDestination(null))
                          }}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        returnKeyType={'search'}
                        minLength={2}
                        query={{
                            key: GOOGLE_MAPS_KEY,
                            language: 'en',
                        }}
                        debounce={400}
                    />
                </View>
            </View>
        </SafeAreaView >
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#E2E2E4',
        borderRadius: 0,
        fontSize: 10,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})
