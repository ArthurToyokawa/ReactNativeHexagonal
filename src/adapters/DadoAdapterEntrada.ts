// adapters/DadoAdapter.ts
import { IDadoPortEntrada } from "../ports/IDadoPortEntrada";
import rolaDado from "../core/DadoLogic";
import DadoDb from "../core/db/Dadobd";

export class DadoAdapterEntrada implements IDadoPortEntrada {
  dadoDb = DadoDb.getInstance();
  rolaDado(): number {
    const dado = rolaDado();
    this.dadoDb.addDado(dado);
    return rolaDado();
  }
}
