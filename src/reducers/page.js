const CHOOSE_STATION = "CHOOSE_STATION";

export default function login(state = { current_info: {}}, action) {
  let newState = {...state};
  switch (action.type) {
    case CHOOSE_STATION:

      newState.current_info.amount = 1;
      newState.current_info.stationInStore = action.info;
      // console.log(newState);
      return newState;

    default:
      return newState
  }
}
