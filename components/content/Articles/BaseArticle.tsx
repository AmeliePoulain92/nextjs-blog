import MailchimpTagsWrapper from "@newsletter/layouts/MailchimpTagsWrapper";
import { NewsLetterItem as NewsLetterItemInterface } from "@newsletter/utils/interfaces";

interface BaseArticleProps {
  item: NewsLetterItemInterface;
  isSponsoredMessage?: boolean;
  isSponsoredPost?: boolean;
}

export default function BaseArticle({
  item,
  isSponsoredMessage,
  isSponsoredPost,
}: BaseArticleProps) {
  const getSponsoredMessage = (): string => {
    if (isSponsoredMessage) {
      return item?.companyName
        ? `Sponsored message from ${item?.companyName}`
        : "Sponsored message";
    } else if (isSponsoredPost) return "Sponsored Content";
    return "";
  };

  return (
    <tr>
      <MailchimpTagsWrapper accessType={item?.accessType}>
        <td style={{ paddingBottom: 25 }}>
          <table cellPadding={0} cellSpacing={0} border={0}>
            <tbody>
              <tr>
                <td style={{ paddingBottom: 10 }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      lineHeight: "21px",
                      margin: 0,
                      color: "#000000",
                    }}
                  >
                    <a
                      href={item?.link}
                      style={{
                        display: "block",
                        textDecoration: "none !important",
                        color: "#000000",
                      }}
                    >
                      {item?.title}
                    </a>
                  </h3>
                </td>
              </tr>
              {(isSponsoredMessage || isSponsoredPost) && (
                <tr>
                  <td style={{ paddingBottom: 10 }}>
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
              )}
              {item?.showImage && item?.image ? (
                <tr>
                  <td align="center" style={{ paddingBottom: 15 }}>
                    <a
                      href={item?.link}
                      style={{
                        display: "inline-block",
                        textDecoration: "none !important",
                      }}
                    >
                      <img
                        src={item?.image}
                        alt={item?.title}
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                          verticalAlign: "middle",
                        }}
                      />
                    </a>
                  </td>
                </tr>
              ) : null}
              <tr>
                <td>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "21px",
                      margin: 0,
                    }}
                  >
                    {item?.showDescription && item?.description}
                    &nbsp;
                    {item?.showLink && item?.link ? (
                      <a
                        href={item?.link}
                        style={{
                          fontSize: "18px",
                          fontWeight: "400",
                          lineHeight: "21px",
                          textDecoration: "none !important",
                          borderBottom: "2px solid #ff3556",
                          color: "#000000",
                        }}
                      >
                        Read the story.
                      </a>
                    ) : null}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </MailchimpTagsWrapper>
    </tr>
  );
}
