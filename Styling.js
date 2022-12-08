import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
      padding: 10,
      height: "100%",
      backgroundColor: "white",
  
    },
    heading:{
   color:"black" ,
   fontSize:25 ,
    textAlign:"center",
    margin: 20 
 
    },
    subheading:{
      color:"black" ,
      fontSize:18 ,
      textAlign:"center",
      marginStart: 10 
    },
    account:{
      color:"blue" ,
      textAlign:"center",
      fontSize:18 ,
      textDecorationLine: 'underline'
    },
    button: {
      borderRadius: 5,
      margin: 10,
      padding: 10,
      color: "white",
      backgroundColor: "black",
      flexDirection: "row",
      width:"20%" ,
    },
    inp: {
     borderColor:"black" ,
     borderWidth: 2 ,
     borderRadius: 10 ,
     padding: 10  , 
     color:"black" ,
     margin: 10 
  
    },
    searchInp: {
        borderColor:"black" ,
        borderWidth: 1 ,
        borderRadius: 5 ,
        padding: 10  , 
        color:"black" ,
        margin: 20 
     
       },
    main:{
        backgroundColor:"white"
        },
        heading:{
          color:"black" ,
          fontSize:25 ,
           textAlign:"center",
           margin: 20 
        
           },
       card:{
          width: "90%",
          marginTop:10,
          marginStart:20,
          backgroundColor:"white",
          alignItems:"center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,
          elevation: 8,
        },
        txt:{
       color:"black",
       margin:10
        }
  })
  export default styles