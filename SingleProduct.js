import { View, Text, Image, Button } from 'react-native'
import styles from '../Styling'

function SingleProduct({ navigation, route }) {
    console.log(route.params)
    return <>
        <View>

            <View style={styles.card}>
                <Text style={styles.heading}  >{route.params.category}</Text>

                <Image source={{ uri: route.params.image }} style={{ width: "60%", height: 300, resizeMode: "contain" }} />
                <Text style={styles.txt}  >Title : {route.params.title}</Text>
                <Text style={styles.txt}  >Description : {route.params.description}</Text>
                <Text style={styles.heading} >Price: {route.params.price}</Text>
                <View style={{ margin: 10 }}>
                    <Button style={styles.button} title="Buy Now" />
                </View>
            </View>
        </View>
    </>
}
export default SingleProduct