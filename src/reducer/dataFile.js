export const initialState = {
    dataFile: null
};


const dataFile = (state=initialState, action) => {
   switch (action.type) {
       case 'ADD_FILE':
           return{
               ...state,
              ...action.data,
            };
        default:
            return state
   }
}

export default dataFile;