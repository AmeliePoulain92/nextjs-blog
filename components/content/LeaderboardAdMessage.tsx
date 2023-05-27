import { NewsLetterItem as NewsLetterItemInterface } from "@newsletter/utils/interfaces";
import MailchimpTagsWrapper from "@newsletter/layouts/MailchimpTagsWrapper";
import { getFormattedDescription } from "@newsletter/utils/html";

interface LeaderboardAdMessageProps {
  item: NewsLetterItemInterface;
}

export default function LeaderboardAdMessage({
  item,
}: LeaderboardAdMessageProps) {
  const getSponsoredMessage = (): string => {
    return item?.companyName
      ? `Sponsored message from ${item?.companyName}`
      : "Sponsored message";
  };
  const description = getFormattedDescription(item);

  return (
    <tr>
      <MailchimpTagsWrapper accessType={item?.accessType}>
        <td style={{ paddingBottom: 20 }}>
          <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
            <tbody>
              <tr>
                <td style={{ paddingBottom: 5 }}>
                  <h3
                    style={{
                      margin: 0,
                    }}
                  >
                    <a
                      href={item?.link || undefined}
                      target="_blank"
                      style={{
                        display: "block",
                        fontSize: 20,
                        fontWeight: 700,
                        lineHeight: "23.22px",
                        textDecoration: "none !important",
                        color: "#000000",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: item?.title || "",
                      }}
                    ></a>
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                      lineHeight: "17.42px",
                      color: "#14a7bd",
                    }}
                  >
                    {getSponsoredMessage()}
                  </span>
                </td>
              </tr>
              {item?.description ? (
                <tr>
                  <td
                    className="description"
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "26px",
                    }}
                    dangerouslySetInnerHTML={{ __html: description }}
                  ></td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </td>
      </MailchimpTagsWrapper>
    </tr>
  );
}
