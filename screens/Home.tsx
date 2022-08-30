import React, { useEffect, useState } from "react";
import { View, Linking, Alert, StyleSheet, FlatList } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "../lib/supabase";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../auth/authProvider";
import "react-native-url-polyfill/auto";
import { ListItem } from "react-native-elements";

export default function Home({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  const { isDarkmode, setTheme } = useTheme();
  const [list, setLists] = useState<any[]>([]);
  const user = useUser();
  useEffect(() => {
    fetchLists();
  }, [user]);

  const fetchLists = async () => {
    const { data: list, error } = await supabase.from("list").select("*");
    // .eq("user_id", user.session?.user?.id);
    console.log(list?.length);
    if (error) {
      Alert.alert(error.message);
    } else {
      setLists(list);
    }
  };

  console.log(list, "list");
  return (
    <Layout>
      <TopNav
        middleContent="Faire List"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />

      <View style={styles.container}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <ListItem
              bottomDivider
              hasTVPreferredFocus={undefined}
              tvParallaxProperties={undefined}
            >
              <ListItem.Content>
                <Text style={styles.item}>{item.list_name}</Text>
              </ListItem.Content>
            </ListItem>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      {/* <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Section style={{ marginTop: 20 }}>
          <SectionContent>
            <Button
              text="Go to second screen"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section>
      </View> */}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
