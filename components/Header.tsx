'use client'

import { Flex, Text } from "@chakra-ui/react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Header = () => {
  return (
    <Flex p="2rem" justifyContent="space-between" align-items="center" width="100%">
      <Text as="b">Logo</Text>
      <ConnectButton />
    </Flex>
  )
}

export default Header