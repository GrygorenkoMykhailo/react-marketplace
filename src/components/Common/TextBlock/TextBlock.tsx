import { Styles } from "../../../types/types";

const styles: Styles = {
    heading: {
        fontSize: '30px',
        margin: '5px 0',
    },
    body: {
        color: 'gray',
        fontSize: '16px',
        textAlign: 'center',
    },
    link: {
        color: 'blue',
        textDecoration: 'underline',
    },
};

interface TextBlockProps {
    type: 'heading' | 'body' | 'link';
    children: React.ReactNode;
}

const stylesMap = {
    heading: styles.heading,
    body: styles.body,
    link: styles.link,
};

function TextBlock({ type, children }: TextBlockProps) {
    return <p style={stylesMap[type]}>{children}</p>;
}

export default TextBlock;