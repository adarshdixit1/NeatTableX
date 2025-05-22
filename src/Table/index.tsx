import React, { Suspense } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  tableContainerStyles,
  tableHeadCellStyles,
  tableCellStyles,
} from "./style";
import { Column, TableProps } from "./interface";

const TableX = <T,>({ columns, data, isLoading }: TableProps<T>) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", boxShadow: "none" }}>
      <TableContainer component={Paper} sx={tableContainerStyles}>
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
          {columns.length > 0 && (
            <TableHead>
              <Suspense>
                <TableRow>
                  {columns?.map((column: Column<T>, index: number) => (
                    <TableCell
                      key={index}
                      sx={{
                        ...tableHeadCellStyles,
                        textAlign: column.center ? "center" : "left",
                      }}
                    >
                      {column.name}
                    </TableCell>
                  ))}
                </TableRow>
              </Suspense>
            </TableHead>
          )}
          {data?.length > 0 ? (
            <TableBody>
              {data?.map((row, rowIndex) => (
                <TableRow sx={{ backgroundColor: "#fff" }} key={rowIndex}>
                  {columns?.map((column: Column<T>, colIndex: number) => (
                    <TableCell
                      key={colIndex}
                      sx={{
                        ...tableCellStyles,
                        textAlign: column.center ? "center" : "left",
                      }}
                    >
                      {column.selector(row)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <>
              <TableBody>
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    sx={{
                      textAlign: "center",
                      borderBottom: "none",
                      height: "100px",
                      fontWeight: 500,
                    }}
                  >
                   {isLoading ? "" : "No data found"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </>
          )}
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableX;
