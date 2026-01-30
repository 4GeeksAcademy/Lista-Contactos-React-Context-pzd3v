export const initialState={ //Se define las initState como primer paso del Reduc
  contacts:[]
} 

export const contactReducer = (state, action) => {
    switch (action.type) {
        case "GET_CONTACTS":
            return { ...state, contacts: action.payload };
        case "ADD_CONTACT":
            return { ...state, contacts: [...state.contacts, action.payload] };
        case "DELETE_CONTACT":
            return { ...state, contacts: state.contacts.filter(c => c.id !== action.payload) };
        case "UPDATE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.map(c => c.id === action.payload.id ? action.payload : c)
            };
        default:
            return state;
    }
};

