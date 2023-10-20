// View.tsx

import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { DadoAdapterSaida } from "../adapters/DadoAdapterSaida";
import { DadoAdapterEntrada } from "../adapters/DadoAdapterEntrada";

export default function RolarDado(): JSX.Element {
  const [dados, setDados] = useState<number[]>([]);
  const controllerEntrada = new DadoAdapterEntrada();
  const controllerSaida = new DadoAdapterSaida();

  const rolarDado = () => {
    controllerEntrada.rolaDado();
    const newDados = controllerSaida.getDados().slice();
    setDados(newDados);
  };

  useEffect(() => {
    setDados(controllerSaida.getDados());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.attrContainer}>
        <Text style={styles.resultLabel}>dados:</Text>
        {dados.map((d, i) => {
          return <Text key={i}>{d + ", "}</Text>;
        })}
      </View>
      <View>
        <Button title="rolar dado" onPress={() => rolarDado()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  attrContainer: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  resultLabel: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 5,
  },
});
