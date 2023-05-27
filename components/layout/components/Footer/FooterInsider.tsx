import { NewsletterItemAccessType } from "@newsletter/utils/enums";
import NonOutlookInsiderButton from "../CTAButtons/NonOutlookInsiderButton";
import OutlookInsiderButton from "../CTAButtons/OutlookInsiderButton";
import MailchimpTagsWrapper from "@newsletter/layouts/MailchimpTagsWrapper";
import { useContext } from "react";
import { ThemeContext } from "@newsletter/context/ThemeContext";

export default function FooterInsider() {
  const theme = useContext(ThemeContext);

  return (
    <tr>
      <MailchimpTagsWrapper
        accessType={NewsletterItemAccessType.NonSubscribers}
      >
        <td
          className="footerInsiderCell"
          // @ts-ignore
          bgcolor="#212121"
          style={{
            padding: "35px 15px",
            color: "#ffffff",
          }}
        >
          <table
            width="100%"
            cellPadding={0}
            cellSpacing={0}
            border={0}
            bgcolor="#212121"
          >
            <tbody>
              <tr>
                <td align="center" style={{ paddingBottom: "25px" }}>
                  <img
                    src={theme?.footer?.insider?.logo?.src}
                    alt="Insider Logo"
                    width={theme?.footer?.insider?.logo?.width}
                    height={theme?.footer?.insider?.logo?.height}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    paddingBottom: "25px",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "21px",
                    color: "#ffffff",
                  }}
                >
                  <p
                    style={{ margin: "0" }}
                    dangerouslySetInnerHTML={{
                      __html: theme?.footer?.insider?.description,
                    }}
                  ></p>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <table cellPadding={0} cellSpacing={0} border={0}>
                    <tbody>
                      {/* For Outlook only */}
                      <tr dangerouslySetInnerHTML={OutlookInsiderButton()}></tr>
                      {/* For non-Outlook clients */}
                      <tr
                        dangerouslySetInnerHTML={NonOutlookInsiderButton()}
                      ></tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </MailchimpTagsWrapper>
    </tr>
  );
}
