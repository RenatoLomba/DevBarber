import React, { useContext } from 'react';
import styled from 'styled-components/native';

import { UserContext } from '../contexts/UserContext';

import HomeIcon from '../assets/HomeIcon';
import SearchIcon from '../assets/SearchIcon';
import TodayIcon from '../assets/TodayIcon';
import FavoriteIcon from '../assets/FavoriteIcon';
import AccountIcon from '../assets/AccountIcon';

const TabArea = styled.View`
    height: 60px;
    background-color: #4EADBE;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 100%;
    border: 3px solid #4EADBE;
    margin-top: -20px;
`;

const AvatarIcon = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

export default ({ state, navigation }) => {
    const { state: user } = useContext(UserContext);

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon style={{ opacity: state.index === 0 ? 1 : 0.5 }} width="24" height="24" fill="#FFF" />
            </TabItem>
            <TabItem onPress={() => goTo('Search')}>
                <SearchIcon style={{ opacity: state.index === 1 ? 1 : 0.5 }} width="24" height="24" fill="#FFF" />
            </TabItem>
            <TabItemCenter onPress={() => goTo('Appointments')}>
                <TodayIcon style={{ opacity: 1 }} width="32" height="32" fill="#4EADBE" />
            </TabItemCenter>
            <TabItem onPress={() => goTo('Favorites')}>
                <FavoriteIcon style={{ opacity: state.index === 3 ? 1 : 0.5 }} width="24" height="24" fill="#FFF" />
            </TabItem>
            {
                <TabItem onPress={() => goTo('Profile')}>
                    {
                        user.avatar != '' ?
                            <AvatarIcon source={{ uri: user.avatar }} />
                            :
                            <AccountIcon style={{ opacity: state.index === 4 ? 1 : 0.5 }} width="24" height="24" fill="#FFF" />
                    }
                </TabItem>
            }
        </TabArea>
    );
};
