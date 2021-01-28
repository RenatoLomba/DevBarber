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

import Api from '../../Api'
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../../contexts/UserContext';

import SignInput from '../../components/SignInput';

//COMPONENTE SVG
import BarberLogo from '../../assets/BarberLogo';
import EmailIcon from '../../assets/EmailIcon';
import LockIcon from '../../assets/LockIcon';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const navigation = useNavigation();

    //BOTÃO DE CADASTRE-SE
    const handleMessageButtonClick = () => {

        //MANDA PARA A TELA DE CADASTRO SEM POSSIBILIDADE DE RETORNO
        navigation.reset({
            routes: [{ name: 'SignUp' }]
        });

    };

    //BOTAO DE LOGIN
    const handleSignButtonClick = async () => {
        if (emailField != '' && passwordField != '') {

            //FAZ A REQUISIÇÃO DE LOGIN
            let json = await Api.signIn(emailField, passwordField);

            //VERIFICA O TOKEN
            if (json.token) {

                //GUARDA O TOKEN NO ASYNC STORAGE PARA QUANDO O USUÁRIO SAIR E ENTRAR NA APLICAÇÃO
                await AsyncStorage.setItem('token', json.token);

                //ATRIBUI O AVATAR PARA O CONTEXTO
                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                });

                //MANDA PARA MAIN TAB
                navigation.reset({
                    routes: [{ name: 'MainTab' }]
                });
            } else {
                alert('Email e/ou senha errados!');
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
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
};
