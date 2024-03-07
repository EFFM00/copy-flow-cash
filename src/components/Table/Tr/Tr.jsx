import { Td } from "./styled";

const Tr = ({name="test"}) => {
    return (
        <tr>
            <Td>{name}</Td>
            <td>
                <p>
                    <span>Emwail:</span>
                    email
                </p>
                <p>
                    <span>Tel:</span>
                    telefono
                </p>
            </td>
            <td>empresa</td>
            <td>
                <button
                    type="button"
                    // onClick={() => navigate(`/clientes/id`)}
                >
                    Ver
                </button>
                <button
                    type="button"
                    // onClick={ () => navigate(`editar/id`)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    // onClick={() => handleEliminar(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Tr;
