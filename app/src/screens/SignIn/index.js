import React, { useState } from 'react';
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

import SignInput from '../../components/SignInput';

//COMPONENTE SVG
import BarberLogo from '../../assets/BarberLogo';
import EmailIcon from '../../assets/EmailIcon';
import LockIcon from '../../assets/LockIcon';

export default () => {
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')
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

                <CustomButton>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    )
};
