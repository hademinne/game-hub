import {
  List,
  ListItem,
  HStack,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  const skeletonCount = 10; // Number of skeleton items

  return (
    <List>
      {[...Array(skeletonCount)].map((_, index) => (
        <ListItem key={index} paddingY="5px">
          <HStack>
            <SkeletonCircle size="32px" />
            <SkeletonText width="120px" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
