'use client';

import { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import { Alert, AlertIcon } from "@chakra-ui/react";
import { Contribute } from "../components/Contribute";

export const Pool = () => {
  const { address, isConnected } = useAccount();

  return (
    <>
      {isConnected ? (
        <>
          <Contribute />
        </>
      ) : (
          <Alert status="warning">
            <AlertIcon />
            Please connect your wallet to our DApp.
          </Alert> 
      )}
    </>
  )
}

export default Pool