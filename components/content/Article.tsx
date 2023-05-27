import MailchimpTagsWrapper from "@newsletter/layouts/MailchimpTagsWrapper";
import { NewsLetterItem as NewsLetterItemInterface } from "@newsletter/utils/interfaces";
import OutlookContentImage from "./Images/OutlookContentImage";
import NonOutlookContentImage from "./Images/NonOutlookContentImage";
import { isImagePlacedBelowTheDescription } from "@newsletter/utils/getItems";
import ContentImage from "./Images/ContentImage";

interface ArticleProps {
  item: NewsLetterItemInterface;
  isSponsoredMessage: boolean;
  isSponsoredPost: boolean;
}

export default function Article({
  item,
  isSponsoredMessage,
  isSponsoredPost,
}: ArticleProps) {
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
          <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
            <tbody>
              <tr>
                <td
                  style={
                    isSponsoredMessage || isSponsoredPost
                      ? { paddingBottom: 5 }
                      : item?.image && !isImagePlacedBelowTheDescription(item)
                      ? { paddingBottom: 10 }
                      : undefined
                  }
                >
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
                        lineHeight: "23px",
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
              {(isSponsoredMessage || isSponsoredPost) && (
                <tr>
                  <td
                    style={{
                      paddingBottom:
                        item?.image && !isImagePlacedBelowTheDescription(item)
                          ? 10
                          : undefined,
                    }}
                  >
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
              <ContentImage
                item={item}
                isShow={!isImagePlacedBelowTheDescription(item)}
              />
              {item?.description ? (
                <tr>
                  <td
                    className="description"
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: "26px",
                    }}
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></td>
                </tr>
              ) : null}
              <ContentImage
                item={item}
                isShow={isImagePlacedBelowTheDescription(item)}
              />
            </tbody>
          </table>
        </td>
      </MailchimpTagsWrapper>
    </tr>
  );
}
