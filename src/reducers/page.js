const CHOOSE_STATION = "CHOOSE_STATION";
const OPEN_SET = "OPEN_SET";
const CHOOSE_SET = "CHOOSE_SET";

export const sets = [
  {
    name: "Подборка1",
    text: "Какой-то длинный текст",
    stations: [[0,4],[0,5]],
    ways: [[0,5]]
  },
  {
    name: "Подборка2",
    text: "Какой-то длинный текст",
    stations: [[0,1],[0,10]],
    ways: [[0,15]]
  },
  {
    name: "Подборка3",
    text: "Какой-то длинный текст",
    stations: [[0,13],[0,15]],
    ways: [[0,14]]
  }
];

export default function login(state = {current_info: {}, set: false, sets:sets}, action) {
  let newState = {...state};
  switch (action.type) {
    case CHOOSE_SET:
      newState.set = false;
      newState.current_info = {
        amount: 2,
        id: action.id,
        stationInStore: sets[action.id].stations,
        waysInStore: sets[action.id].ways
      };
      return newState;
    case OPEN_SET:
      newState.set = !(state.set);
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
