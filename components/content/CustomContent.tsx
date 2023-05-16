import MailchimpTagsWrapper from "@newsletter/layouts/MailchimpTagsWrapper";
import { NewsLetterItem } from "@newsletter/utils/interfaces";

interface CustomContentProps {
  item: NewsLetterItem;
}

export default function CustomContent({ item }: CustomContentProps) {
  return (
    <tr>
      <MailchimpTagsWrapper accessType={item?.accessType}>
        <td style={{ paddingBottom: 20 }}>
          <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
            <tbody>
              {item?.title ? (
                <tr>
                  <td
                    style={{
                      paddingBottom: item?.image ? 15 : undefined,
                    }}
                  >
                    <h4
                      style={{ fontSize: 18, margin: 0 }}
                      dangerouslySetInnerHTML={{ __html: item?.title || "" }}
                    ></h4>
                  </td>
                </tr>
              ) : null}
              {item?.image ? (
                <tr>
                  <td align="center">
                    <img
                      src={item?.image}
                      alt={item?.title || "image"}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        verticalAlign: "middle",
                      }}
                    />
                  </td>
                </tr>
              ) : null}
              {item?.description ? (
                <tr>
                  <td
                    className="description"
                    style={{
                      fontSize: 18,
                      lineHeight: "20.9px",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: item?.description,
                    }}
                  ></td>
                </tr>
              ) : null}
              {item?.link ? (
                <tr>
                  <td>
                    <a
                      href={item?.link}
                      target="_blank"
                      style={{
                        fontSize: 18,
                        fontWeight: 600,
                        lineHeight: "21px",
                        textDecoration: "none !important",
                        borderBottom: "2px solid #ff3556",
                        color: "#000000",
                      }}
                    >
                      Learn More.
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
