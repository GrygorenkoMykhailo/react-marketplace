import { Styles } from "../../../types/types";

const styles: Styles = {
    buttonGreen: {
        color: 'white',
        padding: '20px',
        borderRadius: '30px',
        backgroundColor: 'green',
        border: '0',
    },
    buttonText: {
        border: '0',
        color: 'blue',
    },
    buttonWhite: {
        color: 'blue',
        padding: '15px',
        borderRadius: '30px',
        backgroundColor: 'white',
        fontSize: '20px',
        border: '.3px solid gray',
    }
}

interface ButtonProps {
    style: 'green' | 'text' | 'white';
    placeholder: string;
}

const stylesMap = {
    'green': styles.buttonGreen,
    'text': styles.buttonText,
    'white': styles.buttonWhite,
}

function Button({ style, placeholder }: ButtonProps) {
    return (
        <button style={stylesMap[style]}>{placeholder}</button>
    )
}

export default Button