import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  ImageSourcePropType
} from "react-native";
import { Button, Modal, Provider, Icon } from "@ant-design/react-native";
import { AntDesign } from "@expo/vector-icons";
const mig1 = require("./assets/Img/Background.jpg");

interface AppState {
  visible: boolean;
  Kq1?: number;
  Kq2?: number;
  Kq3?: number;
  loading: boolean;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false,
      loading: false
    };
  }
  images = {
    img1: require("./assets/Img/1.jpg"),
    img2: require("./assets/Img/2.jpg"),
    img3: require("./assets/Img/3.jpg"),
    img4: require("./assets/Img/4.jpg"),
    img5: require("./assets/Img/5.jpg"),
    img6: require("./assets/Img/6.jpg")
  };
  Random = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  OpenModal = async () => {
    this.setState({
      loading: true
    });
    const Kq1 = await this.Random();
    const Kq2 = await this.Random();
    const Kq3 = await this.Random();

    this.setState({
      Kq1,
      Kq2,
      Kq3,
      visible: true,
      loading: false
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Provider>
        <View style={{ width: "100%", height: "100%" }}>
          <ImageBackground
            source={mig1}
            style={[styles.container]}
            resizeMode={"stretch"}
          />
          <Button
            onPress={() => this.OpenModal()}
            style={styles.quay}
            loading={this.state.loading}
          >
            Lắc nào Ae
          </Button>
          {this.state.Kq1 === 1 ||
          this.state.Kq2 === 1 ||
          this.state.Kq3 === 1 ? (
            <AntDesign
              style={[styles.Icon, { top: "0%", left: "0%" }]}
              name="check"
              size={70}
              color="green"
            />
          ) : null}
          {this.state.Kq1 === 2 ||
          this.state.Kq2 === 2 ||
          this.state.Kq3 === 2 ? (
            <AntDesign
              style={[styles.Icon, { top: "0%", left: "37%" }]}
              name="check"
              size={70}
              color="red"
            />
          ) : null}
          {this.state.Kq1 === 3 ||
          this.state.Kq2 === 3 ||
          this.state.Kq3 === 3 ? (
            <AntDesign
              style={[styles.Icon, { top: "0%", right: "19%" }]}
              name="check"
              size={70}
              color="black"
            />
          ) : null}
          {this.state.Kq1 === 6 ||
          this.state.Kq2 === 6 ||
          this.state.Kq3 === 6 ? (
            <AntDesign
              style={[styles.Icon, { top: "52%", right: "19%" }]}
              name="check"
              size={70}
              color="black"
            />
          ) : null}
          {this.state.Kq1 === 5 ||
          this.state.Kq2 === 5 ||
          this.state.Kq3 === 5 ? (
            <AntDesign
              style={[styles.Icon, { top: "52%", left: "37%" }]}
              name="check"
              size={70}
              color="blue"
            />
          ) : null}
          {this.state.Kq1 === 4 ||
          this.state.Kq2 === 4 ||
          this.state.Kq3 === 4 ? (
            <AntDesign
              style={[styles.Icon, { top: "52%", left: "0%" }]}
              name="check"
              size={70}
              color="brown"
            />
          ) : null}
          <Modal
            title="Kết quả"
            transparent
            onClose={this.onClose}
            maskClosable
            visible={this.state.visible}
            closable
          >
            <View style={{ paddingVertical: 20, flexDirection: "row" }}>
              <Image source={this.images["img" + this.state.Kq1]} />
              <Image source={this.images["img" + this.state.Kq2]} />
              <Image source={this.images["img" + this.state.Kq3]} />
            </View>
            <Button type="primary" onPress={this.onClose}>
              Lắc Lại
            </Button>
          </Modal>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",

    flex: 1
    // transform: [{ rotate: "90deg" }]
    // width: undefined,
    // height: undefined,
    // flexDirection: 'column',
    // backgroundColor:'transparent',
    // justifyContent: 'flex-start',

    // alignItems: "center",
    // justifyContent: "space-around"
  },

  Icon: {
    position: "absolute"
  },

  Title: {
    transform: [{ rotate: "90deg" }],
    top: "48%",
    right: "-30%",
    color: "red",
    position: "absolute",
    fontSize: 40
  },

  quay: {
    position: "absolute",
    top: "44%",
    left: "41%",
    height: 50
  }
});
