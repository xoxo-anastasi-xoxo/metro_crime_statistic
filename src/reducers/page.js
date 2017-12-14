const CHOOSE_STATION = "CHOOSE_STATION";
const OPEN_SET = "OPEN_SET";

const sets = [
  {
    name: "Подборка1",
    text: "Какой-то длинный текст",
    stations: [[0,4],[0,5]],
    ways: [[0,5]]
  }
];

export default function login(state = {current_info: {}, set: false}, action) {
  let newState = {...state};
  switch (action.type) {
    case OPEN_SET:
      newState.set = true;
      return newState;
    case CHOOSE_STATION:

      newState.current_info = {
        amount: 1,
        stationInStore: action.info
      };
      // console.log(newState);
      return newState;

    default:
      return newState
  }
}
