// Content Components
import Newsletter from "@newsletter/components/content/Newsletter";
// interfaces
import { NewsLetter as NewsLetterInterface } from "@newsletter/utils/interfaces";
import { getNewsletterByGuid } from "@newsletter/services/newsletter.service";
import MainLayout from "@newsletter/layouts/MainLayout";
import NewsletterWrapper from "@newsletter/components/layout/NewsletterWrapper";
import sortData from "@newsletter/utils/sortData";

import { PageConfig } from "next";
import PreviewText from "@newsletter/components/utils/PreviewText";
import { ThemeContext } from "@newsletter/context/ThemeContext";
import { theme } from "@newsletter/utils/constants";

export const config: PageConfig = {
  // prevents rendering script tags in production build
  unstable_runtimeJS: false,
};

export default function Newsletters(data: NewsLetterInterface) {
  return (
    <ThemeContext.Provider value={theme[data.targetSite]}>
      <PreviewText data={data} />
      <NewsletterWrapper>
        <MainLayout>
          <Newsletter data={data} />
        </MainLayout>
      </NewsletterWrapper>
    </ThemeContext.Provider>
  );
}

// This gets called on every request
export async function getServerSideProps(context: any) {
  const { params } = context;
  try {
    const data = await getNewsletterByGuid(params.guid);
    const sortedData = sortData(data);

    return {
      props: sortedData,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}
