import * as React from "react";
import { MobileHeader, Sidebar } from "components/modules/navigation";
import { MoviesWrapper } from "components/common";
import { Heading } from "components/common/typography";

const MyAccount: React.FC = () => {
  return (
    <>
      <Sidebar />
      <MoviesWrapper>
        <MobileHeader />
        <Heading size="l">My Account</Heading>
      </MoviesWrapper>
    </>
  );
};

export default MyAccount;
