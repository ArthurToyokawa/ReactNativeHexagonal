// DadoDb.ts

export default class DadoDb {
  private static instance: DadoDb | null = null;
  private dados: number[] = [];

  private constructor() {}

  static getInstance(): DadoDb {
    if (!DadoDb.instance) {
      DadoDb.instance = new DadoDb();
    }
    return DadoDb.instance;
  }

  getDados = () => {
    return this.dados;
  };

  addDado = (dado: number) => {
    this.dados.push(dado);
  };
}
