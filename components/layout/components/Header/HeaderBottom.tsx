import { ThemeContext } from "@newsletter/context/ThemeContext";
import { NewsletterItemAccessType } from "@newsletter/utils/enums";
import {
  getElseTag,
  getEndMergeTag,
  getStartMergeTag,
} from "@newsletter/utils/mailchimpTags";
import { useContext } from "react";

export default function HeaderBottom() {
  const theme = useContext(ThemeContext);

  return (
    <tr>
      <td>
        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            <tr>
              <td
                align="center"
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "25px",
                  fontWeight: "700",
                  padding: "9px 25px",
                  lineHeight: "25px",
                  letterSpacing: "0.2em",
                  textAlign: "center",
                  color: theme?.header?.titleColor,
                  background: theme?.header?.titleBackground,
                }}
              >
                {getStartMergeTag(NewsletterItemAccessType.Subscribers)}
                DAILY BRIEFING
                {getElseTag()}
                DAILY BRIEFING: LITE EDITION
                {getEndMergeTag(NewsletterItemAccessType.Subscribers)}
              </td>
            </tr>
            <tr>
              <td
                align="center"
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: 18,
                  fontWeight: 400,
                  padding: "9px 25px",
                  lineHeight: "25px",
                  textAlign: "center",
                  color: "#006177",
                }}
              >
                {getStartMergeTag(NewsletterItemAccessType.Subscribers)}
                Today&apos;s news &amp; insights for the beverage industry
                {getElseTag()}A preview of today&apos;s news &amp; insights for the
                beverage industry
                {getEndMergeTag(NewsletterItemAccessType.Subscribers)}
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
