import { Dropdown } from "./styled"

const DropdownMenu = ({children, isOpen}) => {
  return (
    isOpen && <Dropdown >
        {children}
    </Dropdown>
  )
}

export default DropdownMenu