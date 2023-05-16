import { NewsLetterItem as NewsLetterItemInterface } from "@newsletter/utils/interfaces";

interface SectionTitleProps {
  title: NewsLetterItemInterface["title"];
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return title ? (
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
          dangerouslySetInnerHTML={{ __html: title || "" }}
        ></h2>
      </td>
    </tr>
  ) : null;
}
