import { NewsletterItemAccessType } from "./enums";

export function getCurrentDate(): string {
    return "*|DATE:F j, Y|*";
}

export function getStartMergeTag(accessType: NewsletterItemAccessType | undefined): string {
    switch (accessType) {
        case NewsletterItemAccessType.Subscribers:
            return "*|IF:PW_SUB = 1|*";
        case NewsletterItemAccessType.NonSubscribers:
            return "*|IF:PW_SUB = 1|* *|ELSE:|*";
        default:
            return "";
    }
}

export function getElseTag(): string {
    return "*|ELSE:|*";
}

export function getEndMergeTag(accessType: NewsletterItemAccessType | undefined): string {
    if (accessType === NewsletterItemAccessType.Subscribers ||
        accessType === NewsletterItemAccessType.NonSubscribers) {
        return "*|END:IF|*";
    }

    return "";
}

export function getListDescription(): string {
    return "*|LIST:DESCRIPTION|*";
}

export function getUnsubscribeLink(): string {
    return "*|UNSUB|*";
}

export function getUpdateSubscriptionLink(): string {
    return "*|UPDATE_PROFILE|*";
}