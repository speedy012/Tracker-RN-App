import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtontext="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Alreadt have an account? Sign in instead!"
      />
    </View>
  )
}

SignupScreen.navigationOptions = {
  headerShown: false
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
})

export default SignupScreen
