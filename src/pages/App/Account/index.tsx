import * as React from 'react';
import { MobileHeader, Sidebar } from 'components/modules/navigation';

const MyAccount: React.FC = () => {
    return (
        <>
            <Sidebar/>
            <MobileHeader />
        </>
    )
}

export default MyAccount;