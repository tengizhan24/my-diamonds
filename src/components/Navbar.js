import React from 'react'
import { Button } from 'semantic-ui-react'
import Style from './Navbar.module.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Navbar() {
    return (
        <div className={'Style.logonavbar'}>
            <div style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-around', marginRight: '20px' }}>
                <Link to="/">
                    <img style={{ width: '200px', }} src='https://emeraldsa.co.za/wp-content/uploads/2019/08/logo-apple.png'></img>
                </Link>
                <Button style={{ backgroundColor: 'transparent' }}>
                    <Link to="/about" style={{ color: 'white' }}>
                        Главная
                        </Link>
                </Button>
                <Button style={{ backgroundColor: 'transparent' }}>
                    <Link to="/users" style={{ color: 'white' }}>
                        Регистрация
                        </Link>
                </Button>
                <Button style={{ backgroundColor: 'transparent' }}>
                    <Link to="/заказы" style={{ color: 'white' }}>
                        Форма заказа
                        </Link>
                </Button>
                <Button style={{ backgroundColor: 'transparent' }}>
                    <Link to="/заказы" style={{ color: 'white' }}>
                        Добавить объявление
                        </Link>
                </Button>
            </div>
        </div>
    )
}
