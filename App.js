import React, {useState} from "react";
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Tarea from "./components/Tarea";
import Formulario from "./components/Formulario";

const App = () => {

const [tareas, setTarea] = useState([
{id: "2", nombre: "Rocio", apellido: "Rokat", puesto: "UXUI"},
{id: "3", nombre: "marcela", apellido: "Piter", puesto: "backend NodeJS"},
{id: "4", nombre: "juan", apellido: "Piter", puesto: "frontend React"},

]);

//eliminar tarea del state
const eliminarTarea = id => {
  setTarea( (tareasActuales) => {
    return tareasActuales.filter( tarea => tarea.id != id)
  })
}

return (
<View style={styles.contenedor}>
<Text style={styles.titulo}>Administrador de tareas</Text>

<Formulario/>
<FlatList
data={tareas}
keyExtractor={(item) => item.id}
renderItem={({item}) => {
return <Tarea item={item} />
}}
/>
</View>
);
}

const styles = StyleSheet.create({
contenedor: {
backgroundColor: "#AA076B",
flex: 1,
},
titulo: {
color: "#fff",
marginTop: 40,
fontSize: 20,
fontweight: "bold",
textAlign: "center",
},
});


export default App;