import AsyncStorage from "@react-native-async-storage/async-storage";

function storageSetter(key, value) {
  AsyncStorage.setItem(key, value);
}

async function storageGetter(key) {
  return await AsyncStorage.getItem(key);
}

export { storageGetter as storageSet, storageSetter as storageGet };
