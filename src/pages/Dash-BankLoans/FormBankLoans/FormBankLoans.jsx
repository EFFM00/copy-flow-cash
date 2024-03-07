import BtnContainerForm from "../../../components/BtnContainerForm/BtnContainerForm"
import BtnSubmit from "../../../components/BtnSubmit/BtnSubmit"
import FieldGeneric from "../../../components/FieldGeneric/FieldGeneric"
import FieldsContainerForm from "../../../components/FieldsContainerForm/FieldsContainerForm"
import FormGeneric from "../../../components/FormGeneric/FormGeneric"

const FormBankLoans = () => {
    return (
        <FormGeneric>
            <FieldsContainerForm>

                <FieldGeneric
                title="Banco"
                type="text"
                name="banco"
                id="banco"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Banco"
                />

                <FieldGeneric
                title="Tipo de crédito"
                type="text"
                name="tipo_credito"
                id="tipo_credito"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Tipo de crédito"
                />

                <FieldGeneric
                title="Categoría de crédito"
                type="text"
                name="categoria_credito"
                id="categoria_credito"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Categoría de crédito"
                />

                <FieldGeneric
                title="Vencimiento"
                type="date"
                name="vencimiento"
                id="vencimiento"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Vencimiento"
                />

                <FieldGeneric
                title="Cuota"
                type="number"
                name="cuota"
                id="cuota"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Cuota"
                />

                <FieldGeneric
                title="Capital cuota"
                type="number"
                name="capital_cuota"
                id="capital_cuota"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Capital cuota"
                />

                <FieldGeneric
                title="Total a pagar"
                type="text"
                name="total_pagar"
                id="total_pagar"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Total a pagar"
                />

                <FieldGeneric
                title="Interés"
                type="number"
                name="interes"
                id="interes"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Interés"
                />

                <FieldGeneric
                title="Observaciones"
                type="text"
                name="observaciones"
                id="observaciones"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Observaciones"
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

export default FormBankLoans;