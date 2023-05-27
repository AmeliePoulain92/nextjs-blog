import { ThemeContext } from "@newsletter/context/ThemeContext";
import generateRawHTML from "@newsletter/utils/generateRawHTML";
import { useContext } from "react";

export default function NonOutlookInsiderButton() {
  const theme = useContext(ThemeContext);
  
  return generateRawHTML(
    `
    <!--[if !mso]><!-->
    <td>
        <a
            class="becomeAnInsiderButton"
            href="${theme?.footer?.actionLinks?.becomeAnInsider}"
            target="_blank"
            style="
                display: block;
                padding: 15px 30px;
                font-size: 18px;
                font-weight: 700;
                line-height: 15px;
                text-decoration: none;
                color: ${theme?.footer?.insider?.buttonColor};
                background-color: ${theme?.footer?.insider?.buttonBackground};
            ">
            Become an Insider
        </a>
    </td>
    <!--<![endif]-->
    `
  );
}
