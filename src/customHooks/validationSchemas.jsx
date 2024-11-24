import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().email("El formato email es invalido").required("Este campo es obligatorio"),
    password: yup
        .string()
        .required("Este campo es obligatorio")
        .min(6, "La contraseña debe tener al menos 6 caractéres")
        .max(20, "La contraseña debe tener al máximo 20 caractéres")
        .matches(/[A-Z]/, "La contraseña debe tener al menos una mayúscula")
        .matches(/[a-z]/, "La contraseña debe tener al menos una minúscula")
})