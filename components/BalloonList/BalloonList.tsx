import { List } from '@chakra-ui/react';
import Balloon from '../Balloon/Balloon';

const BalloonList = () => (
  <List aria-hidden="true" b="0" l="0" p="0" position="fixed" r="0" w="full" zIndex="-1">
    <Balloon animationDelay="0s" height="80px" left="25%" width="80px" />
    <Balloon animationDelay="2s" animationDuration="12s" height="20px" left="10%" width="20px" />
    <Balloon animationDelay="4s" height="20px" left="70%" width="20px" />
    <Balloon animationDelay="0s" animationDuration="18s" height="60px" left="40%" width="60px" />
    <Balloon animationDelay="0s" height="20px" left="65%" width="20px" />
    <Balloon animationDelay="3s" height="110px" left="75%" width="110px" />
    <Balloon animationDelay="7s" height="150px" left="35%" width="150px" />
    <Balloon animationDelay="15s" animationDuration="45s" height="25px" left="50%" width="25px" />
    <Balloon animationDelay="2s" animationDuration="35s" height="15px" left="20%" width="15px" />
    <Balloon animationDelay="0s" animationDuration="11s" height="150px" left="-5%" width="150px" />
  </List>
);

export default BalloonList;
