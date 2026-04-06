export interface Distribuidor {
    id: number;
    name: string;
    city: string;
    phone: string;
    category: DistribuidorCategory;

}

export type DistribuidorCategory = 'Mayorista' | 'Minorista' | 'Exportador' | 'Importador';
