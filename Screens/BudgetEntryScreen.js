import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBudgetItem } from '../Store/BudgetActions';
import { useNavigation } from '@react-navigation/native'; // Import the hook
import { styles } from './styles';

const BudgetEntryScreen = () => {
  const [name, setName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Get the navigation object

  const handleSave = () => {
    const item = { name, plannedAmount, actualAmount };
    dispatch(addBudgetItem(item));
    setName('');
    setPlannedAmount('');
    setActualAmount('');
    navigation.navigate('BudgetEntryListing'); // Navigate to BudgetEntryListing screen
  };

  const navigateToShowList = () => {
    navigation.navigate('BudgetEntryListing');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { color: '#ffffff' }]}
        placeholder="Name"
        placeholderTextColor="rgba(255, 255, 255, 0.6)"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, { color: '#ffffff' }]}
        placeholder="Planned Amount"
        placeholderTextColor="rgba(255, 255, 255, 0.6)"
        value={plannedAmount}
        onChangeText={setPlannedAmount}
      />
      <TextInput
        style={[styles.input, { color: '#ffffff' }]}
        placeholder="Actual Amount"
        placeholderTextColor="rgba(255, 255, 255, 0.6)"
        value={actualAmount}
        onChangeText={setActualAmount}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToShowList}>
         <Text style={styles.buttonText}>Show Items</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BudgetEntryScreen;
