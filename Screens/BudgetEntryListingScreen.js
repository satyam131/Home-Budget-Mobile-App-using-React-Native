import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const BudgetEntryListingScreen = () => {
  const budgetEntries = useSelector(state => state.budgetEntries);
  const navigation = useNavigation();

  const navigateToEnterBudget = () => {
    navigation.navigate('BudgetEntry');
  }

  return (
    <ScrollView contentContainerStyle={[styles.scrollViewContent, styles.fullScreen]}>
      <View style={[styles.container,{ paddingBottom: 14}]}>
        <Text style={[styles.title,{backgroundColor:'black', }]}>Budget Entry Listing</Text>
        {budgetEntries.map((entry, index) => (
          <View key={index} style={styles.listItemContainer}>
            <Text style={[styles.listItemName, { fontSize: 25, fontWeight: 'bold', color: '#F05941' }]}>{entry.name}</Text>
            <View style={styles.amountContainer}>
              <Text style={[styles.amountText, { fontSize: 17 ,width: '70%', backgroundColor: '#BE3144', color: 'white' , marginBottom: 3 , padding: 5 , borderRadius: 11, textAlign: 'center'}]}>Planned Amount: {entry.plannedAmount}</Text>
              <Text style={[styles.amountText, { fontSize: 17, width: '70%', backgroundColor: '#BE3144', color: 'white', marginBottom: 3, padding: 5 , borderRadius: 11, textAlign: 'center'}]}>Actual Amount: {entry.actualAmount}</Text>
            </View>
            {index < budgetEntries.length - 1 && <View style={styles.border} />}
          </View>
        ))}
        <TouchableOpacity style={styles.button} onPress={navigateToEnterBudget}>
          <Text style={styles.buttonText}>Add Items</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BudgetEntryListingScreen;
