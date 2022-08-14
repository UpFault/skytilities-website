import { Flex, Text, Heading, Image, useBreakpointValue, Box, Button, Link } from '@chakra-ui/react'
import { discordConfig } from '@configs/discord'
import React from 'react'

import { Parallax } from 'react-scroll-parallax'

const parallaxSpeed = -30

type HeroBannerProps = {
    iconUrl: string
    name: string
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ iconUrl, name }) => {

    const iconSize = useBreakpointValue({ base: 64, md: 80, lg: 112 })

	return (<>

        <Box 
            as="section" 
            zIndex={-1} 
            sx={{ transformStyle: "preserve-3d" }}
            w='100%'
        >    

            <Box
                as={Parallax}
                speed={parallaxSpeed}
                bgImage='/assets/images/homePageBackground.svg'
                // bgAttachment='fixed'
                position="absolute"
                inset={0}
                bgSize={{ base: "cover", lg: "calc(100% - 2.25rem) auto" }}
                bgRepeat="no-repeat"
                bgPosition="top 1.75rem center"
                opacity={0.04}
                zIndex={-1}
                w='100%'
            />
            
            <Box
                as={Parallax}
                speed={parallaxSpeed}
                position="absolute"
                inset={0}
                bgGradient="linear-gradient(to top, var(--chakra-colors-gray-800), transparent)"
                
            />

            <Flex
                as={Parallax}
                speed={parallaxSpeed / 2}
                position="relative"
                direction="column"
                alignItems="center"
                justifyContent="center"
                mx="auto"
                px={6}
                w="full"
                maxW={{
                base: "340px",
                md: "lg",
                lg: "container.sm",
                }}
                height="100vh"
            >

                <Image
                    src={iconUrl}
                    alt={name}
                    w={iconSize} h={iconSize}
                    borderRadius='50%'
                    mb='24px'
                />

                <Heading
                    as="h2"
                    mb={6}
                    fontFamily='Dystopian'
                    fontSize={{ base: "2xl", md: "4xl", lg: "7xl" }}
                    lineHeight="95%"
                    textAlign="center"
                >
                    {name}
                </Heading>

                <Text
                    mb={12}
                    maxW="container.lg"
                    color="gray.500"
                    fontSize={{ base: "lg", lg: "2xl" }}
                    fontWeight="bolder"
                    textAlign="center"
                    fontFamily='Inter var,Inter,sans-serif'
                    lineHeight={{ base: "125%", md: "115%" }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tincidunt urna, ut vulputate tortor sollicitudin eu.
                </Text>

                <Link
                    w={{ base: "full", sm: "unset" }}
                    p='20px'
                    bg='discord.500'
                    borderRadius='12px'
                    size={useBreakpointValue({ base: "md", md: "xl", xl: "2xl" })}
                    fontWeight="bold"
                    _hover={{ bg: 'discord.600' }}
                    href={discordConfig.inviteLink}
                    target="_blank"
                >
                    <Text fontFamily='Inter var,Inter,sans-serif' fontWeight='bold' color='white'>Add to Discord</Text>
                </Link>

            </Flex>

        
        
        </Box>
    </>)
}