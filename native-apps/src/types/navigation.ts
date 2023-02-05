import type {RouteProp} from '@react-navigation/native';

export type MainStackParamList = {
  Drawer: undefined;
  Home: undefined;
  Details: {title: string, phone: string, address: string, division: string, category: string, image: string };
  Settings: undefined;
  Edit: undefined;
  employee: undefined
};

export type DetailsScreenRouteProp = RouteProp<MainStackParamList, 'Details'>;
export type EditScreenRouteProp = RouteProp<MainStackParamList, 'Edit'>;
