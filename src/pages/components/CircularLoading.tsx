import { CircularProgress } from "@mui/material";

export default function CircularLoading() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <CircularProgress size={50} />
    </div>
  );
}
