import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82785a',
    alignItems: 'center',

  },

  header:{
    width: "100%",
    flexDirection: "row",
    marginTop: "3%",
    alignItems: "center",
    padding: 5,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 25,
    color: "white",
    fontFamily: 'monospace'
  },

  titleDifferent: {
    color: "#edddb4",
    fontSize: 27,
  },

  option: {
    width: 40,
    resizeMode: "contain"
  },

  perfil: {
    width: 40,
    resizeMode: "contain"
  },

  subTitle: {
    alignItems: "center",
    justifyContent: "center"
  },

  description: {
    marginTop: "30%",
    fontSize: 15,
    color: "white",
    fontFamily: 'monospace'
  },

  box: {
    marginTop: "10%",
    width: "100%",
    padding: 35
  },

  rowLine:{
    flexDirection: "row",
    justifyContent: "space-between",
  },

  rowCollunm: {
    width: 60,
    height: 60,
    borderRadius: "5%",
    marginBottom: "4%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#535044",
  },

  keyboard: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20%",
  },

  keyBoardHolder: {
    width: "80%",
    height: "90%",
    fontSize: 35,
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 1,
    outlineStyle: "none",
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: "#a7a6a6"
  },

  placeHolder:{
    fontSize: 30,
  }
});