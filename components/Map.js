import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../slices/navSlice';
import { useSelector } from 'react-redux';

const Map = () => {

    const origin = useSelector(selectOrigin)

    return (
        <MapView
            style={tw`flex-1`}
            mapType='mutedStandard'
            region={{
                latitude: 37.78825,
                //latitude: origin.location.lat
                longitude: -122.4324,
                //longitude: origin.location.long
                latitudeDelta: 0.015,
                //latitudeDelta: 0.05 same for longitude delta
                longitudeDelta: 0.0121,
            }}
        >
            {/* {origin.location &&( */}
                <Marker 
                coordinate={{
                    latitude: 37.78825,
                    //latitude: origin.location.lat
                    longitude: -122.4324,
                    //longitude: origin.location.long
                }}
                    title="origin"
                    description="description"
                    // description={origin.description}
                    identifier="origin"
                />
            {/* )} */}
        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({})
