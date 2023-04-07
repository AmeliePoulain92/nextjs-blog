// import { API_BASE_URL } from "@newsletter/config";
import { NewsLetter } from "@newsletter/utils/interfaces";

// TODO remove use editionId:10848 to create more items
export async function getNewsletterByGuid(guid: string) {
    const url = `https://api.jsonserve.com/${guid}`;
    return (await fetch(url)).json();
} 