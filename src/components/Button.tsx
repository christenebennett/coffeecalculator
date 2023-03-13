type ButtonProps = {
  onClick: () => void;
  text: string;
};

export const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button
      className="border rounded px-2 py-1 hover:bg-indigo-600 hover:text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
