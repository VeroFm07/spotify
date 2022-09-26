export interface Favorites {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     string;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    added_at: Date;
    track:    Track;
}

export interface Track {
    album:         any;
    artists:       Artist[];
    disc_number:   number;
    duration_ms:   number;
    explicit:      any;
    external_ids:  any;
    external_urls: any;
    href:          string;
    id:            string;
    is_local:      any;
    is_playable:   any;
    name:          string;
    popularity:    number;
    preview_url:   string;
    track_number:  number;
    type:          any;
    uri:           string;
    isFavorite?:   any;
}

export interface Album {
    album_type:             AlbumTypeEnum;
    artists:                Artist[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     string;
    images:                 Image[];
    name:                   string;
    release_date:           string;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumTypeEnum;
    uri:                    string;
}

export enum AlbumTypeEnum {
    Album = "album",
    Single = "single",
}

export interface Artist {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name:          string;
    type:          ArtistType;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export enum ArtistType {
    Artist = "artist",
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export enum ReleaseDatePrecision {
    Day = "day",
    Year = "year",
}

export interface ExternalIDS {
    isrc: string;
}
