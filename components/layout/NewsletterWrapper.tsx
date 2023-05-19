import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function NewsletterWrapper({ children }: Props) {
  return (
    <table
      width="100%"
      // @ts-ignore
      height="100%"
      cellPadding={0}
      cellSpacing={0}
      border={0}
    >
      <tbody>
        <tr>
          {/* @ts-ignore */}
          <td width="100%" height="100%" bgcolor="#ffffff">
            <table
              width="100%"
              // @ts-ignore
              height="100%"
              cellPadding={0}
              cellSpacing={0}
              border={0}
              style={{ padding: "0px", margin: "0px", width: "100%" }}
            >
              <tbody>
                <tr>
                  <td
                    colSpan={3}
                    height="20"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      fontSize: "20px",
                      height: "20px",
                    }}
                  >
                    &nbsp;
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0", margin: "0" }}>&nbsp;</td>
                  <td style={{ padding: "0", margin: "0" }} width="600">
                    {/* content table */}
                    <table
                      cellPadding={0}
                      cellSpacing={0}
                      align="center"
                      border={0}
                      style={{
                        fontFamily: "Arial, sans-serif",
                        margin: "0 auto",
                        padding: "0",
                        width: "100%",
                        tableLayout: "fixed",
                        backgroundColor: "#ffffff",
                        color: "#000000",
                      }}
                    >
                      <tbody>{children}</tbody>
                    </table>
                  </td>
                  <td style={{ padding: "0", margin: "0" }}>&nbsp;</td>
                </tr>
                <tr>
                  <td
                    colSpan={3}
                    height="20"
                    style={{
                      padding: "0px",
                      margin: "0px",
                      fontSize: "20px",
                      height: "20px",
                    }}
                  >
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
