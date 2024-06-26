import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import WebView from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ThemedView style={styles.webView}>
        <WebView
          originWhitelist={["*"]}
          source={{
            uri: "https://www.hackerdogreen.com.br",
          }}
        />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  webView: {
    width: "100%",
    height: "100%",
  },
});
