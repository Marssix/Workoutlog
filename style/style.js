import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: '#72E2B4',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 79,
    left: 0,
    right: 0,
    marginTop: 20,
    backgroundColor: '#72E2B4',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Adjust as needed
    alignItems: 'center',
    marginVertical: 10,
  },
});
