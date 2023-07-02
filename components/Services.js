import { StyleSheet, Text, View ,ScrollView,Pressable,Image} from 'react-native'
import React from 'react'

const Services = () => {

 const services = [
    {
      id: "0",
      image: "https://www.cnet.com/a/img/resize/c6bca3de2b9a296c19bf62f0c666d9ec6ba5fcdd/hub/2021/10/23/91f7ed14-0d9c-4cba-9715-3e50ef822252/macbook-pro-2021-cnet-review-14.jpg?auto=webp&fit=crop&height=675&width=1200",
      name: "Macbook",
     
    },
    {
      id: "11",
      image: "https://www.detectiveconanworld.com/wiki/images/b/b1/Volume_1.jpg",
      name: "Book"
    },
    {
      id: "12",
      image: "https://cdn.shopify.com/s/files/1/0101/1145/1195/products/winner-plain-round-neck-shirt-butteryellow_c9739f73-efcf-43ac-83fa-4aa492c92df2.png?v=1644205060",
      name: "Clothes",
     
    },
    {
      id: "13",
      image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1fafd11f-7315-4dea-98f4-d762e999ebfe/air-max-systm-shoes-l4RjXF.png",
      name: "Shoes",
    },
   
  ];
  return (
    <View style={{padding:10}}>
        <Text style={{fontSize:16,fontWeight:"500",marginBottom:7}}>Item Available</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {services.map((service,index) => (
                <Pressable style={{margin:10,backgroundColor:"white",padding:20,borderRadius:7}} key={index}>
                    <Image source={{uri:service.image}} style={{width:70,height:70}}/>

                    <Text style={{textAlign:"center",marginTop:10}}>{service.name}</Text>
                </Pressable>
            ))}
        </ScrollView>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({})