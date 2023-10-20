// adapters/DadoAdapter.ts
import { IDadoPortSaida } from "../ports/IDadoPortSaida";
import DadoDb from "../core/db/Dadobd";

export class DadoAdapterSaida implements IDadoPortSaida {
  dadoDb = DadoDb.getInstance();
  getDados(): number[] {
    return this.dadoDb.getDados();
  }
}
