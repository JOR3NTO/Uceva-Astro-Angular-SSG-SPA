export interface Empresa {
  id: number;

  name: string;

  industry: EmpresaCategory;

  location: string;

  email: string;
}

export type EmpresaCategory =
  | 'Tecnología'
  | 'Salud'
  | 'Finanzas'
  | 'Educación'
  | 'Manufactura'
  | 'Turismo'
  | 'Energía'
  | 'Transporte';


