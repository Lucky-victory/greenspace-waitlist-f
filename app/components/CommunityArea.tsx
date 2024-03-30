import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function CommunityArea() {
  return (
    <Flex
      gap={5}
      borderY={"1px"}
      borderColor={"gs-gray.700"}
      wrap={{ base: "wrap", md: "nowrap" }}
      mt={12}
      py={{ base: 8, md: 12 }}
      px={{ base: 4, md: 12 }}
      justify={"space-between"}
    >
      <Box>
        <Image
          minW={300}
          flexShrink={0}
          src="/assets/community.jpg"
          alt=""
          maxH={{ base: 350, sm: 450 }}
          maxW={{ base: "auto" }}
          rounded={"20px"}
          objectFit={"cover"}
        />
      </Box>
      <Stack maxW={{ md: 550, base: "auto" }}>
        <Heading mb={5} size={"2xl"}>
          Community For Everyone
        </Heading>
        <Text mb={5} maxW={{ lg: 500, base: "auto" }} lineHeight={"taller"}>
          We&apos;re building a nurturing space centered on healthy eating and
          longevity—a haven where everyone&apos;s well-being shines. Here, join
          others passionate about nourishing their bodies for vibrant, enduring
          health. Whether you&apos;re into plant-based eats, mindful dining, or
          nutritional science, find a supportive community to share insights and
          discoveries.
        </Text>
        <Button
          textDecor={"none!important"}
          as={"a"}
          href={"#waitlist-form"}
          alignSelf={"flex-start"}
          size={"lg"}
        >
          Join the waitlist
        </Button>
      </Stack>
    </Flex>
  );
}
