import { AppBar, Toolbar } from "@material-ui/core";
import SearchInput from "@newsletter/components/content/search/SearchInput";
import { UserMenu } from "@newsletter/components/layout/components/UserMenu/UserMenu";

export default function SearchNewsletters() {
  
  return (
    <>
    <AppBar
      position="sticky"
    >
      <Toolbar>
      <UserMenu />
      </Toolbar>
    </AppBar>
      <SearchInput />
    </>
  );
}