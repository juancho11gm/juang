import { ListItem, keyframes, useColorModeValue } from '@chakra-ui/react';
import { BallonType } from '../../types/Ballon';

const float = keyframes`
  0% {
    opacity: .5;
    transform: translateY(0) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-1200px) rotate(720deg);
  }
`;

const Balloon = (props: BallonType): JSX.Element => {
  const { animationDuration = '30s', animationDelay, height, left, width } = props;
  const floatAnimation = `${float} ${animationDuration} linear infinite ${animationDelay}`;
  const bgColor = useColorModeValue('tertiary', 'secondary');
  console.log(bgColor);
  return (
    <ListItem
      background={bgColor}
      animation={floatAnimation}
      borderRadius="40%"
      bottom="-200px"
      display="block"
      position="absolute"
      left={left}
      height={height}
      width={width}
    />
  );
};

export default Balloon;
