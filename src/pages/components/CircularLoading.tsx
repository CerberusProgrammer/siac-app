import { CircularProgress } from "@mui/material";

export default function CircularLoading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <CircularProgress size={50} />
    </div>
  );
}
