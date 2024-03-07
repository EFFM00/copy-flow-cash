import useScreenSize from "../../hooks/useScreenSize";
import MenuContent from "../Menu/Menu";
import MenuDesktop from "../MenuDesktop/MenuDesktop";
import MenuMobile from "../MenuMobile/MenuMobile";

const MenuByWidth = () => {
    const { width } = useScreenSize();

    return (
        <>
            {width <= 768 ? (
                <MenuMobile>
                    <MenuContent />
                </MenuMobile>
            ) : (
                <MenuDesktop>
                    <MenuContent />
                </MenuDesktop>
            )}
        </>
    );
};

export default MenuByWidth;
