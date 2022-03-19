export const show = (myData) => {
    return {
        type : "addData",
        payload : {
            id : new Date().getTime().toString() ,
            Data : myData
        }
    }
}