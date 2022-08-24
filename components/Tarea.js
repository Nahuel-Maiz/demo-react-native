import React from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight } from "react-native";

const Tarea = ({item, eliminarTarea}) => {

const dialogoEliminar = id => {
console.log('eliminando...', id)
}

const {nombre, apellido, puesto} = item;

return (
<View style={styles.contenedor}>

<Text style={styles.label}>Nombre:</Text>
<Text style={styles.texto}>{nombre}</Text>


<Text style={styles.label}>Apellido</Text>
<Text style={styles.texto}>{apellido}</Text>



<Text style={styles.label}>Puesto</Text>
<Text style={styles.texto}>{puesto}</Text>

<View>
<TouchableHighlight style={styles.btnEliminar} onPress={ () => dialogoEliminar(item.id)} >
<Text style={styles.textEliminar}>Eliminar &times; </Text>
</TouchableHighlight>
</View>

</View>
);
}

const styles = StyleSheet.create({
contenedor: {
backgroundColor: '#FFF',
padding: 20,
borderBottomColor: '#94a3B8',
borderBottomWidth: 1
},
label: {
color: '#374151',
textTransform: 'uppercase',
fontWeight: '700',
marginBottom: 10
},
texto: {
color: '#6D28D9',
fontSize: 14,
fontWeight: '700',
marginBottom: 10
},
btnEliminar: {
padding: 10,
backgroundColor:'red',
marginVertical: 10
},
textEliminar: {
color: '#FFF',
fontWeight:'bold',
textAlign:'center'
}

});

export default Tarea;