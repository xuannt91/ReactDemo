import React ,{Component}from 'react';
import {ListView,StyleSheet,Text,View} from 'react-native';

class ListScreen extends Component {
    static navigationOptions={
      header: null,
    }
    state={

    }
    constructor(props){
        super(props);
        this.ds=new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
              dataSource={this.ds.cloneWithRows([
                  {tenkhoahoc:"ABC",name:"Nguyen Van A"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van A"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van A"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van A"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van A"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van A"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van A"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
                  {tenkhoahoc:"ABC",name:"Nguyen Van B"},
              ])}
              renderRow={(rowData) => {return(
                  <View style={styles.itemRows}>
                      <Text>{rowData.tenkhoahoc}</Text>
                      <Text>{rowData.name}</Text>
                  </View>
              )}}
            />
            </View>
            
          );
    }
  }
  export default ListScreen;

  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#02b294',
        flexDirection: 'column'
    },
    itemRows:{
        paddingTop:5,
        paddingLeft:10,
        paddingStart:10, 
        paddingBottom:5
    }
  });


