import AImage from 'components/atoms/AImage/AImage.component';
import AName from 'components/atoms/AName/AName';
import React, { FC } from 'react';

interface Iprops {
    nameSong: string;
    img: string;
    nameArtist: string;
}

const MFavorites: FC<Iprops>= ({nameSong, img, nameArtist}) => {
    return (
        <div>
            <AName name={nameSong} />
            <AImage urlImg={img} />
            <AName name={nameArtist} />
        </div>
    )
}

export default MFavorites