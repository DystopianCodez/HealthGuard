import { Text, View } from "react-native";

const ProfileComponent = () => {
  return (
    <View style={styles.membershipList}>
      <Text style={styles.familyHeader}>Family Members Nearby</Text>
      <View style={styles.familyMember}>
        <View style={styles.familyMemberIcon}></View>
        <View>
          <Text style={styles.familyName}>Sally Smith</Text>
          <Text style={styles.familyTitle}>Mom</Text>
        </View>
      </View>
    </View>
  );
};
