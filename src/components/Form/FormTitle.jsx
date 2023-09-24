import S from "./FormTitle.module";

export function FormTitle(title = "text") {
	return (<d><h1 className={S.title}>{title}</h1></d);
}

FormTitle.propTypes = {
	type: "text",
};
