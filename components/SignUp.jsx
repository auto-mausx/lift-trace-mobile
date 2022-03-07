import React, { version } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input } from 'react-native-elements';



const SignUp = (props) => {
  return (
    <View>
        <Input placeholder='Username' />
        <Input placeholder='email@address.com' />
        <Input placeholder='Password'
              secureTextEntry={true}
        />
        <Input placeholder='Confirm Password'
              secureTextEntry={true}
        />
        <View>
          <Text style={styles.accountStatus}>Already have an account?</Text>
          <View style={styles.buttons}>
            <Button title='Sign In'
            />
            <Button title='Create Account'/>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 50,
    marginRight: 50,
  },
  accountStatus: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 20,
    fontSize: 10,
  },
})



export default SignUp;