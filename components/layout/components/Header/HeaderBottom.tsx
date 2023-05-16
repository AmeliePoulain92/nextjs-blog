import { Theme as ThemeInterface } from "@newsletter/utils/interfaces";

interface HeaderBottomProps {
  theme: ThemeInterface;
}

export default function HeaderBottom({ theme }: HeaderBottomProps) {
  return (
    <tr>
      <td
        align="center"
        style={{
          padding: "5px 25px",
          background: "#006177",
        }}
      >
        <h1
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: 25,
            fontWeight: 700,
            lineHeight: "29px",
            textAlign: "center",
            letterSpacing: "0.2em",
            color: "#ffffff",
            margin: 0,
          }}
        >
          DAILY BRIEFING
        </h1>
      </td>
    </tr>
  );
}
