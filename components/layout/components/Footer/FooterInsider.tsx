import { NewsletterItemAccessType } from "@newsletter/utils/enums";
import NonOutlookInsiderButton from "../CTAButtons/NonOutlookInsiderButton";
import OutlookInsiderButton from "../CTAButtons/OutlookInsiderButton";
import MailchimpTagsWrapper from "@newsletter/layouts/MailchimpTagsWrapper";

export default function FooterInsider() {
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
                    src="https://d2btcxja5g5zgs.cloudfront.net/assets/images/Insider-Logo.png"
                    alt="Bevnet and Nosh Insider"
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
                  <p style={{ margin: "0" }}>
                    Become an Insider to gain access to exclusive Insider-only
                    newsletter content, as well as all digital content on{" "}
                    <a
                      href="https://www.bevnet.com/"
                      target="_blank"
                      style={{
                        fontWeight: "normal",
                        textDecoration: "none",
                        color: "#ffffff",
                      }}
                    >
                      BevNET.com
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.nosh.com/"
                      target="_blank"
                      style={{
                        fontWeight: "normal",
                        textDecoration: "none",
                        color: "#ffffff",
                      }}
                    >
                      NOSH.com
                    </a>. Tap into our video archives, including Community Call
                    and educational series, unlock event and job listing
                    discounts, and engage with our community of  food and
                    beverage professionals.
                  </p>
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
