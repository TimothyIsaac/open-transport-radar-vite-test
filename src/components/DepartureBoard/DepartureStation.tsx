import { Box, Flex, Heading, Icon, Spinner, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaBus, FaLocationArrow } from "react-icons/fa";
import ProductIcon from "../ProductIcon/ProductIcon";
import useDepartures from "./useDepartures";

function DepartureStation({ station }: { station: Hafas_Stations.Station }) {
  const { name, distance, products, id } = station;

  const { departures, isLoading } = useDepartures(id);

  return (
    <Box rounded="md" bgColor="white" m="2" p="1">
      <Flex align="center" justify="space-between">
        <Flex align="center">
          <ProductIcon product={products} />
          <Heading size="sm">{name}</Heading>
        </Flex>
        <Flex align="center">
          <Icon mr="2" size="xs" as={FaLocationArrow} />
          <Text>{distance}m </Text>
        </Flex>
      </Flex>
      {isLoading ? (
        <Spinner />
      ) : (
        departures.map((departure) => <Text>{departure.line.name}</Text>)
      )}
    </Box>
  );
}

export default DepartureStation;
