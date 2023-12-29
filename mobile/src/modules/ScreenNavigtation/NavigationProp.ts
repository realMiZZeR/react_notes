import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'modules/ScreenNavigtation/RootStackParamList.ts';

/**
 * Используется для указания типа в useNavigation.
 */
export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
