import {StyleSheet, View, Text} from 'react-native';

export default function ProfileScreen() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Tab Profile</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
