import React from 'react'
import { FlatList, View,Text} from 'react-native';
import Pet from "./Pet";

const ContactsScreen = () => {
    const contacts=[
        {name:"Pastel",number:"0244852180",model:"cat",
        age:"2 years old",location:"932 sharene street sharene street" },

        {name:"Raka",number:"0244852181"},
        {name:"Jhony",number:"0244852182"},
        // {name:"Emmilia Ofori",number:"0244852183"},
        // {name:"Matilda Ofori",number:"0244852184"},
        // {name:"Isaac Ofori",number:"0244852185"},
        // {name:"Herbert Ofori",number:"0244852180"},
        // {name:"Nicholas Ofori",number:"0244852181"},
        // {name:"Eric Ofori",number:"0244852182"},
        // {name:"Emmilia Ofori",number:"0244852183"},
        // {name:"Matilda Ofori",number:"0244852184"},
        // {name:"Isaac Ofori",number:"0244852185"},
        // {name:"Herbert Ofori",number:"0244852180"},
        // {name:"Nicholas Ofori",number:"0244852181"},
        // {name:"Eric Ofori",number:"0244852182"},
        // {name:"Emmilia Ofori",number:"0244852183"},
        // {name:"Matilda Ofori",number:"0244852184"},
        // {name:"Isaac Ofori",number:"0244852185"},
    ]
  return (
    <View>
       <FlatList 
       data={contacts}
       renderItem={({item})=>{
        return<Pet 
        name={item.name}
        phone={item.number}
        model={item.model}
        age={item.age}
        location={item.location}
         />
       }}
       keyExtractor={(item)=>item.number}
       />
    </View>
  )
}
export default ContactsScreen