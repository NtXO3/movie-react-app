import * as React from 'react';
import { Navigate } from 'react-router';
import { UserAuth } from '../../../context/AuthContext';

export const PublicRoute: React.FC<RouteProps> = ({ component: Component }) => {
    const { isLoading, user} = UserAuth();

    if (isLoading) {
        return <Component />
    }

    return (
        user ? <Navigate to="/" /> : <Component />
    )
};

export const PrivateRoute: React.FC<RouteProps> = ({ component: Component }) => {
    const { isLoading, user} = UserAuth();

    if (isLoading) {
        return <Component />
    }

    return (
        !user ? <Navigate to="/login" /> : <Component />
    )
};

type RouteProps = {
    component: React.ElementType;
}