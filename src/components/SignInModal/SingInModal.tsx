import { Styles } from '../../types/types';
import Button from '../Common/Button/Button';
import TextInput from '../Common/TextInput/TextInput';
import TextBlock from '../Common/TextBlock/TextBlock'; 

interface SignInModalProps {
    show: boolean;
}

const styles: Styles = {
    formContainer: {
        display: 'flex',
    },
    fieldsContainer: {
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    textInput: {
        padding: '10px',
        borderRadius: '20px',
    },
    inlineBlock: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionDivisor: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 20px',
    },
    straightLine: {
        height: '100%',
        borderLeft: '1px solid gray',
    },
    linksContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '250px',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '57px',
    },
}

function SignInModal({ show }: SignInModalProps) {
    if(show)
    return (
    <>
        <div className="modal-fade-backgorund"></div>
        <div className='modal-common' style={styles.formContainer}>
            <form style={styles.fieldsContainer}>
                <TextBlock type="heading">Вхід</TextBlock>
                <TextInput placeholder="Ел. Пошта або телефон"/>
                <TextInput placeholder="Пароль"/>
                <div style={{...styles.inlineBlock, justifyContent: 'space-between'}}>
                    <div style={styles.inlineBlock}>
                        <input type="checkbox" name="" id="" />
                        <TextBlock type="body">Запам'ятати мене</TextBlock>
                    </div>
                    <TextBlock type="link"><a href=''>Нагадати пароль</a></TextBlock>
                </div>
                <Button style='green' placeholder='Увійти' />
                <Button style='text' placeholder='Зареєструватися' />
            </form>
            <div style={styles.sectionDivisor}>
                <div style={styles.straightLine}></div>
                <TextBlock type="body">Або</TextBlock>
                <div style={styles.straightLine}></div>
            </div>
            <div style={styles.linksContainer}>
                <TextBlock type="body">Увійти як користувач</TextBlock>
                <Button style='white' placeholder='Facebook'/>
                <Button style='white' placeholder='Google'/>
            </div>
        </div>
    </> 
    )
    return null;
}

export default SignInModal;
