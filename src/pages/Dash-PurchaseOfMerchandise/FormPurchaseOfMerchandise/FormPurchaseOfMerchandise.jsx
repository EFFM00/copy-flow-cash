import BtnContainerForm from "../../../components/BtnContainerForm/BtnContainerForm";
import BtnSubmit from "../../../components/BtnSubmit/BtnSubmit";
import FieldGeneric from "../../../components/FieldGeneric/FieldGeneric";
import FieldsContainerForm from "../../../components/FieldsContainerForm/FieldsContainerForm";
import FormGeneric from "../../../components/FormGeneric/FormGeneric";

const FormPurchaseOfMerchandise = () => {
    return (
        <FormGeneric>
            <FieldsContainerForm>
                <FieldGeneric
                title="Fecha"
                type="date"
                name="date"
                id="date"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Fecha"
                />

                <FieldGeneric
                title="Número de documento"
                type="number"
                name="number"
                id="number"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Número de documento"
                />

                <FieldGeneric
                title="Monto"
                type="number"
                name="amount"
                id="amount"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Monto"
                />
                
                <FieldGeneric
                title="Detalles"
                type="text"
                name="details"
                id="details"
                onChange={() => {}}
                onBlur={() => {}}
                placeholder="Detalles"
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
    );
};

export default FormPurchaseOfMerchandise;