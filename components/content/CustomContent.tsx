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
                    <h4 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>
                      <a
                        href={item?.link || undefined}
                        target="_blank"
                        style={{
                          display: "block",
                          fontSize: 20,
                          fontWeight: 700,
                          lineHeight: "21px",
                          textDecoration: "none !important",
                          color: "#000000",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: item?.title || "",
                        }}
                      ></a>
                    </h4>
                  </td>
                </tr>
              ) : null}
              {item?.image ? (
                <tr>
                  <td align="center">
                    <a
                      href={item?.link || undefined}
                      target="_blank"
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
            </tbody>
          </table>
        </td>
      </MailchimpTagsWrapper>
    </tr>
  );
}
