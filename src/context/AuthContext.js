import createDataContext from './createDataContext'

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}


const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up with that email and Password

    //if we sign up, modify our state, and say that we are authenticated


    //if signing up fails, we probably need to reflect an error message
    // somwhere
  }
}

const signin = (dispatch) => {
  return ({ email, password }) => {
    //try to signing
    //handle success by updating state
    //handle failure by showing error message(somehow)
  }
}

const signout = (dispatch) => {
  return ({ email, password }) => {

  }
}




export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
)
