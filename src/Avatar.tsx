import { stringToColor } from "./utils.js";

interface Props {
  name: string;
  size?: number;
}

export function Avatar({ name, size = 32 }: Props) {
  const color = stringToColor(name);
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className="avatar"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.45,
        fontWeight: 600,
        color: "#fff",
      }}
    >
      {initial}
    </div>
  );
}
