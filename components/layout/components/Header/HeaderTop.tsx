import { getCurrentDate } from "@newsletter/utils/mailchimpTags";

export default function HeaderTop() {
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
                    src="https://d2btcxja5g5zgs.cloudfront.net/assets/img/BevNET_Red.png"
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
                  fontWeight: 400,
                  lineHeight: "18.4px",
                  color: "#14a7bd",
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
