import { useState } from "react";
import { FlatList } from "react-native";

import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import * as S from "./style";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Time A", "Amigos"]);

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com seus amigos" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </S.Container>
  );
}
