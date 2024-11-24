import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../customHooks/validationSchemas';
import { useUser } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import emailIcon from '/icons/inbox.svg';
import passwordIcon from '/icons/lock.svg';
import FormInput from '../components/general/FormInput';
import Button from '../components/general/Button';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const { login } = useUser();
    const navigate = useNavigate();
    const [showCredentials, setShowCredentials] = useState(false);

    const mockUser = {
        email: "test@example.com",
        password: "1234Rg",
    };

    const onSubmit = (formData) => {
        const { email, password } = formData;

        if (email === mockUser.email && password === mockUser.password) {
            localStorage.setItem('user', JSON.stringify({ email: mockUser.email }));
            login({ email: mockUser.email });
            navigate("/dashboard");
        } else {
            alert("Email o contraseña incorrectos");
        }
    };

    const handleShowDefaultCredentials = () => {
        setValue('email', mockUser.email);
        setValue('password', mockUser.password);
        setShowCredentials(true);
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-soft-gray">
            <div className="flex flex-col justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className="w-[340px] h-[588px]">
                    <h2 className="text-2xl  text-left font-bold text-medium-soft-green">Iniciar Sesión</h2>
                    <p className=" text-text-color-soft text-left mb-[44px]">
                        Inicie sesión para continuar en su cuenta.
                    </p>
                    <div className="flex flex-col gap-[10px]">
                        <FormInput
                            {...register('email')}
                            type="email"
                            id="email"
                            placeholder="Email"
                            iconInput={emailIcon}
                            labelInput="Email icon"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        <FormInput
                            {...register('password')}
                            type="password"
                            id="password"
                            placeholder="Contraseña"
                            iconInput={passwordIcon}
                            labelInput="Password icon"
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>
                    <Button
                        type="submit"
                        buttonStyle="bg-medium-soft-green text-white mt-6"
                        buttonText="Inicia Sesión"
                    />
                </form>

                <Button
                    type="button"
                    buttonStyle="bg-medium-soft-green-transparency text-soft-gray mt-4"
                    buttonText="Mostrar Credenciales por Defecto"
                    onClick={handleShowDefaultCredentials}
                />

                {showCredentials && (
                    <div className="mt-4 p-2 bg-light-yellow border border-medium-soft-green rounded-md">
                        <strong>Email:</strong> {mockUser.email}<br />
                        <strong>Contraseña:</strong> {mockUser.password}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginPage;
