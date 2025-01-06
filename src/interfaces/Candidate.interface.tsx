// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
    bio: string;
    company: string;
    email: string;
    location: string;
}