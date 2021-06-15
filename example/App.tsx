import React from 'react';
import {Text, View} from 'react-native';

import FlatListLottie from './src/FlatList_Lottie';
import FlatListHuawei from './src/FlatList_Huawei';
import FlatListDefault from './src/FlatList_Default';
import FlatListClassics from './src/FlatList_Classics';
import FlatListMaterial from './src/FlatList_Material';
import FlatListStoreHouse from './src/FlatList_StoreHouse';
import FlatListIOS from './src/FlatList_IOS';

export default function App() {
  return <FlatListLottie />;
  // return <FlatListHuawei />;
  // return <FlatListDefault />;
  // return <FlatListClassics />;
  // return <FlatListMaterial />;
  // return <FlatListStoreHouse />;
  // return <FlatListIOS />;
}
