export default function Reducer(state, action){
  console.log(action.type);
  switch(action.type){
    case "SET_SONGS":
      return {...state, songs: action.payload}
    default:
      return state
  }
}
