import TitleSection from "../../components/TitleSection/TitleSection";
import LinkWithIcon from "../LinkWithIcon/LinkWithIcon";
import AddRegistry from "../../assets/icon_plus_circle_.svg"
import ReturnViewMode from "../../assets/icon_Arrow Circle Left_.svg"
import { HeaderCont } from "./styled";

const HeaderSection = ({text, btnTextPrimary, btnTextSecondary}) => {
    return (
        <HeaderCont>
            <TitleSection text={text} ubication="left"/>
            <LinkWithIcon 
            btnTextPrimary={btnTextPrimary} 
            btnTextSecondary={btnTextSecondary} 
            iconPathPrimary={AddRegistry}
            iconPathSecondary={ReturnViewMode}
            />
        </HeaderCont>
    )
}

export default HeaderSection;