import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack 
      borderRadius="10px"
      overflow="hidden"
      alignItems="flex-start"
      backgroundColor="#ffffff"
    >
      <Image src={imageSrc} alt={title} objectFit="cover" borderRadius="10px" />
      <VStack spacing={4} p={4} alignItems="flex-start">
        <Heading as="h3" size="md" color="#000000">{title}</Heading>
        <Text color="#4a5568">{description}</Text>
        <HStack spacing={2} color="#262626" fontWeight="600" alignItems="center">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </HStack>
      </VStack>
    </VStack>
  )
};

export default Card;
