import React from "react";
// import styled from "styled-components";
// import "wicg-inert";

// import Portal from "../portal";

const TopicsModal = (props) => {
  const [active, setActive] = React.useState(false);
  const { open, onClose, locked } = props;
  const backdrop = React.useRef(null);

  React.useEffect(() => {
    const { current } = backdrop;

    const transitionEnd = () => setActive(open);

    const keyHandler = (e) =>
      !locked && [27].indexOf(e.which) >= 0 && onClose();

    const clickHandler = (e) => !locked && e.target === current && onClose();

    if (current) {
      current.addEventListener("transitionend", transitionEnd);
      current.addEventListener("click", clickHandler);
      window.addEventListener("keyup", keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        document.activeElement.blur();
        setActive(open);
        document.querySelector("#root").setAttribute("inert", "true");
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener("transitionend", transitionEnd);
        current.removeEventListener("click", clickHandler);
      }

      document.querySelector("#root").removeAttribute("inert");
      window.removeEventListener("keyup", keyHandler);
    };
  }, [open, locked, onClose]);

  return (
    <React.Fragment>
      {(open || active) && (
        <Portal className="modal-portal">
          {/* <Backdrop ref={backdrop} className={active && open && "active"}>
            <Content className="modal-content">{props.children}</Content>
          </Backdrop> */}
        </Portal>
      )}
    </React.Fragment>
  );
}

export default TopicsModal;