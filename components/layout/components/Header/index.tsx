import { Theme as ThemeInterface } from "@newsletter/utils/interfaces";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

interface HeaderProps {
  theme: ThemeInterface;
}

export default function Header({ theme }: HeaderProps) {
  return (
    <tr>
      <td width="100%">
        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            <HeaderTop theme={theme} />
            <HeaderBottom theme={theme} />
          </tbody>
        </table>
      </td>
    </tr>
  );
}
