'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Project Portfolio</Heading>
          <Text>We firmly believe that technology can be a powerful force for positive change, and we are dedicated to using our expertise to create a sustainable and thriving future for generations to come. Together, with our partners and clients, we are determined to contribute to the sustainability of the Earth and build a better world for all.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Glass Heart</TestimonialHeading>
              <TestimonialText>
              Our blockchain projects focus on decentralization, transparency, and immutability. We build decentralized applications (dApps) that enhance security and empower users with full control over their data. Whether its supply chain management, digital identity, financial services, or decentralized finance (DeFi),
               our blockchain initiatives are poised to redefine industries. providing a Donations Platform.
              </TestimonialText>
            </TestimonialContent>
            
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>BioWear technologies</TestimonialHeading>
              <TestimonialText>
              We envision a future where ML-driven medical diagnosis becomes an integral part of healthcare, empowering clinicians with advanced tools to provide personalized and efficient care. By combining the expertise of healthcare professionals with the capabilities of ML algorithms, we aim to establish a new standard of precision and speed in medical diagnostics.
              </TestimonialText>
            </TestimonialContent>
            
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                Thinkr:Empowering Research Collaboration!
          </TestimonialHeading>
              <TestimonialText>
              Unlock the full potential of collaboration and revolutionize the way researchers work with Thinkr – the ultimate platform designed to bring scholars together, facilitating seamless sharing and collaboration on groundbreaking research. Say goodbye to isolated research efforts and embrace a world of connected intellects, where discoveries are amplified through collective knowledge.
              </TestimonialText>
            </TestimonialContent>
            
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}