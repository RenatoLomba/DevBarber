//INFORMAÇÕES INICIAIS
export const initialState = {
    avatar: '',
    favorites: [],
    appointments: []
};

//REDUCER DE INFORMAÇÕES DE USUÁRIO
export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar };
        default:
            return state;
    }
};
