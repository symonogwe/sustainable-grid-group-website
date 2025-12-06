import { Container, SimpleGrid } from "@chakra-ui/react";
import StatCard from "./StatCard";
import AnimateOnScroll from "./MotionBox";

const statsData = [
  { number: 6, suffix: "+", label: "Years of Experience" },
  { number: 70, suffix: "+", label: "Clients Served" },
  { number: 130, suffix: "+", label: "Successful Projects" },
];

const StatsBar = () => {
  return (
    <AnimateOnScroll delay={0.2}>
      <Container
        maxW={"7xl"}
        // Negative margin pulls it up to overlap the Hero section slightly
        // making the design feel connected and layered
        mt={{ base: -12, md: -20 }}
        mb={20}
        position="relative"
        zIndex={10} // Ensures it sits on top of the Hero background
        px={{ base: 4, md: 8 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 3 }} // 1 column on mobile, 3 on PC
          spacing={{ base: 6, md: 10 }}
        >
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </SimpleGrid>
      </Container>
    </AnimateOnScroll>
  );
};

export default StatsBar;
