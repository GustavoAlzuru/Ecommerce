import Alert from 'react-bootstrap/Alert';

function AlertCustom({text, variant}){
    return(
        <Alert text={text} variant={variant}>
          {text}
        </Alert>
    )
}
export default AlertCustom 