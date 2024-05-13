import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/store';
import { bgImg } from '../models/styleTypes';
import { BG_IMAGES } from '../data';
import Header from '../components/Header/Header';

export default function RootLayout() {
  const bg = useAppSelector(state => state.style.bg);
  console.log(bg)

  let imgUrl;

  if (bg === bgImg.MAIN) {
    imgUrl = BG_IMAGES.main;
  } else if (bg === bgImg.ROOM) {
    imgUrl = BG_IMAGES.room;
  }

  return (
    <>
      <div id="mainBg">
        <img src={`./${imgUrl}`} alt="" />
      </div>
      <Header/>
      <main>
        <Outlet />
      </main>
      <footer>ROOT LAYOUT FOOTER</footer>
    </>
  );
}