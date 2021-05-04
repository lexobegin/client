import React, { useState } from "react";
import { Form, Icon, Input, Button, notification } from "antd";
import { singnInApi } from '../../../api/user';

import "./LoginForm.scss";

export default function LoginForm() {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const changeForm = e => {
        //console.log("assdasd");
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const login = e => {
        e.preventDefault();

        singnInApi(inputs)

        //console.log(inputs);
    };

    //return "LoginForm Componente...."
    return (
        <Form className="login-form" onChange={changeForm} onSubmit={login}>
            <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}} />}
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    className="login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}} />}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="login-form__button">
                    Entrar
                </Button>
            </Form.Item>
        </Form>
    );
}