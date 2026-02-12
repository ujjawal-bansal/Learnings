import {useRouteError} from "react-router-dom";
// useRouteError is a hook provided by react-router-dom to get the error object when there is an error in the route
// it is a standard in the industry to create a component named Error to handle all the errors in the application

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>OOPS!!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status + " : " + err.statusText}</h3>
        </div>
    );
} 

export default Error;