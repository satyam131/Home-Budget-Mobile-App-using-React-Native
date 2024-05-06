import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22092C',
    padding: 20,
    color: '#ffffff',
  },
//   fullScreen:{
//     flex:1,
//     color:'#ffffff',
//   },
  title: {
    backgroundColor: '#0000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom:10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listItemContainer: {
     paddingBottom: 15,
    marginBottom: 10,
    borderBottomWidth: 1, // Apply border only at the bottom
    borderBottomColor: '#ffffff', // Border color white
  },
  listItemName: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16, // Added fontSize
    color: '#872341', // Changed text color to #872341
  },
  listItemAmount: {
    color: 'white', // Changed text color to white
    width: '70%', // Added width to match requirement
    backgroundColor: '#BE3144', // Added background color
    padding: 10, // Added padding
    marginBottom: 5, // Added marginBottom
    borderRadius: 10, // Added borderRadius
  },
});
