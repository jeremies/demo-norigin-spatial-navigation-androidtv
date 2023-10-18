import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

function Button() {
  const { ref, focused, focusSelf } = useFocusable();

  return (<TouchableOpacity
    ref={ref}
    onFocus={focusSelf}
    style={focused ? styles.buttonFocused : styles.button}
  >
    <Text>Press me</Text>
  </TouchableOpacity>);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!asd</Text>
      <StatusBar style="auto" />
      <Button />
      <Button />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFocused: {
    backgroundColor: "red",
    marginBottom: 100
  },
  button: {
    backgroundColor: "blue",
    marginBottom:  100
  }
});
