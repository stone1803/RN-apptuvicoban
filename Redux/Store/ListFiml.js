let Data ={
    DataMp3:[],
    FirebaseData:[]
}
const listMoiveRecuder =(state=Data,action)=>{
    switch (action.type) {     
        case "ADD_MP3": {
            console.log(action.payload)
            state.DataMp3 = action.payload;
            return { ...state };
          }
          case "ADD_TIPS":
            // state.data = [...state.data, action.data];
            // return { ...state };
            state.FirebaseData = action.payload;

            return state;
        default:
            return state
    }
}
export default listMoiveRecuder;