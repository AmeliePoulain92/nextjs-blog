export default function generatePreviewText(
    previewText: string = '',
    spacesCount: number = 60
): string {
    let resultString = previewText;
    for (let i = 0; i < spacesCount; i++) {
        resultString += '&#847;&zwnj;&nbsp;';
    }

    return resultString;
}