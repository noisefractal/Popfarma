// src/types.ts
export type RootStackParamList = {
  Login: undefined;
  CreateAccount: undefined;
  Home: undefined;
  DipironaDetail: { item: any }; // Recebe um item (produto)
  SimeticonDetail: { item: any }; // Recebe um item (produto)
  ParacetamolDetail: { item: any }; // Recebe um item (produto)
  ShampooDetail: { item: any }; // Recebe um item (produto)
};
