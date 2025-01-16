import { Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Button } from './ui/button';

interface Props {
  children: string | undefined;
  maxChars?: number;
}

const ExpandableText = ({ children: text, maxChars = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  if (text.length <= maxChars) return <Text>{text}</Text>;

  const formattedText = expanded ? text : `${text.substring(0, maxChars)}...`;

  return (
    <>
      <Text>
        {formattedText}
        <Button
          size={'2xs'}
          fontWeight='bold'
          colorPalette={'yellow'}
          marginStart={2}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Read More'}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
