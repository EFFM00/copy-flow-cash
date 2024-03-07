import TitleSection from "../../components/TitleSection/TitleSection";
import ContainerSections from "../../components/ContainerSections/ContainerSections"
import AuthLayout from "../../components/AuthLayout";
import { ADMIN, EMPLOYEE } from "../../constants/roles";
import FormGeneric from "../../components/FormGeneric/FormGeneric";
import * as Yup from "yup";
import { FieldGroup } from "../Login/styled";
import FieldGeneric from "../../components/FieldGeneric/FieldGeneric";
import SpanError from "../../components/SpanError/SpanError";
import { useFormik } from "formik";
import FieldPassword from "../../components/FieldPassword/FieldPassword";
import { useEffect, useState } from "react";
import FieldsContainerForm from "../../components/FieldsContainerForm/FieldsContainerForm";
import BtnSubmit from "../../components/BtnSubmit/BtnSubmit";
import Spinner from "../../components/Spinner/Spinner";
import SpinnerSvg from "../../assets/spinner3.svg";
import BtnContainerForm from "../../components/BtnContainerForm/BtnContainerForm";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";

const Settings = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [disableBtn, setDisableBtn] = useState(true)
    const authState = useSelector((state) => state.auth);
    const [cookies, _] = useCookies(["user"]);
    const userData = authState?.userData?.data;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const formik = useFormik({
        initialValues: {
            first_name: userData.userName,
            last_name: userData.lastName,
            phone: userData.phone,
            document_id: userData.document,
            email: userData.email.toLowerCase(),
            password: cookies.password
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

            phone: Yup.string().required("Es requerido un celular"),

            document_id: Yup.string().required(
                "Es requerido el número de documento"
            ),
        }),
        onSubmit: async (values) => {
        },
    });


    useEffect(() => {
        console.log("_________________________");
        console.log(formik.initialValues.first_name == formik.values.first_name);
        console.log(formik.initialValues.last_name == formik.values.last_name);
        console.log(formik.initialValues.phone == formik.values.phone);
        console.log(formik.initialValues.document_id == formik.values.document_id);
        console.log(formik.initialValues.email == formik.values.email);
        console.log(formik.values.password);
        console.log(formik.initialValues.password);
        console.log("_________________________");
        if (
            formik.initialValues.first_name == formik.values.first_name
            && formik.initialValues.last_name == formik.values.last_name
            && formik.initialValues.phone == formik.values.phone
            && formik.initialValues.document_id == formik.values.document_id
            && formik.initialValues.email == formik.values.email
            && formik.initialValues.password == formik.values.password
        ) {
            setDisableBtn(true)
        } else {
            setDisableBtn(false)
        }
    }, [formik.initialValues, formik.values])

    console.log(userData);

    return (
        <AuthLayout roles={[ADMIN, EMPLOYEE]}>
            <ContainerSections>
                <TitleSection text="Actualizar datos" ubication="left" />

                <FormGeneric onSubmit={() => { }}>
                    <FieldsContainerForm>

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

                    </FieldsContainerForm>
                    <BtnContainerForm>
                        <BtnSubmit
                            type="submit"
                            text={
                                disableBtn ? (
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
                            disabled={disableBtn}
                        />
                    </BtnContainerForm>
                </FormGeneric>
            </ContainerSections>
        </AuthLayout>
    )
}

export default Settings;