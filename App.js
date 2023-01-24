import { StyleSheet, Text, View } from "react-native";
import Button from "./src/Button";
import { useTranslation } from "./src/use-translation";

export default function App() {
  const { t, locale, setLocale } = useTranslation();

  if (locale === null) return null;

  return (
    <View style={styles.container}>
      <Text>{t("cookie_1")}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={() => setLocale("ko")}
          isSelected={locale === "ko"}
          text="KO"
        />
        <Button
          onPress={() => setLocale("en")}
          isSelected={locale === "en"}
          text="EN"
        />
        <Button
          onPress={() => setLocale("ja")}
          isSelected={locale === "ja"}
          text="JA"
        />
        <Button
          onPress={() => setLocale("zh")}
          isSelected={locale === "zh"}
          text="ZH"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
});
