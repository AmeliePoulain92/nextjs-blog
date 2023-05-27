import { ThemeContext } from "@newsletter/context/ThemeContext";
import generateRawHTML from "@newsletter/utils/generateRawHTML";
import { useContext } from "react";

export default function OutlookInsiderButton() {
  const theme = useContext(ThemeContext);

  return generateRawHTML(
    `<!--[if mso]>
        <td
          align="center"
          bgcolor="${theme?.footer?.insider?.buttonBackground}"
          style="padding: 15px 50px"
        >
          <a
            href="${theme?.footer?.actionLinks?.becomeAnInsider}"
            target="_blank"
            style="
              display: block;
              width: 100%;
              height: 100%;
              font-size: 18px;
              font-weight: 700;
              line-height: 15px;
              color: ${theme?.footer?.insider?.buttonColor};
            "
          >
            Become an Insider
          </a>
        </td>
        <!--![endif]-->`
  );
}
