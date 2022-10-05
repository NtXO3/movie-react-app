import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';
import { validation } from 'services/validation';
import { FormContainer } from 'components/common/form/FormContainer/styled';
import { Input } from 'components/common/form/input';
import { Button } from 'components/common/interaction/Button';

export const RegisterForm: React.FC<RegisterFormProps> = ({ firstTime, authFn }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = React.useState(false);
    const navigate = useNavigate()

    const onSubmit = async (data: any) => {
        if (data.repeatPassword && data.password !== data.repeatPassword) {
            throw new Error("Passwords don't match")
        }
        setIsLoading(true);
        try {
            await authFn(data.email, data.password)
            setIsLoading(false);
            navigate('/')
        } catch (err) {
            console.error(err)
            setIsLoading(false)
        }
    }

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Input 
                {...register('email', { ...validation.required, ...validation.email })} 
                placeholder="Email address" 
                margin="0 0 0 0"
                isError={!!errors?.email}
                error={errors?.email}
            />
            <Input 
                {...register('password', { ...validation.required, ...validation.password })} 
                placeholder="Password" 
                margin="1rem 0 0 0"
                type="password"
                isError={!!errors?.password}
                error={errors?.password}
            />
            {
                firstTime && 
                <Input 
                    {...register('repeatPassword', { ...validation.required, ...validation.password })} 
                    placeholder="Repeat password" 
                    margin="1rem 0 0 0"
                    type="password"
                    isError={!!errors?.repeatPassword}
                    error={errors?.repeatPassword}
                />
            }
            <Button type="submit" width='100%' margin="2rem 0 1.5rem 0" isLoading={isLoading}>
                {firstTime ? 'Create an account' : 'Log In'}
            </Button>
        </FormContainer>
    )
};

type RegisterFormProps = {
    firstTime?: boolean;
    authFn: (email: string, password: string) => void;
}