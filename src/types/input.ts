export type InputProps = {
    placeholder?: string;
    disabled?: boolean;
    width?: string;
    isError?: boolean;
    required?: boolean;
    value?: string | number;
    onChange?: (e: any) => void;
    type?: 'email' | 'password' | 'text' | 'number';
    margin?: string;
    error?: any;
};