export interface Playlist {
    collaborative: boolean;
    description:   string;
    external_urls: ExternalUrls;
    followers:     Followers;
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    owner:         Owner;
    primary_color: null;
    public:        boolean;
    snapshot_id:   string;
    tracks:        Tracks;
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
    height: number;
    url:    string;
    width:  number;
}

export interface Owner {
    display_name?: string;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    type:          OwnerType;
    uri:           string;
    name?:         string;
}

export enum OwnerType {
    Artist = "artist",
    Track = "track",
    User = "user",
}

export interface Tracks {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     null;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    added_at:        any;
    added_by?:        Owner;
    is_local?:        boolean;
    primary_color?:   null;
    track:           any;
    video_thumbnail?: VideoThumbnail;
    isFavorite?:    boolean;
}

export interface Track {
    album:         Album;
    artists:       Owner[];
    disc_number:   number;
    duration_ms:   number;
    episode:       boolean;
    explicit:      boolean;
    external_ids:  ExternalIDS;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    is_local:      boolean;
    is_playable:   boolean;
    name:          string;
    popularity:    number;
    preview_url:   null | string;
    track:         boolean;
    track_number:  number;
    type:          OwnerType;
    uri:           string;
    linked_from?:  Owner;
    restrictions?: Restrictions;
    isFavorite?:    boolean;
}


export interface Album {
    album_type:             AlbumTypeEnum;
    artists:                Owner[];
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
    Compilation = "compilation",
    Single = "single",
}

export enum ReleaseDatePrecision {
    Day = "day",
    Year = "year",
}

export interface ExternalIDS {
    isrc: string;
}

export interface Restrictions {
    reason: string;
}

export interface VideoThumbnail {
    url: null;
}
