import * as Font from 'expo-font'

export const fetchFonts = () => {


    return Font.loadAsync({
        'opensansbold': require('./OpenSans-Bold.ttf'),
        'opensans': require('./OpenSans-Regular.ttf')
    })
}