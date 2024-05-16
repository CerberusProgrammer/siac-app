import { CircularProgress } from "@mui/material";

export default function CircularLoading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={50} />
    </div>
  );
}
