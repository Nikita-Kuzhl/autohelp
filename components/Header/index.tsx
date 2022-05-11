import Router  from "next/router";
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
  { name: "Главная", link: "/", icon: <HomeIcon className="w-8 h-8" /> },
  { name: "Услуги", link: "/category", icon: <BookOpenIcon className="w-8 h-8" /> },
  { name: "О нас", link: "/about", icon: <MapIcon className="w-8 h-8" /> },
];

const Header = () => {
  
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo}>Autohelp</div>
        <ul className={styles.nav}>
          {Links.map((item) => (
            <a onClick={()=>Router.push(item.link)} key={item.name} className={styles.item}>
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
