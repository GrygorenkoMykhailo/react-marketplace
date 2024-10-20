import { Styles } from "../../../types/types";

const styles: Styles = {
    textInput: {
        padding: '15px',
        borderRadius: '20px',
        border: '1px solid rgba(0, 0, 0, 0.5)',
    },
}

interface TextInputProps {
    placeholder: string;
}

function TextInput({ placeholder }: TextInputProps) {
    return <input type="text" style={styles.textInput} placeholder={placeholder}/>
}

export default TextInput;