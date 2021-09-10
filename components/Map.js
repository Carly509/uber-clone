import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames'
import { selectOrigin, setDestination } from '../slices/navSlice';
import { useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from "@env";

const Map = () => {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(setDestination)
    const mapRef = React.useRef(null);

    // React.useEffect(() => {
    //     if (!origin || !destination) return;
    //         mapRef.current.fitToSuppliedMarkes([origin, destination], {
    //             edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    //             animated: true,
    //         });
    //     }, [origin, destination])


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

           {/* {
                origin && destination && (
                    <MapViewDirections
                        origin={origin.description}
                        destination={destination.description}
                        apikey={GOOGLE_MAPS_KEY}
                        strokeWidth={3}
                        strokeColor="black"
                    />
                )}

             {origin.location &&( */}
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
