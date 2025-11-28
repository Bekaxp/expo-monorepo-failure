import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

/**
 * A simple Image component from the core package
 */
export const CoreImage = ({ source, style }) => {
  return <Image source={source} style={style} />;
};

/**
 * A simple Button component from the core package
 */
export const Button = ({ title, onPress }) => {
  return (
    <View style={styles.button}>
      <Text style={styles.text} onPress={onPress}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

/**
 * A simple Card component from the core package
 */
export const Card = ({ children, title }) => {
  return (
    <View style={styles.card}>
      {title && <Text style={styles.cardTitle}>{title}</Text>}
      {children}
    </View>
  );
};

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
});

Object.assign(styles, cardStyles);
