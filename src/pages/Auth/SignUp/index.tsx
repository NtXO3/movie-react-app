import * as React from 'react';
import { AuthPageWrapper, FormLink, Logo } from 'components/modules/register';
import AppLogo from 'assets/Logo.svg'
import { Heading } from 'components/common/typography';
import { Card } from 'components/common/card';
import { RegisterForm as SignUpForm } from 'components/modules/RegisterForm';
import { useNavigate } from 'react-router';
import { UserAuth } from 'context/AuthContext';

const SignUp: React.FC = () => {
    const navigate = useNavigate();
    const { signUp } = UserAuth();

    return (
        <AuthPageWrapper>
            <Logo src={AppLogo}/>
            <Card>
                <Heading size="l">Sign Up</Heading>
                <SignUpForm authFn={signUp} firstTime/>
                <FormLink size="m">Already have an account? <span onClick={() => navigate('/login')}>Login</span></FormLink>
            </Card>
        </AuthPageWrapper>
    )
}

export default SignUp;