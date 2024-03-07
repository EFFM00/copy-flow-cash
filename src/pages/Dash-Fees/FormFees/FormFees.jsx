import BtnContainerForm from "../../../components/BtnContainerForm/BtnContainerForm"
import BtnSubmit from "../../../components/BtnSubmit/BtnSubmit"
import FieldGeneric from "../../../components/FieldGeneric/FieldGeneric"
import FieldsContainerForm from "../../../components/FieldsContainerForm/FieldsContainerForm"
import FormGeneric from "../../../components/FormGeneric/FormGeneric"

const FormFees = () => {
    return (
        <FormGeneric>
            <FieldsContainerForm>
                <FieldGeneric
                title="Categoría gasto"
                type="text"
                name="categoria_gasto"
                id="categoria_gasto"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Categoría gasto"
                />

                <FieldGeneric
                title="Tipo de gasto"
                type="text"
                name="tipo_gasto"
                id="tipo_gasto"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Tipo de gasto"
                />

                <FieldGeneric
                title="Centro de costo"
                type="text"
                name="centro_costo"
                id="centro_costo"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Centro de costo"
                />

                <FieldGeneric
                title="Fecha"
                type="date"
                name="fecha"
                id="fecha"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Fecha"
                />

                <FieldGeneric
                title="Nro. Documento"
                type="number"
                name="nro_documento"
                id="nro_documento"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Nro. Documento"
                />

                <FieldGeneric
                title="Monto"
                type="number"
                name="monto"
                id="monto"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Monto"
                />

                <FieldGeneric
                title="Detalle"
                type="number"
                name="detalle"
                id="detalle"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Detalle"
                />
            </FieldsContainerForm>
            <BtnContainerForm>
                <BtnSubmit
                type="reset" 
                text="Cancelar" 
                onClick={() => {}} 
                color="#FB7A7A" 
                colorText={"black"} 
                ubication="center"
                />

                <BtnSubmit
                type="submit" 
                text="Guardar" 
                onClick={() => {}} 
                color="#74E291" 
                colorText={"black"} 
                ubication="center"
                />
            </BtnContainerForm>
        </FormGeneric>
    )
}

export default FormFees;