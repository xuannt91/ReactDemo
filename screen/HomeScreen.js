import React ,{Component}from 'react';
import { Text, View,Button} from 'react-native';

class HomeScreen extends Component {
    static navigationOptions={
      header: null,
    }
    render() {
      const { navigation } = this.props;
      const username = navigation.getParam('username', '');
      const password = navigation.getParam('password', '');
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>

          <Text>username: {JSON.stringify(username)}</Text>
          <Text>password: {JSON.stringify(password)}</Text>
          <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        </View>
      );
    }
  }
  export default HomeScreen;



