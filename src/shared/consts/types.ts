export interface IOptions {
  label: string;
  value: string;
}

export interface ITableColumns {
  firstColumn: string;
  secondColumn: string;
  thirdColumn: string;
  forthColumn: string;
}

export interface ITable {
  id: string;
  columns: ITableColumns;
  rows: string[][];
}
