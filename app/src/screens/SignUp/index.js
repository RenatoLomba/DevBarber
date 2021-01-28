import React, { useState, useContext } from 'react';
import { Text } from 'react-native';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';
import { useNavigation } from '@react-navigation/native';

import Api from '../../Api';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../../contexts/UserContext';

import SignInput from '../../components/SignInput';

//COMPONENTE SVG
import BarberLogo from '../../assets/BarberLogo';
import EmailIcon from '../../assets/EmailIcon';
import LockIcon from '../../assets/LockIcon';
import PersonIcon from '../../assets/PersonIcon';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const navigation = useNavigation();

    //BOTÃO DE LOGIN
    const handleMessageButtonClick = () => {

        //MANDA PARA A TELA DE LOGIN SEM RETORNO
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        });

    };

    //BOTAO DE CADASTRAR
    const handleSignButtonClick = async () => {
        if (emailField != '' && passwordField != '' && nameField != '') {
            let json = await Api.signUp(nameField, emailField, passwordField);
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
                alert('Erro: ' + json.error);
            }
        } else {
            alert('Preencha os campos!')
        }
    };

    return (
        <Container>
            <BarberLogo width="100%" height="160" />

            <InputArea>

                <SignInput
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChange={setNameField}
                />
                <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChange={setEmailField}
                />
                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChange={setPasswordField}
                    password={true}
                />

                <CustomButton onPress={handleSignButtonClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
};
