import React, { useState } from 'react';
import { Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { request, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchButton,
    LocationArea,
    LocationInput,
    LocationFinder
} from './styles';

import SearchIcon from '../../assets/SearchIcon';
import MyLocationIcon from '../../assets/MyLocationIcon';

export default () => {
    const [location, setLocation] = useState('');
    const [coords, setCoords] = useState(null);

    const navigator = useNavigation();

    //RECUPERAR A LOCALIZAÇÃO ATUAL DO USUÁRIO
    const handleLocationFinder = async () => {
        setCoords(null);

        //PEDE UMA PERMISSÃO AO USUÁRIO BASEADO NA SUA PLATAFORMA (IOS OU ANDROID)
        let result = await request(
            Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if (result == 'granted') {
            Geolocation.getCurrentPosition((info) => {
                console.log(info);
            });
        }
    };

    return (
        <Container>
            <Scroller>

                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o seu barbeiro favorito</HeaderTitle>
                    <SearchButton onPress={() => navigator.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#FFF" />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>
                    <LocationInput
                        placeholder="Onde você está?"
                        placeholderTextColor="#FFF"
                        value={location}
                        onChangeText={t => setLocation(t)}
                    />
                    <LocationFinder onPress={handleLocationFinder}>
                        <MyLocationIcon width="24" height="24" fill="#FFF" />
                    </LocationFinder>
                </LocationArea>

            </Scroller>
        </Container>
    );
};
