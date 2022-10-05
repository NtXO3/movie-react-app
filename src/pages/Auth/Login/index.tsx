import * as React from 'react';
import { useNavigate } from 'react-router';
import { Card } from 'components/common/card';
import { Heading } from 'components/common/typography';
import { AuthPageWrapper, FormLink, Logo } from 'components/modules/register';
import { RegisterForm as LoginForm } from 'components/modules/RegisterForm';
import AppLogo from 'assets/Logo.svg'
import { UserAuth } from 'context/AuthContext';
import { CircleButton } from 'components/common/circleButton';
import GoogleIcon from 'assets/google-icon.png'

const Login = () => {
    const navigate = useNavigate();
    const { logIn, signInWithGoogle } = UserAuth();

    return (
        <AuthPageWrapper>
            <Logo src={AppLogo}/>
            <Card>
                <Heading size="l">Log In</Heading>
                <LoginForm authFn={logIn}/>
                <FormLink size="m">Don't have an account yet? <span onClick={() => navigate('/sign-up')}>Sign up</span></FormLink>
                <FormLink size="m">Or Sign In with
                    <CircleButton onClick={signInWithGoogle}>
                        <img src={GoogleIcon} alt="Google Logo" />
                    </CircleButton>
                </FormLink>
            </Card>
        </AuthPageWrapper>
    )
}

export default Login;