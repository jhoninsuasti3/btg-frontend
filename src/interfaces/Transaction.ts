export interface Transaction {
    type: string; // Define que es un string, según tu lógica
    fund_id: string;
    date: string | Date; // Puede ser un string o un objeto Date
  }
  