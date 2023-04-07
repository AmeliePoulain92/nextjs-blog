import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

export default function Header() {
  return (
    <tr>
      <td width="100%">
        <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            <HeaderTop />
            <HeaderBottom />
          </tbody>
        </table>
      </td>
    </tr>
  );
}
