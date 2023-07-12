import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping    } from '@fortawesome/free-solid-svg-icons';
import { faBars    } from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
    <header className='header'>
              <nav className={classes.homepage}>
                <div className={classes.cpan}>
              
                </div>
                <ul className={classes.img1} />
                <ul className={classes.frame}>
                  <li><Link to='/home-page'> Главная </Link></li>
                  <li><Link to='/catalog'> Каталог </Link></li>
                  <li><Link to='/cart'> Бренд</Link></li>
                  <li><Link to='/cart'> O нас </Link></li>
                </ul>
                <ul className={classes.line}>
                  <li className={classes.inp}><input type="text" className={classes.inp1} />
                  </li><li className={classes.icon}><a href><FontAwesomeIcon className={classes.cart} icon={faMagnifyingGlass} /> </a></li>
                  <li className={classes.l1}>
                  </li><li className={classes.iconn}><a href= "/cart" ><FontAwesomeIcon className={classes.cart} icon={faBasketShopping} /> </a></li>
                  <li className={classes.l2} />
                  <li className={classes.l3} id='l3'><a><FontAwesomeIcon className={classes.cart} icon={faBars} /></a></li>
                </ul>

                <ul className={classes.frame700} id='frame700'>
                  <li><Link to='/catalog'> Каталог </Link></li>
                  <li><Link to='/cart'> Бренд</Link></li>
                  <li><Link to='#'> О нас</Link> </li>
                </ul>
              </nav>
    </header> 

     );
}



export default Header;
