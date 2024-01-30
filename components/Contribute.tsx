'use client'

import { Flex, Text, Input, Button, Heading, useToast, Toast } from "@chakra-ui/react";
import { useState } from "react";
// Constants & Types
import { contractAddress, abi } from "@/constants";
// Viem
import { parseEther } from "viem";
// Wagmi
import { prepareWriteContract, writeContract, waitForTransaction } from "@wagmi/core";

export const Contribute = () => {
  const toast = useToast();

  const [amount, setAmount] = useState<string>("");

  const contribute = async () => {
    try {
      let contribution = parseEther(amount);
      const { request } = await
        prepareWriteContract({
          address: contractAddress,
          abi: abi,
          functionName: "contribute",
          value: contribution
        })
      const { hash } = await writeContract(request);
      const data = await waitForTransaction({
          hash: hash
      })
      setAmount("");
      toast({
          title: 'Contribution sent.',
          description: "Thank you for your support!",
          status: 'success',
          duration: 4000,
          isClosable: true,
      })   
    }
    catch (error) {
      toast({
          title: 'Transaction Error.',
          description: "There was a problem with the transaction.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
    }
  }

  return (
    <>
      <Heading mt="2rem">
        Contribute
      </Heading>
      <Flex mt="1rem">
        <Input placeholder="Amount to contribute (ETH)"
               size="lg"
               value={amount}
               onChange={(e) => setAmount(e.target.value)}
        />
        <Button colorScheme="purple" size="lg" onClick={() => contribute()}>Contribute</Button>
      </Flex>
    </>
  )
}

export default Contribute