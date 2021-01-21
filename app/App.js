import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/contexts/UserContext';

//NAVIGATION CONTAINER CONTERÁ AS STACKS DA APLICAÇÃO
export default () => {
	//CONTEXTO COM INFORMAÇÕES GENÉRICAS DO USUÁRIO
	return (
		<UserContextProvider>
			<NavigationContainer>
				<MainStack />
			</NavigationContainer>
		</UserContextProvider>
	)
};
