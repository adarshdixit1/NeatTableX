import { SxProps } from "@mui/system";

export const tableContainerStyles: SxProps = {
  paddingBottom: 2,
  boxShadow: "none",
  backgroundColor: "#fff",
  height: {
    xs: "calc(100dvh - 265px)",
    md: `calc(100dvh - 230px)`,
    lg: `calc(100dvh - 230px)`,
    xl: `calc(100dvh - 300px)`,
  },
  overflow: "auto",
};

export const tableHeadCellStyles: SxProps = {
  height: "40px",
  fontWeight: 600,
  whiteSpace: "nowrap",
  fontSize: "14px",
  backgroundColor: "white" /* Solid white background */,
  position: "sticky",
  borderBottom: "3px solid #159283",
  top: 0,
  zIndex: 1,
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(21, 146, 131, 0.05)" /* Semi-transparent overlay */,
    zIndex: -1,
  },
};

export const tableCellStyles: SxProps = {
  fontSize: 14,
  borderBottom: "2px solid #fff",
};
