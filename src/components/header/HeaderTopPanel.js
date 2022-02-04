import VectorDawnSvgIcon from "../../resourses/icons/VectorDawnSvgIcon";

export default function HeaderTopPanel () {
    return(
        <div className="header-top-panel">
            <div className="top-panel-contact-number">
                <span>Call Us:</span>
                <span>+374 33 33 33 33</span>
            </div>
            <div className="top-panel-languages">
                <span>ENG</span>
                <VectorDawnSvgIcon/>
            </div>
        </div>
    )
}