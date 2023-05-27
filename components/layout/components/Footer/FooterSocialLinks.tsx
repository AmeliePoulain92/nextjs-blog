import { ThemeContext } from "@newsletter/context/ThemeContext";
import { useContext } from "react";

export default function FooterSocialLinks() {
  const theme = useContext(ThemeContext);

  return (
    <tr>
      <td
        style={{
          textAlign: "center",
        }}
      >
        <table align="center" cellSpacing={0} cellPadding={0} border={0}>
          <tbody>
            <tr>
              <td
                style={{
                  textAlign: "center",
                  padding: "0 8px 13px 8px",
                }}
              >
                <a
                  href={theme?.footer?.socials?.facebook}
                  target="_blank"
                  style={{
                    display: "inline-block",
                    textDecoration: "none !important",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <img
                    src="https://dg6qn11ynnp6a.cloudfront.net/assets/img/fb_icon_gray.png"
                    alt="facebook"
                    width="18"
                    height="18"
                    style={{ verticalAlign: "middle" }}
                  />
                </a>
              </td>
              <td
                style={{
                  textAlign: "center",
                  padding: "0 8px 13px 8px",
                }}
              >
                <a
                  href={theme?.footer?.socials?.twitter}
                  target="_blank"
                  style={{
                    display: "inline-block",
                    textDecoration: "none !important",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <img
                    src="https://dg6qn11ynnp6a.cloudfront.net/assets/img/twitter_icon_gray.png"
                    alt="twitter"
                    width="18"
                    height="18"
                    style={{ verticalAlign: "middle" }}
                  />
                </a>
              </td>
              <td
                style={{
                  textAlign: "center",
                  padding: "0 8px 13px 8px",
                }}
              >
                <a
                  href={theme?.footer?.socials?.instagram}
                  target="_blank"
                  style={{
                    display: "inline-block",
                    textDecoration: "none !important",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <img
                    src="https://dg6qn11ynnp6a.cloudfront.net/assets/img/IG_icon_gray.png"
                    alt="twitter"
                    width="18"
                    height="18"
                    style={{ verticalAlign: "middle" }}
                  />
                </a>
              </td>
              <td
                style={{
                  textAlign: "center",
                  padding: "0 8px 13px 8px",
                }}
              >
                <a
                  href={theme?.footer?.socials?.linkedin}
                  target="_blank"
                  style={{
                    display: "inline-block",
                    textDecoration: "none !important",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <img
                    src="https://dg6qn11ynnp6a.cloudfront.net/assets/img/linkedin_Icon_gray.png"
                    alt="twitter"
                    width="18"
                    height="18"
                    style={{ verticalAlign: "middle" }}
                  />
                </a>
              </td>
              <td
                style={{
                  textAlign: "center",
                  padding: "0 8px 13px 8px",
                }}
              >
                <a
                  href={theme?.footer?.socials?.youtube}
                  target="_blank"
                  style={{
                    display: "inline-block",
                    textDecoration: "none !important",
                    padding: 0,
                    margin: 0,
                  }}
                >
                  <img
                    src="https://dg6qn11ynnp6a.cloudfront.net/assets/img/yt_Icon_gray.png"
                    alt="youtube"
                    width="20"
                    height="16"
                    style={{ verticalAlign: "middle" }}
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
