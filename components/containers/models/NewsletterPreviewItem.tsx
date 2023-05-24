import { NewsletterPreview } from "@newsletter/utils/interfaces";

interface NewsletterItem {
  item: NewsletterPreview;
  isInsider: boolean;
}

const NewsletterPreviewItem = ({ item, isInsider }: NewsletterItem) => {
  return (
    <div>
        {isInsider &&
            <div>
                <a>
                    { item.title }
                </a>
            </div>
        }
        {!isInsider &&
            <div>
                { item.title }
            </div>   
        }
        <div>
            { item.previewText }
        </div>
    </div>
  );
};

export default NewsletterPreviewItem;