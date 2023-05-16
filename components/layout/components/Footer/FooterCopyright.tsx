import { getListDescription } from "@newsletter/utils/mailchimpTags";

export default function FooterCopyright() {
  return (
    <tr>
      <td
        align="center"
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: 14,
          fontWeight: 400,
          lineHeight: "16.1px",
          color: "#8c979a",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#8c979a",
          }}
        >
          <span
            style={{
              fontWeight: "normal",
              color: "#8c979a",
            }}
          >
            ©1996 - {new Date().getFullYear()}
          </span>{" "}
          <a
            href="https://www.bevnet.com/"
            target="_blank"
            style={{
              fontWeight: 400,
              lineHeight: "16.1px",
              textDecoration: "none !important",
              color: "#8c979a",
            }}
          >
            BevNET.com®
          </a>
          <br />
          <span style={{ fontWeight: 300 }}>{getListDescription()}</span>
        </p>
      </td>
    </tr>
  );
}
