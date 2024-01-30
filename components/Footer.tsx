'use client'

import { Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex p="2rem" alignItems="center" justifyContent="center">
      <Text>&copy Ed Sabhin {new Date().getFullYear()}</Text>
    </Flex>
  )
}

export default Footer