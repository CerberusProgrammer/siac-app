import { Fab } from "@mui/material";

type Props = {
  icon: JSX.Element | JSX.Element;
  onTap: () => void;
};

export default function FAB({ icon, onTap }: Props) {
  return (
    <Fab
      color="primary"
      aria-label="add"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
      onClick={onTap}
    >
      {icon}
    </Fab>
  );
}
