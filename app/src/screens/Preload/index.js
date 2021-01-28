import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';

//COMPONENTE SVG
import BarberLogo from '../../assets/BarberLogo';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            //RECUPERA O TOKEN DO STORAGE
            const token = await AsyncStorage.getItem('token');
            if (token) {
                //CHECA O TOKEN NA API
                let json = await Api.checkToken(token);
                if (json.token) {
                    await AsyncStorage.setItem('token', json.token);
                    userDispatch({
                        type: 'setAvatar',
                        payload: {
                            avatar: json.data.avatar
                        }
                    });
                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });
                } else {
                    //manda para o login
                    navigation.navigate('SignIn');
                }
            } else {
                //manda para o login
                navigation.navigate('SignIn');
            }
        };
        checkToken();
    }, []);

    return (
        <Container>
            <BarberLogo width="100%" height="160" />
            <LoadingIcon size="large" color="#FFF" />
        </Container>
    )
};
