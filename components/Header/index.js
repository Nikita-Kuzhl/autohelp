import Link from "next/link";
import Cart from "./CartButton";
import styles from "../../styles/Header.module.scss";
import Auth from "./AuthButton";
import {
  HomeIcon,
  BookOpenIcon,
  MapIcon,
} from "@heroicons/react/outline";

import MenuMobile from "./MenuMobile";

let Links = [
  { name: "Главная", link: "/asd", icon: <HomeIcon className="w-8 h-8" /> },
  { name: "Услуги", link: "/", icon: <BookOpenIcon className="w-8 h-8" /> },
  { name: "О нас", link: "/", icon: <MapIcon className="w-8 h-8" /> },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo}>Autohelp</div>
        <ul className={styles.nav}>
          {Links.map((item) => (
            <a key={item.name} className={styles.item}>
              {item.name}
            </a>
          ))}
        </ul>
        <div className={styles.user_action}>
          <Auth />
          <Cart />
        </div>
          <MenuMobile links={Links}/>
      </div>
    </header>
  );
};

export default Header;
