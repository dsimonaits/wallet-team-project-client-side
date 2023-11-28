import { Box, Divider, Heading, Progress, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ConnectingToDB = () => {
  const [progressPercent, setProgressPercent] = useState(0);
  const [funnySentenceQueue, setFunnySentenceQueue] = useState(0);

  const funnySentences = [
    {
      text: 'Calculating the best interest for your data...',
    },
    {
      text: 'Polishing the binary coins for a shiny transaction...',
    },
    {
      text: 'Teaching the server to speak the language of finance fluently...',
    },
    {
      text: 'Our algorithms are doing push-ups to handle your financial heavy lifting...',
    },
    {
      text: 'The data elves are counting every bit of your financial awesomeness...',
    },
    {
      text: 'Finalizing, almost done...',
    },
  ];

  useEffect(() => {
    const progressID = setInterval(() => {
      setProgressPercent(prev => prev + 0.03);
      if (progressPercent > 10 && progressPercent <= 20)
        setFunnySentenceQueue(1);
      if (progressPercent > 20 && progressPercent <= 40)
        setFunnySentenceQueue(2);
      if (progressPercent > 40 && progressPercent <= 60)
        setFunnySentenceQueue(3);
      if (progressPercent > 60 && progressPercent <= 80)
        setFunnySentenceQueue(4);
      if (progressPercent > 100) setFunnySentenceQueue(5);
    }, 10);

    if (progressPercent === 100) {
      clearInterval(progressID);
    }

    return () => {
      clearInterval(progressID);
    };
  }, [progressPercent]);

  return (
    <Box
      as="section"
      position="absolute"
      top="200px"
      left="50%"
      transform="translateX(-50%)"
      width={['260px', '400px', '600px']}
      height="60vh"
      background="secondary"
    >
      <Box px="20px" style={{ width: ['200px', '400px', '600px'] }}>
        <Heading as="h1" fontSize={[15, 20, 25]} textAlign="center">
          Connecting to server...
        </Heading>
        <Divider my="10px" />
        <Progress colorScheme="blue" size="sm" value={progressPercent} />
        <Text textAlign="center" mt="20px" fontSize={[10, 15, 20]}>
          {funnySentences[funnySentenceQueue].text}
        </Text>
      </Box>
    </Box>
  );
};

export default ConnectingToDB;
