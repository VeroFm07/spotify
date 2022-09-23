export interface User {
    display_name:  string;
    external_urls: any;
    followers:     any;
    href:          string;
    id:            string;
    images:        Image[];
    type:          string;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Followers {
    href:  null;
    total: number;
}

export interface Image {
    height: null;
    url:    string;
    width:  null;
}
