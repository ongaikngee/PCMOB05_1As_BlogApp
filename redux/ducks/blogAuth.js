
//This is the reducer, there can be a lot of reducer for different components

//This in the example of counter increment or decrement in the tutorial
const SIGN_IN = "sign_in";
const SIGN_OUT = "sign_out";


//Action: 
export function signInAction() {
  return { type: SIGN_IN };
}

//Action:
export function signOutAction() {
  return { type: SIGN_OUT };
}


const initialState = {
  signedIn: false,
};


//this is the actual reducer. deal with switch. Takes in 2 parameter, state & action
export default function blogAuthReducer(state = initialState, action) {
  console.log(`Action is ${JSON.stringify(action)}`);
  switch (action.type) {
    case SIGN_IN:
        //having the spread, it will relist all the items in the states, but override the one the you want
      return { ...state, signedIn: true };
    case SIGN_OUT:
      return { ...state, signedIn: false };
    default:
      return state;
  }
}