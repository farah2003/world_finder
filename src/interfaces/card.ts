export interface CardHeadingProps {
    title: string;
    word: string;
}
export interface CountryCardProps {
    item: {
        languages: { name: string }[];
        emoji: string;
        name: string;
        phone: string;
        native: string;
        continent: { name: string };
    };
}
