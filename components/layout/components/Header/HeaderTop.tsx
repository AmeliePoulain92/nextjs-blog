import { ThemeContext } from "@newsletter/context/ThemeContext";
import { getCurrentDate } from "@newsletter/utils/mailchimpTags";
import { useContext } from "react";

export default function HeaderTop() {
  const theme = useContext(ThemeContext);

  return (
    <tr>
      <td className="headerTopCell" width="100%" style={{ padding: 15 }}>
        <table
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          align="center"
          border={0}
        >
          <tbody>
            <tr>
              <td align="left" style={{ paddingRight: 10 }}>
                <a
                  href="https://www.bevnet.com/"
                  target="_blank"
                  style={{
                    display: "inline-block",
                    maxWidth: "100%",
                  }}
                >
                  <img
                    src={theme?.header?.logo}
                    title="BevNET"
                    alt="BevNET"
                    // @ts-ignore
                    border={0}
                    align="center"
                    width="135"
                    height="26"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </a>
              </td>
              <td
                className="dateCell"
                align="right"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: 14,
                  fontWeight: theme?.header?.dateFontWeight,
                  lineHeight: "18.4px",
                  color: theme?.header?.textColor,
                }}
              >
                {getCurrentDate()}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
