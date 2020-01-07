import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    };
    return (
        <nav>
            <div className="nav-wrapper light-green">
                <span className="brand-logo">
                    Сокращение ссылок
                </span>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/create">
                            <i className="material-icons left">ac_unit</i>
                            Создать
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/links">
                            <i className="material-icons right">ac_unit</i>
                            Ссылки
                        </NavLink>
                    </li>
                    <li>
                        <a href="/" onClick={logoutHandler}>
                            <i className="material-icons right">ac_unit</i>
                            Выйти
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
