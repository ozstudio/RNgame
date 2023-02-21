import {TextInput,View,StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';



function StartGameScreen(){

    return (
    <View style={styles.Inputcontainer}>
     <TextInput keyboardType='number-pad' maxLength={2} style ={styles.numberInput}/>
       <PrimaryButton>Reset</PrimaryButton>
       <PrimaryButton>Confirm</PrimaryButton>
    </View>
    )
}

const styles = StyleSheet.create({
  Inputcontainer:{
    padding:16,
    marginTop:100,
    marginHorizontal:24,
    borderRadius:8,
    backgroundColor:'#72063c',
    elevation:4,
    shadowColor:'black',
    shadowOffset:{width:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.5
  },
  numberInput:{
    height:50,
    fontSize:34,
    borderBottomColor:'#ddb52f',
    borderBottomWidth:2,
    color:'#ddb52f',
    marginVertical:8,
    fontWeight:'bold',
    width:50,
    textAlign:'center'
  }
});
export default StartGameScreen;