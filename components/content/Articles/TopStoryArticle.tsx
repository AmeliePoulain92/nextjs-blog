import MailchimpTagsWrapper from "@newsletter/layouts/MailchimpTagsWrapper";
import { NewsLetterItem as NewsLetterItemInterface } from "@newsletter/utils/interfaces";

interface TopStoryArticleProps {
  item: NewsLetterItemInterface;
}

export default function TopStoryArticle({ item }: TopStoryArticleProps) {
  return (
    <tr>
      <MailchimpTagsWrapper accessType={item?.accessType}>
        <td width="100%" style={{ paddingBottom: 35 }}>
          <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
            <tbody>
              <tr>
                <td style={{ paddingBottom: 15 }}>
                  <h1
                    className="mainTitle"
                    style={{
                      fontFamily: "Trebuchet MS, Arial, sans-serif",
                      fontSize: "21px",
                      fontWeight: 700,
                      lineHeight: "29px",
                      margin: 0,
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
                  </h1>
                </td>
              </tr>
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
              {item?.showDescription && item?.description ? (
                <tr>
                  <td style={{ paddingBottom: 15 }}>
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: 400,
                        lineHeight: "23px",
                        margin: 0,
                      }}
                    >
                      {item?.description}
                    </p>
                  </td>
                </tr>
              ) : null}
              {item?.showLink && item?.link ? (
                <tr>
                  <td style={{ paddingBottom: 10 }}>
                    <a
                      href={item?.link}
                      style={{
                        fontSize: 18,
                        fontWeight: 700,
                        lineHeight: "21px",
                        textDecoration: "none !important",
                        borderBottom: "2px solid #ff3556",
                        color: "#000000",
                      }}
                    >
                      Read More
                    </a>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </td>
      </MailchimpTagsWrapper>
    </tr>
  );
}
