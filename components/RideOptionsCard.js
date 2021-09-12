import React from 'react'
import { StyleSheet,
     Text,
      View,
       SafeAreaView,
        TouchableOpacity,
         Image,
          FlatList} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: 'uber-X-123',
    name: 'UberX',
    price: '$12.00',
    multiplier: '1',
    image: require('../assets/UberX.jpeg'),
  },
  {
    id: 'uber-XL-132',
    name: 'Uber XL',
    multiplier: '1.2',
    image: require('../assets/XL.jpeg'),
  },
  {
    id: 'uber-LUX-321',
    name: 'Uber LUX',
    multiplier: '1.75',
    image: require('../assets/Lux.jpeg'),
  },
]

const RideOptionsCard = () => {

    const navigation = useNavigation()
    const [selected, setSelected] = React.useState(null)

    return (
        <SafeAreaView style={tw`bg-white`}>  
            <View>
                <TouchableOpacity
                 onPress={() => navigation.navigate('NavigateCard')}
                 style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
                >
                    <Icon name="chevron-left" type='fontawesome' />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}> Select a Ride</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: {id, name, multiplier, image }, item }) => (
                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        // onPress={() => navigation.navigate('RideDetails', {
                        //     ride: item
                        // })}
                        style={
                            tw`flex
                             flex-row 
                             items-center 
                             justify-between
                              px-10 rounded-lg
                              ${
                                // selected === item ?
                                // tw`bg-gray-200` :
                                // tw`bg-white`
                                selected?.id === id && 'bg-gray-200'
                              }`}
                    >
                        <Image 
                        style={{
                            width: 80,
                            height: 80,
                            resizeMode: 'contain',
                        }}
                        source={item.image}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{name}</Text>
                            {/* <Text style={tw`text-sm`}>{`$${multiplier} per mile`}</Text> */}
                            <Text style={tw`text-sm`}>Time....</Text>
                        </View>
                        <Text style={tw`text-xl`}>$99</Text>
                        </TouchableOpacity>
                    
                )}
            />
            <View>
                <TouchableOpacity
                 disabled={!selected}
                 style={tw`bg-black py-3 m-3
                 ${!selected && 'bg-gray-200'}
                 `}
                >
                    <Text style={tw`text-center text-white text-xl`}>
                        Choose {selected?.name}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard
