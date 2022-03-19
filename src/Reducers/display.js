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
                     ...state.lists,
                     {
                         id : id ,
                         data:Data
                     }
                 ]
             }
        default : return state;
    }
}

export default display ;