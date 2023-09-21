import {oneOf, string}from "prop-types";
import S from "./ConfirmButton.module.css";

export function ConfirmButton({type="text"}){

    return (
        <div>
            <button
            type={type}
            className={S.confirmButton}
            >
            </button>
        </div>
    )
}

ConfirmButton.propTypes={
    type: oneOf(["submit", "button"]),
};

export default ConfirmButton;