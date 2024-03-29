import React from 'react';
import { Link } from "react-router-dom";

import { useCart } from '../../hooks/useCart';

import headerStyles from './Header.module.scss';

function Header(props) {
  const { totalPrice } = useCart();

    return(
      <header className="d-flex justify-between align-center p-40">
        <Link to="/dr/">
          <div className="d-flex align-center">
              <img className={headerStyles.headerLogo} src="img/logo.svg" alt="Logotype" />
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img className={headerStyles.headerCart} src="img/cart.svg" alt="Корзина" />
            <span>{totalPrice} руб.</span>
          </li>
          <li className="mr-20 cu-p">
            <Link to="/dr/favorites">
              <img className={headerStyles.headerHeart} src="img/heart.svg" alt="Закладки" />
            </Link>
          </li>
          <li>
            <Link to="/dr/orders">
              <img className={headerStyles.headerUser} src="img/user.svg" alt="Пользователь" />
            </Link>
          </li>
        </ul>
      </header>
    );
}

export default Header;
