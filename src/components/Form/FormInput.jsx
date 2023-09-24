import { oneOf, string } from "prop-types";
import S from "./FormInput.module.css";

export function FormInput({ type = "text", name, id, ...restProps }) {

	return (
		<div className={S.Wrapper}>
			<label htmlFor={id} className={S.label}></label>
			<input
				type={type}
				name={name}
				id={id}
				className={S.input}
				{...restProps}
			/>
		</div>
	);
}

FormInput.propTypes = {
	type: oneOf(["text", "password", "email", "username"]),
	id: string.isRequired,
	name: string.isRequired,
	label: string.isRequired,
};
