import { NewsletterItemType } from "./enums";

const {
    LeaderboardAd,
    FeaturedJobs,
    StandardJobs,
    LeaderboardAdMessage,
    FeaturedStories,
    PressReleases,
    SponsoredMessage,
    SponsoredPosts
} = NewsletterItemType

export const staticOrderedItems = [
    LeaderboardAd,
    FeaturedJobs,
    StandardJobs,
    LeaderboardAdMessage,
];

export const articleItems = [
    FeaturedStories,
    PressReleases,
    SponsoredMessage,
    SponsoredPosts
]