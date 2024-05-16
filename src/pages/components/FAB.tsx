type Props = {
  icon: JSX.Element | JSX.Element;
  onTap: () => void;
};

export default function FAB({ icon, onTap }: Props) {
  return (
    <>
      <button
        className=" ease-in-out transition rounded-full bg-orange-400 p-4 hover:bg-orange-500 hover:scale-105 active:scale-95"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
        onClick={onTap}
      >
        {icon}
      </button>

      {/* <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
        onClick={onTap}
        sx={{}}
      >
        {icon}
      </Fab> */}
    </>
  );
}
