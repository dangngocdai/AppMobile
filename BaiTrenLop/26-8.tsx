import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      sec0: false,
      tic: "00",
      sec: "00",
      min: "00"
    };
  }
  chay;
  baitap = () => {
    if (this.state.status == false) {
      this.setState({ status: true });
      this.chay = setInterval(() => {
        this.setState({ tic: Number(this.state.tic) + 1 });
        if (Number(this.state.tic) == 60) {
          this.setState({ tic: "00" });
          this.setState({ sec: Number(this.state.sec) + 1 });
        }
      }, 1);
    } else {
      this.setState({ status: false });
      clearInterval(this.chay);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={{ fontSize: 80, marginBottom: 50 }}>
            00:{this.state.sec0 ? "0" : ""}
            {this.state.sec}.{this.state.tic}
          c    vb7y7u8fg      </Text>
          <View style={styles.btn}>
            <View style={styles.btntrai}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.bttext}>Lap</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnphai}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.baitap.bind()}
              >
                <Text style={styles.bttext}>Start/Stop</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.khung}>
            <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 150 }}>
              Lap #2
            </Text>
            <Text style={{ fontSize: 20 }}>00:00.00</Text>
          </View>
          <View style={styles.khung}>
            <Text style={{ fontSize: 20, marginLeft: 10, marginRight: 150 }}>
              Lap #1
            </Text>
            <Text style={{ fontSize: 20 }}>00:00.00</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    width: 400,
    height: 500,
    alignItems: "center",
    justifyContent: "center"
  },
  bttext: {
    textAlign: "center",
    fontSize: 20
  },
  btn: {
    flexDirection: "row",
    width: 400,
    height: 100,
    marginBottom: 30
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    fontSize: 25,
    backgroundColor: "#cbcccf",
    borderRadius: 100
  },
  btntrai: {
    width: 200,
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  btnphai: {
    flex: 1,
    width: 200,
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  khung: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width: 300,
    height: 50,
    fontSize: 20,
    marginBottom: 20
  }
});
