import { Div, Image } from "./styled"

const Spinner = ({text="", image}) => {
  return (
    <Div>
        <Image src={image}/>
        {text && <p>{text}</p>}
    </Div>
  )
}

export default Spinner