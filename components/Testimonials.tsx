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
          <Heading>Our Vision</Heading>
          <Text>Our vision is to create a decentralized research platform that is used by researchers all over the world. We want Thinkr to be a platform where researchers can share their work, collaborate with others, and get feedback on their research. We also want Thinkr to be a platform where researchers can be rewarded for their contributions to the scientific community.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Tokenization</TestimonialHeading>
              <TestimonialText>
              : Thinkr is using tokenization to create a new way for researchers to be rewarded for their contributions to the platform. This could include things like rewards for publishing research papers, participating in peer review, and contributing to the development of the platform.
              </TestimonialText>
            </TestimonialContent>
            
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>A peer review system</TestimonialHeading>
              <TestimonialText>
              peer review system allows researchers to get feedback on their work from other researchers. This can help researchers to improve their research and make it more impactful.
              </TestimonialText>
            </TestimonialContent>
            
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
              Machine learning
          </TestimonialHeading>
              <TestimonialText>
              Thinkr uses machine learning to power a number of features, such as the ability to recommend relevant research papers, identify trends in research, and generate summaries of research papers. This helps researchers to find the information they need more quickly and easily.
              </TestimonialText>
            </TestimonialContent>
            
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}