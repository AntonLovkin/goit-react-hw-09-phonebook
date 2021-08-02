import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";

export default function PrivateRoute ({
    isAuthenticated,
    redirectTo,
    children,
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated)
    return (
        <Route {...routeProps}>   
            {isLoggedIn ? children : <Redirect to={redirectTo} />}
        </Route>)
}

// const mapStateToProps = state => ({
//     isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);