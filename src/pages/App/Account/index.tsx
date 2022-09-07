import * as React from 'react';
import { MobileHeader, Sidebar } from 'modules/navigation';

const MyAccount: React.FC = () => {
    return (
        <>
            <Sidebar/>
            <MobileHeader />
        </>
    )
}

export default MyAccount;