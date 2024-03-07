import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import FieldGeneric from "../../components/FieldGeneric/FieldGeneric";
import { useDispatch } from "react-redux";
import SpanError from "../../components/SpanError/SpanError";
import BtnSubmit from "../../components/BtnSubmit/BtnSubmit";
import TitleSection from "../../components/TitleSection/TitleSection";
import LinkText from "../../components/LinkText/LinkText";
import { createUser } from "../../service/registrationService";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpinnerSvg from "../../assets/spinner3.svg";

import {
    FieldGroup,
    FormContainer,
    FormToAccess,
    PageForm,
} from "../Login/styled";
import { useEffect, useState } from "react";
import { ACCOUNT_CREATED, EMAIL_ALREADY_USE } from "../../constants/responses_api";
import { FAILED, PENDING, SUCCEEDED } from "../../constants/status";
import FieldPassword from "../../components/FieldPassword/FieldPassword";
import Spinner from "../../components/Spinner/Spinner";
import { cleanStates } from "../../store/signUpSlice";

const Register = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const signUpState = useSelector((state) => state.signUp);
    const signUpStatus = signUpState.status;
    const signUpError = signUpState.error;
    const authState = useSelector((state) => state.auth);
    const loginStatus = authState.status;
    const loginToken = authState.userData?.token;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
 
        toast.dismiss()
 
        if (loginStatus === SUCCEEDED && loginToken) {
            navigate("/dashboard");
        }

    }, []);

    useEffect(() => {

        let msgError = "";

        switch (signUpError) {
            case EMAIL_ALREADY_USE:
                msgError = "Este email ya está en uso"
                break;
        
            default:
                msgError = signUpError
                break;
        }

        if (signUpStatus === FAILED) {
            toast.error("Error al crear la cuenta: " + msgError, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
            dispatch(cleanStates())
        }
    }, [signUpStatus]);

    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            phone: "",
            document_id: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        validationSchema: Yup.object({
            first_name: Yup.string().required("Nombre es requerido"),

            last_name: Yup.string().required("Apellido es requerido"),

            email: Yup.string()
                .email("Email inválido")
                .required("El email es requerido"),

            password: Yup.string()
                .min(12, "La contraseña debe tener a partir de 12 caracteres")
                .max(50)
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial"
                )
                .required("La contraseña es requerida"),
            
                confirm_password: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
                .required('Confirmar contraseña es requerido'),

            phone: Yup.string().required("Es requerido un celular"),

            document_id: Yup.string().required(
                "Es requerido el número de documento"
            ),
        }),
        onSubmit: async (values) => {

            dispatch(createUser({...values}))
                .then((res) => {
                    if(res.payload == ACCOUNT_CREATED) {
                        toast.success("Cuenta creada exitosamente", {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce,
                        });
                        navigate("/login");
                    }
                    
                    console.log("SUCCESS RES", res);
                })
                .catch((err) => {
                    console.log("FAILED RES", err);
                })
        },
    });


    const disableBtnLogin = () => {
        return (
            !formik.isValid 
            || signUpStatus === PENDING 
            || !formik.values.first_name
            || !formik.values.last_name
            || !formik.values.phone
            || !formik.values.document_id
            || !formik.values.email
            || !formik.values.password
            || !formik.values.confirm_password
        );
    };


    return (
        <PageForm>
            <FormContainer>
                <FormToAccess onSubmit={formik.handleSubmit}>
                    <TitleSection ubication={"center"} text={"Registro"} />
                    <FieldGroup>
                        <FieldGeneric
                            title="Nombre"
                            type="text"
                            name="first_name"
                            id="first_name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Nombre"
                            value={formik.values.first_name}
                        />
                        {formik.touched.first_name &&
                            formik.errors.first_name && (
                                <SpanError text={formik.errors.first_name} />
                            )}
                    </FieldGroup>

                    <FieldGroup>
                        <FieldGeneric
                            title="Apellido"
                            type="text"
                            name="last_name"
                            id="last_name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Apellido"
                            value={formik.values.last_name}
                        />
                        {formik.touched.last_name &&
                            formik.errors.last_name && (
                                <SpanError text={formik.errors.last_name} />
                            )}
                    </FieldGroup>

                    <FieldGroup>
                        <FieldGeneric
                            title="Teléfono"
                            type="text"
                            name="phone"
                            id="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Teléfono"
                            value={formik.values.phone}
                        />
                        {formik.touched.phone && formik.errors.phone && (
                            <SpanError text={formik.errors.phone} />
                        )}
                    </FieldGroup>

                    <FieldGroup>
                        <FieldGeneric
                            title="Documento"
                            type="document_id"
                            name="document_id"
                            id="document_id"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Documento"
                            value={formik.values.document_id}
                        />
                        {formik.touched.document_id &&
                            formik.errors.document_id && (
                                <SpanError text={formik.errors.document_id} />
                            )}
                    </FieldGroup>

                    <FieldGroup>
                        <FieldGeneric
                            title="Email"
                            type="email"
                            name="email"
                            id="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Email"
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <SpanError text={formik.errors.email} />
                        )}
                    </FieldGroup>

                    <FieldGroup>
                        <FieldPassword
                            title="Contraseña"
                            name="password"
                            id="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Contraseña"
                            conditionalType={showPassword}
                            onClickEye={togglePasswordVisibility}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password && (
                            <SpanError text={formik.errors.password} />
                        )}
                    </FieldGroup>

                    <FieldGroup>
                        <FieldPassword
                            title="Confirmar contraseña"
                            name="confirm_password"
                            id="confirm_password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder="Confirmar contraseña"
                            conditionalType={showPassword}
                            onClickEye={togglePasswordVisibility}
                            value={formik.values.confirm_password}
                        />
                        {formik.touched.confirm_password && formik.errors.confirm_password && (
                            <SpanError text={formik.errors.confirm_password} />
                        )}
                    </FieldGroup>

                    <LinkText
                        text="¿Ya tienes cuenta? Inicia sesión"
                        path="/login"
                        ubication="left"
                    />

                    <BtnSubmit
                        type="submit"
                        text={
                            signUpStatus === PENDING ? (
                                <Spinner
                                    image={SpinnerSvg}
                                    text="Creando cuenta..."
                                />
                            ) : (
                                "Crear cuenta"
                            )
                        }
                        color="#74E291"
                        colorText={"black"}
                        ubication="center"
                        disabled={disableBtnLogin()}
                    />
                </FormToAccess>
            </FormContainer>
        </PageForm>
    );
};

export default Register;
