import FooterActionLinks from "./FooterActionLinks";
import FooterCopyright from "./FooterCopyright";
import FooterSocialLinks from "./FooterSocialLinks";

export default function FooterBottom() {
  return (
    <tr>
      <td
        className="footerBottomCell"
        width="100%"
        style={{
          padding: "25px 15px 17px",
        }}
      >
        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            <tr>
              <td
                align="center"
                style={{
                  paddingBottom: 18,
                }}
              >
                <p
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    lineHeight: "20px",
                    textAlign: "center",
                    margin: 0,
                    color: "#006177",
                  }}
                >
                  <a
                    href="https://www.bevnet.com/"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      fontWeight: "normal",
                      color: "#006177",
                    }}
                  >
                    BevNET.com
                  </a>
                  , Inc. 65 Chapel Street, Newton, MA 02458{" "}
                  <br />
                  <a
                    href="mailto:hello@bevnet.com"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      fontWeight: "normal",
                      color: "#006177 !important",
                    }}
                  >
                    hello@bevnet.com
                  </a>
                </p>
              </td>
            </tr>
            <FooterActionLinks />
            <FooterSocialLinks />
            <FooterCopyright />
          </tbody>
        </table>
      </td>
    </tr>
  );
}
