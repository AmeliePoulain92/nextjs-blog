import generatePreviewText from "@newsletter/utils/generatePreviewText";
import { NewsLetter } from "@newsletter/utils/interfaces";

interface PreviewTextProps {
  data: NewsLetter;
}

// shows up in inbox section to show an excerpt of the sent email
export default function PreviewText({ data }: PreviewTextProps) {
  return data?.previewText ? (
    <div
      style={{ display: "none", maxHeight: 0, overflow: "hidden" }}
      dangerouslySetInnerHTML={{
        __html: generatePreviewText(data?.previewText),
      }}
    ></div>
  ) : (
    null
  );
}
