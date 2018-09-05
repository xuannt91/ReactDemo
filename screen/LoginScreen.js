import React,{Component} from 'react';
import { StyleSheet, Text, Image,View,TouchableHighlight} from 'react-native';
import InputIcon from '../components/InputIcon';

class LoginScreen extends Component {
    
    static navigationOptions={
                header: null,
            }
    state = {
        username: '',
        password: '',
    }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.boxLogo}>
              <Image
                  style={styles.imageLogo}
                  source={require('../assets/images/icon.png')}
              />
          </View>

          <View style={styles.boxBodyLogin}>
              <View style={styles.boxBodyLoginContext}>
                  <InputIcon name="ios-person-outline"
                      placeholder="Email"
                      value={(username) => {
                        this.state.username = username;
                    }}
                  />
                  <InputIcon name="ios-lock-outline"
                      placeholder="Password"
                      value={(password) => {
                        this.state.password = password;
                    }}
                  />
                  <TouchableHighlight
                      style={styles.btnLogin}
                      onPress={() => this.props.navigation.navigate('List', {
                        username:this.state.username,
                        password: this.state.password,
                      })}
                  >
                      <Text style={styles.btnLoginTxt}>Login</Text>
                  </TouchableHighlight>

                  <View style={styles.boxHelp}>
                      <Text style={styles.line}>Forgot password?</Text>
                  </View>
              </View>
          </View>
      </View>
  )
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#02b294',
      flexDirection: 'column'
  },
  btnLogin: {
      paddingTop: 2,
      backgroundColor: '#00a651',
      borderRadius: 5,
      height: 45,
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
  },
  btnLoginTxt: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 17,
      fontWeight: 'bold'
  },
  imageLogo: {
      width: 150,
      height: 150,
      marginTop: 50,
  },
  boxLogo: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
  },
  boxHelp: {
      marginVertical: 20,
      justifyContent: 'center',
      alignItems: 'center',
  },
  boxHelpHeader: {
      flexDirection: 'row'
  },
  boxHelpHeaderTxtRight: {
      textAlign: 'right',
      flex: 1,
      color: '#68595d'
  },
  boxHelpHeaderTxtLeft: {
      flex: 1,
      color: '#68595d'
  },
  line: {
      borderBottomColor: '#fff',
      borderBottomWidth: 0.5,
      color: '#fff'
  },
  boxBodyLogin: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25
  },
  boxBodyLoginContext: {
      width: "88%",
      height: "100%"
  }
});
