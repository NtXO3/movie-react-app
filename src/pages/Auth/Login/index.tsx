import * as React from 'react';
import { useNavigate } from 'react-router';
import { Card } from 'common/card';
import { Heading } from 'common/typography';
import { AuthPageWrapper, FormLink, Logo } from 'modules/register';
import { RegisterForm as LoginForm } from 'modules/RegisterForm';
import AppLogo from 'assets/Logo.svg'
import { UserAuth } from 'context/AuthContext';

const Login = () => {
    const navigate = useNavigate();
    const { logIn } = UserAuth();

    return (
        <AuthPageWrapper>
            <Logo src={AppLogo}/>
            <Card>
                <Heading size="l">Log In</Heading>
                <LoginForm authFn={logIn}/>
                <FormLink size="m">Don't have an account yet? <span onClick={() => navigate('/sign-up')}>Sign up</span></FormLink>
            </Card>
        </AuthPageWrapper>
    )
}

export default Login;