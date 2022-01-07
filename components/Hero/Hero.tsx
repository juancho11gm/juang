import { AttachmentIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Stack, Heading, Image, Text } from '@chakra-ui/react';
import HeroImage from '../../assets/hero.jpeg';

const Hero = (): JSX.Element => (
  <Container maxW="full" pt={{ base: '0', lg: '10' }} pb="10">
    <Stack direction={{ base: 'column', lg: 'row' }}>
      <Box mb="10">
        <Heading fontSize="3rem">Yo, I&apos;m Juan Sebastián González. 😬</Heading>
        <Text py={6}>
          I&apos;m a Software Engineer, with emphasis on Information Systems and Software
          Development. 💻
          <br />
          <br />I love to create great experiences through the software. I like to keep learning
          about tech, it helps me to grow and to improve my professional quality.
        </Text>
        <Button
          as="a"
          href="https://drive.google.com/file/d/1inHHFdEUMQqsZuiBpE1hFgFjLgCOlFtS/view"
          leftIcon={<AttachmentIcon />}
          variant="primary"
        >
          Check my resumé
        </Button>
      </Box>
      <Box minW={{ base: 'auto', lg: '512' }}>
        <Image
          boxShadow="0 20px 25px -5px rgb(0 0 0 / 10%), 0 10px 10px -5px rgb(0 0 0 / 4%)"
          borderRadius="0.25rem"
          objectFit="cover"
          width="100%"
          height="100%"
          src={HeroImage.src}
          alt="hero image"
        />
      </Box>
    </Stack>
  </Container>
);

export default Hero;
