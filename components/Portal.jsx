import { createPortal } from "react-dom";

const Portal = (props) => {
    const el = document.getElementById(props.target);

    
    return createPortal(props.children, el);
}

export default Portal;