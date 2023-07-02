import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://scontent.fcrk1-5.fna.fbcdn.net/v/t1.6435-9/78911994_100129904824036_8184344874435215360_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=cTb2Q-WKjXEAX8C2-mV&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfCQMd0MG3iVxwm3C65IcPa5ws1mj27J6MxtZjH5y3NP7g&oe=649675D1",
    "https://img.freepik.com/free-vector/set-vector-shopping-icons-black-white-with-cart-trolley-wallet-bank-card-shop-store-money-gift-delivery-bar-code-depicting-consumerism-retail-purchasing_1284-43160.jpg?w=740&t=st=1684993147~exp=1684993747~hmac=a6952c886b6b3cbc948a41cc7ee3b5ee8c597b78ce5444eb62f24d63abf6ae02",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor={"#13274F"}
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "97%",
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
