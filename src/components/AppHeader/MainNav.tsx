import { Icons } from '../Icons';
import styles from './MainNav.module.css';
import { mainNavItems } from '../../config/main-nav';
import { siteConfig } from '../../config/site';
import { NavLink } from 'react-router';

export function MainNav() {
  return (
    <div className={styles.mainNav}>
      <div className={styles.appIds}>
        <Icons.atom className="rs-size-24" />
        <span className="rs-font-weight-bold">{siteConfig.name}</span>
      </div>
      <nav className={styles.navLinks}>
        {mainNavItems.map((item) => (
          <NavLink className="rs-link" key={item.href} to={item.href}>
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
