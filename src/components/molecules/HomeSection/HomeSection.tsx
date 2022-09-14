//import ButtonsLinkComponent from 'components/atoms/linkButton/buttonsLinkComponent';
import { faHouse, faHeart, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import TitlesComponent from 'components/atoms/titles/titlesComponent';
import TitlesAlbumComponent from 'components/atoms/titlesAlbum/titlesAlbumComponent';

export const HomeSection = () => {



  return (
    <>
      <section className='section__home'>
        <TitlesComponent text="Inicio" />
        <TitlesComponent text="Favoritos" />
        {/* <ButtonsLinkComponent icon={faHouse} title="Inicio"/> */}

      </section>
    </>
  )
}

export default HomeSection