export const initialState = {
    userName: null
};


const UserDetails = (state=initialState, action) => {
   switch (action.type) {
       case 'ADD_TEST':
           return{
               ...state,
              ...action.data,
            };
        default:
            return state
   }
}

export default UserDetails;