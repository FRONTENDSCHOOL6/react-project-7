import { useId } from "react";
import { oneOf, string } from "prop-types";
import S from "./InputForm.module.css";

export function InputForm({ type = "text", name = null, ...restProps }) {
	const id = useId();

	return (
		<div className={S.wrapper}>
			<input
				type={type}
				name={name}
				className={S.input}
				{...restProps}
			/>
		</div>
	);
}

InputForm.propTypes = {
	type: oneOf(["username", "password", "passwordConfirm", "email"]),
	name: string.isRequired,
};

export default InputForm;