import { useFormik } from "formik"
import BtnContainerForm from "../../../components/BtnContainerForm/BtnContainerForm"
import BtnSubmit from "../../../components/BtnSubmit/BtnSubmit"
import FieldGeneric from "../../../components/FieldGeneric/FieldGeneric"
import FieldsContainerForm from "../../../components/FieldsContainerForm/FieldsContainerForm"
import FormGeneric from "../../../components/FormGeneric/FormGeneric"
import SelectorGeneric from "../../../components/SelectorGeneric/SelectorGeneric"
import categoriesOtherExpenses from "../../../utils/categories_other_expenses.json"
import * as Yup from "yup";
import { FieldGroup } from "../../Login/styled"
import SpanError from "../../../components/SpanError/SpanError"
import { changeToView } from "../../../store/registrationFormSlice"
import { useDispatch } from "react-redux"

const FormOtherExpenses = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            categoria_gasto: "",
            tipo_gasto: "",
            centro_costo: "",
            fecha: "",
            nro_documento: "",
            monto: "",
            detalle: ""
        },
        validationSchema: Yup.object({
            categoria_gasto: Yup.string().required("Categoría de gasto es requerido"),

            tipo_gasto: Yup.string().required("Tipo de gasto es requerido"),

            centro_costo: Yup.string().required("Centro de costo es requerido"),
            
            fecha: Yup.date().required("Fecha es requerido"),
            
            nro_documento: Yup.number().required("Número de documento es requerido"),

            monto: Yup.number("Monto debe ser un número").min(0).required("Monto es requerido"),

            detalle: Yup.string().optional()
        }),
    });

    const disableBtnSubmit = () => {
        return (
            !formik.isValid
            || !formik.values.categoria_gasto
            || !formik.values.tipo_gasto
            || !formik.values.centro_costo
            || !formik.values.fecha
            || !formik.values.nro_documento
            || !formik.values.monto
            || !formik.values.detalle
        )
    }

    return (
        <FormGeneric onSubmit={formik.handleSubmit}>
            <FieldsContainerForm>

                <FieldGroup>
                    <SelectorGeneric
                        title="Categoría gasto"
                        name="categoria_gasto"
                        id="categoria_gasto"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Test place"
                        options={categoriesOtherExpenses}
                        value={formik.values.categoria_gasto}
                    />
                    {formik.touched.categoria_gasto &&
                        formik.errors.categoria_gasto && (
                            <SpanError text={formik.errors.categoria_gasto} />
                        )}
                </FieldGroup>

                <FieldGroup>
                    <SelectorGeneric
                        title="Tipo de gasto"
                        name="tipo_gasto"
                        id="tipo_gasto"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Test place"
                        options={categoriesOtherExpenses}
                        value={formik.values.tipo_gasto}
                    />
                    {formik.touched.tipo_gasto &&
                        formik.errors.tipo_gasto && (
                            <SpanError text={formik.errors.tipo_gasto} />
                        )}
                </FieldGroup>

                <FieldGroup>
                    <SelectorGeneric
                        title="Centro de costo"
                        name="centro_costo"
                        id="centro_costo"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Test place"
                        options={categoriesOtherExpenses}
                        value={formik.values.centro_costo}
                    />
                    {formik.touched.centro_costo &&
                        formik.errors.centro_costo && (
                            <SpanError text={formik.errors.centro_costo} />
                        )}
                </FieldGroup>

                <FieldGroup>
                    <FieldGeneric
                        title="Fecha"
                        type="date"
                        name="fecha"
                        id="fecha"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Fecha"
                        value={formik.values.fecha}
                    />
                    {formik.touched.fecha &&
                        formik.errors.fecha && (
                            <SpanError text={formik.errors.fecha} />
                        )}
                </FieldGroup>

                <FieldGroup>
                    <FieldGeneric
                        title="Nro. Documento"
                        type="number"
                        name="nro_documento"
                        id="nro_documento"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Nro. Documento"
                        value={formik.values.nro_documento}
                    />
                    {formik.touched.nro_documento &&
                        formik.errors.nro_documento && (
                            <SpanError text={formik.errors.nro_documento} />
                        )}
                </FieldGroup>

                <FieldGroup>
                    <FieldGeneric
                        title="Monto"
                        type="number"
                        name="monto"
                        id="monto"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Monto"
                        value={formik.values.monto}
                    />
                    {formik.touched.monto &&
                        formik.errors.monto && (
                            <SpanError text={formik.errors.monto} />
                        )}
                </FieldGroup>

                <FieldGroup>
                    <FieldGeneric
                        title="Detalle"
                        type="text"
                        name="detalle"
                        id="detalle"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Detalle"
                        value={formik.values.detalle}
                    />
                    {formik.touched.detalle &&
                        formik.errors.detalle && (
                            <SpanError text={formik.errors.detalle} />
                        )}
                </FieldGroup>
            </FieldsContainerForm>

            <BtnContainerForm>
                <BtnSubmit
                    type="reset"
                    text="Cancelar"
                    onClick={() => dispatch(changeToView())}
                    color="#FB7A7A"
                    colorText={"black"}
                    ubication="center"
                />

                <BtnSubmit
                    type="submit"
                    text="Guardar"
                    color="#74E291"
                    colorText={"black"}
                    ubication="center"
                    disabled={disableBtnSubmit()}
                />
            </BtnContainerForm>
        </FormGeneric>
    )
}

export default FormOtherExpenses;