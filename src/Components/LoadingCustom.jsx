import Spinner from 'react-bootstrap/Spinner';

function LoadingCustom({children, isLoading}){
    if(isLoading){
        return(
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }else{
        return(
            <>
                {children}
            </>
        )
    }
}
export default LoadingCustom