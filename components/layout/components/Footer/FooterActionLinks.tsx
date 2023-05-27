import { ThemeContext } from "@newsletter/context/ThemeContext";
import { NewsletterItemAccessType } from "@newsletter/utils/enums";
import {
  getElseTag,
  getEndMergeTag,
  getStartMergeTag,
  getUnsubscribeLink,
} from "@newsletter/utils/mailchimpTags";
import { useContext } from "react";

export default function FooterActionLinks() {
  const theme = useContext(ThemeContext);
  
  return (
    <tr>
      <td
        align="center"
        style={{
          paddingBottom: 43,
        }}
      >
        <p
          style={{
            margin: 0,
          }}
        >
          {getStartMergeTag(NewsletterItemAccessType.Subscribers)}
          <a
            href={theme?.footer?.actionLinks?.manageSubscription}
            target="_blank"
            style={{
              display: "inline-block",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: "16.26px",
              textDecoration: "underline",
              paddingBottom: "10px",
              color: "#006177",
            }}
          >
            Manage subscription
          </a>{" "}
          {getElseTag()}
          <a
            href={theme?.footer?.actionLinks?.becomeAnInsider}
            target="_blank"
            style={{
              display: "inline-block",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: "16.26px",
              textDecoration: "underline",
              paddingBottom: "10px",
              color: "#006177",
            }}
          >
            Become an Insider
          </a>{" "}
          {getEndMergeTag(NewsletterItemAccessType.Subscribers)}
          <span
            style={{
              color: "#006177",
            }}
          >
            &#x2022;
          </span>{" "}
          <a
            href={theme?.footer?.actionLinks?.submitNews}
            target="_blank"
            style={{
              display: "inline-block",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: "16.26px",
              textDecoration: "underline",
              paddingBottom: "10px",
              color: "#006177",
            }}
          >
            Submit News
          </a>{" "}
          <span
            style={{
              color: "#006177",
            }}
          >
            &#x2022;
          </span>{" "}
          <a
            href={theme?.footer?.actionLinks?.advertise}
            target="_blank"
            style={{
              display: "inline-block",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: "16.26px",
              textDecoration: "underline",
              paddingBottom: "10px",
              color: "#006177",
            }}
          >
            Advertise
          </a>{" "}
          <span
            style={{
              color: "#006177",
            }}
          >
            &#x2022;
          </span>{" "}
          <a
            href={getUnsubscribeLink()}
            target="_blank"
            style={{
              display: "inline-block",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: "16.26px",
              textDecoration: "underline",
              paddingBottom: "10px",
              color: "#006177",
            }}
          >
            Unsubscribe
          </a>
        </p>
      </td>
    </tr>
  );
}
