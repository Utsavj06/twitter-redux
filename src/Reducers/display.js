const Data = {
   lists : []
}

const display = (state = Data , action) => {
    switch (action.type){
        case "addData" : 
             const {id, Data} = action.payload;
             return {
                 ...state,
                 lists : [
                     {
                         id : id ,
                         data:Data
                     },
                     ...state.lists
                 ]
             }
        default : return state;
    }
}

export default display ;