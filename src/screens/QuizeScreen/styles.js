import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    height: (Dimensions.get('window').height) - 100,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: "100%"
  },
  question: {
    marginTop: 100,
    width: 300,
    flex: 0.5,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    flex: 0.2,
  },
  progressContainer: {
    marginTop: 50,
    flex: 0.2,
  }
})
