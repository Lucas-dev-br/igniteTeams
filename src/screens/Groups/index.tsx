import { useState } from "react";
import { FlatList } from "react-native";

import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpety } from "@components/ListEmpety";
import { Button } from "@components/Button";
import * as S from "./style";

import { useNavigation } from "@react-navigation/native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com seus amigos" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpety message="Sua lista esta vazia!" />
        )}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
