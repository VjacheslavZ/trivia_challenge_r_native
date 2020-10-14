import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: "100%"
  },
  question: {
    marginTop: 100,
    height: 300,
    width: 300,
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
  },
  progressContainer: {
    marginTop: 50
  }
})
