import { StatusBar } from 'expo-status-bar'
import { GluestackUIProvider, Text, Box, config } from '@gluestack-ui/themed'
import Header from './src/components/layout/Header'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppStack from './src/components/stacks/AppStack'

const App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config.theme}>
        {/* <Header /> */}
        <AppStack />
        <StatusBar bg='#2c3e50' />
      </GluestackUIProvider>
    </SafeAreaProvider>
  )
}

export default App
