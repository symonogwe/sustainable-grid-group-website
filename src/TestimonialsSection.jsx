import {
  Container,
  Heading,
  Text,
  Box,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TestimonialCard from "./TestimonialCard";

// Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialsData = [
  {
    quote:
      "Sustainable Grid Group provided clear, actionable strategy. Their guidance was instrumental in shifting our operations towards carbon neutrality.",
    clientName: "Sarah L., CEO of EkoGrade Corp",
    clientTitle: "Client, Manufacturing Sector",
  },
  {
    quote:
      "Navigating the complexities of ESG made it effortless and helped us identify immediate value chains for growth.",
    clientName: "Michael B., Director at Tech Solutions",
    clientTitle: "Partner, Technology Sector",
  },
  {
    quote:
      "Their innovative improvements gave us 45% reduction in key resource consumption. A professional and highly efficient team.",
    clientName: "James Warner, Operations Head, Choice Logistics",
    clientTitle: "Client, Logistics Sector",
  },
  {
    quote:
      "The depth of their ESG analysis exceeded our expectations. They didn't just point out gaps; they built the bridges to cross them.",
    clientName: "Elena Rodriguez, Sustainability Lead",
    clientTitle: "Client, Renewable Energy",
  },
  {
    quote:
      "A transformative experience for our leadership team. We now view sustainability as a competitive advantage.",
    clientName: "David Chen, COO of Apex Global",
    clientTitle: "Partner, International Trade",
  },
];

const TestimonialsSection = () => {
  const headingColor = useColorModeValue("sgg.900", "sgg.100");
  const bgColor = useColorModeValue("sgg.100", "sgg.900");

  // 🟢 FIX: Properly using paginationColor
  const paginationColor = useColorModeValue("sgg.900", "sgg.500");

  return (
    <Box
      id="clients"
      bg={bgColor}
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 8 }}
    >
      <Container maxW={"7xl"}>
        <Heading
          as="h2"
          size="xl"
          fontWeight="extrabold"
          textAlign="center"
          mb={4}
          color={headingColor}
        >
          What Our Clients Say
        </Heading>

        <Text
          textAlign="center"
          maxW="3xl"
          mx="auto"
          mb={12}
          fontSize="lg"
          color={useColorModeValue("gray.600", "sgg.100")}
        >
          Building impactful partnerships is at the heart of what we do.
        </Text>

        <Box position="relative" px={{ base: 0, md: 10 }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            // 🟢 FIX: Applying paginationColor and ensuring Swiper fills height
            style={{
              paddingBottom: "60px",
              "--swiper-pagination-color": `var(--chakra-colors-${paginationColor.replace(
                ".",
                "-"
              )})`,
              "--swiper-theme-color": `var(--chakra-colors-${paginationColor.replace(
                ".",
                "-"
              )})`,
            }}
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                style={{
                  display: "flex",
                  height: "auto", // 🟢 FIX: Ensures cards stretch to equal height
                }}
              >
                {/* Note: Ensure TestimonialCard has h="full" or h="100%" 
                   in its outermost Box to catch this flex stretch!
                */}
                <TestimonialCard
                  quote={testimonial.quote}
                  clientName={testimonial.clientName}
                  clientTitle={testimonial.clientTitle}
                  delay={0}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <IconButton
            className="swiper-button-prev-custom"
            aria-label="Previous slide"
            icon={<FiChevronLeft />}
            position="absolute"
            left="-15px"
            top="50%"
            transform="translateY(-50%)"
            zIndex={10}
            variant="ghost"
            display={{ base: "none", md: "flex" }}
            _hover={{ bg: "sgg.500", color: "white" }}
          />
          <IconButton
            className="swiper-button-next-custom"
            aria-label="Next slide"
            icon={<FiChevronRight />}
            position="absolute"
            right="-15px"
            top="50%"
            transform="translateY(-50%)"
            zIndex={10}
            variant="ghost"
            display={{ base: "none", md: "flex" }}
            _hover={{ bg: "sgg.500", color: "white" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
