import MailchimpTagsWrapper from "@newsletter/layouts/MailchimpTagsWrapper";
import { NewsletterItemType } from "@newsletter/utils/enums";
import { getItemsByType } from "@newsletter/utils/getItems";
import { NewsLetter as NewsLetterInterface } from "@newsletter/utils/interfaces";

interface LeaderboardAdMessageProps {
  data: NewsLetterInterface;
}

export default function LeaderboardAdMessage({
  data,
}: LeaderboardAdMessageProps) {
  const getItems = getItemsByType(
    data,
    NewsletterItemType.LeaderboardAdMessage
  );
  const currentData = getItems && getItems.length ? getItems[0] : null;

  return currentData ? (
    <tr>
      <MailchimpTagsWrapper accessType={currentData?.accessType}>
        <td>
          <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
            <tbody>
              <tr>
                <td align="center" style={{ paddingBottom: 15 }}>
                  <h2
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: 20,
                      fontWeight: 700,
                      lineHeight: "23px",
                      textTransform: "uppercase",
                      margin: 0,
                      color: "#14a7bd",
                    }}
                  >
                    &#10024; Sponsored by &#10024;
                  </h2>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: 10 }}>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      lineHeight: "23.22px",
                      margin: 0,
                    }}
                  >
                    {currentData.title}
                  </h3>
                </td>
              </tr>
              {currentData?.showDescription && currentData?.description ? (
                <tr>
                  <td style={{ paddingBottom: 20 }}>
                    <p
                      style={{
                        fontSize: 18,
                        fontWeight: 400,
                        lineHeight: "21px",
                        margin: 0,
                      }}
                    >
                      {currentData?.description}
                    </p>
                  </td>
                </tr>
              ) : null}
              {currentData?.showLink && currentData?.link ? (
                <tr>
                  <td style={{ paddingBottom: 10 }}>
                    <a
                      href={currentData?.link}
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        lineHeight: "21px",
                        textDecoration: "none !important",
                        borderBottom: "2px solid #ff3556",
                        color: "#000000",
                      }}
                    >
                      Learn More
                    </a>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </td>
      </MailchimpTagsWrapper>
    </tr>
  ) : null;
}
