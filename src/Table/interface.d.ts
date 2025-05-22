import React from "react";

interface Column<T> {
  name: string;
  selector: (row: T) => React.JSX.Element | string | number;
  center?: boolean;
  format?: (value: any) => string; // Example formatting function
}


type TableProps<T> = {
  columns: any[];
  data: T[];
  isLoading: boolean;
  children?: React.ReactNode;
};

export{
  Column,
  TableProps
}
