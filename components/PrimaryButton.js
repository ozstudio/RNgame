import {View,Text,Pressable,StyleSheet} from 'react-native';



function PrimaryButton({children }){
    function pressHandler(){
        console.log('okklkl');
    }
   
return <Pressable android_ripple={{color:'#640233'}} onPress={pressHandler}>
    <View style ={styles.buttonContainer}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
        </Pressable>


}
const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#4e0329',
        borderRadius:28,
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
        margin:4
    },
    buttonText:{
        color:'white',
        textAlign:'center'

    }
})
export default PrimaryButton;

