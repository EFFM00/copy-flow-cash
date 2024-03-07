import BtnContainerForm from "../../../components/BtnContainerForm/BtnContainerForm"
import BtnSubmit from "../../../components/BtnSubmit/BtnSubmit"
import FieldGeneric from "../../../components/FieldGeneric/FieldGeneric"
import FieldsContainerForm from "../../../components/FieldsContainerForm/FieldsContainerForm"
import FormGeneric from "../../../components/FormGeneric/FormGeneric"

const FormRemunerations = () => {
    return (
        <FormGeneric>
            <FieldsContainerForm>

                <FieldGeneric
                title="Fecha de pago"
                type="date"
                name="fecha_pago"
                id="fecha_pago"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Fecha de pago"
                />

                <FieldGeneric
                title="Anticipo"
                type="number"
                name="anticipo"
                id="anticipo"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Anticipo"
                />

                <FieldGeneric
                title="Funcionario"
                type="text"
                name="funcionario"
                id="funcionario"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Funcionario"
                />

                <FieldGeneric
                title="RUT"
                type="text"
                name="rut"
                id="rut"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="RUT"
                />

                <FieldGeneric
                title="Sueldo"
                type="number"
                name="sueldo"
                id="sueldo"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Sueldo"
                />

                <FieldGeneric
                title="Costo total"
                type="number"
                name="costo_total"
                id="costo_total"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Costo total"
                />

                <FieldGeneric
                title="D014 - Anticipo de sueldos"
                type="text"
                name="d014_anticipo"
                id="d014_anticipo"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="D014 - Anticipo de sueldos"
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

export default FormRemunerations;