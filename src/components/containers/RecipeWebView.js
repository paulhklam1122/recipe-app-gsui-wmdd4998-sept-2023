import { ExternalLinkIcon, Icon } from '@gluestack-ui/themed'
import { useLayoutEffect } from 'react'
import WebView from 'react-native-webview'

const RecipeWebView = ({ navigation, route }) => {
  const { uri } = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Icon as={ExternalLinkIcon} />
    })
    return () => {}
  }, [navigation])

  return <WebView source={{ uri }} />
}

export default RecipeWebView
