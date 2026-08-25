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
      "Sustainable Grid Group demonstrated a deep understanding of climate governance and organizational development. Their support helped us strengthen our strategic planning and institutional capacity, positioning us to deliver greater value to our stakeholders and communities.",
    clientName: "Jane Sidi",
    clientTitle: "Secretary General",
    company: "Kilifi Climate Change and Governance Platform",
  },
  {
    quote:
      "Sustainable Grid Group provided practical, well-structured advisory services that strengthened our management systems and compliance processes. Their professional approach and attention to detail helped us improve operational efficiency and establish a solid foundation for sustainable growth.",
    clientName: "Balaji Rathinavelu",
    clientTitle: "Project Manager",
    company: "Ezeetec Limited",
  },
  {
    quote:
      "Sustainable Grid Group partnered with us to strengthen our organizational systems and governance structures. Their technical expertise and collaborative approach helped us improve accountability, operational effectiveness, and long-term sustainability.",
    clientName: "Dr. Phelix Wandera",
    clientTitle: "Liaison Officer",
    company: "Stable Health Foundation",
  },
  {
    quote:
      "Sustainable Grid Group provided exceptional advisory services that helped us improve our management systems and organizational processes. Their practical recommendations and commitment to excellence have strengthened our capacity to deliver high-quality training and consulting services.",
    clientName: "Desmond Manadela",
    clientTitle: "Managing Director",
    company: "Quality Care Trainers Limited",
  },
  {
    quote:
      "The team at Sustainable Grid Group delivered professional and practical support that enhanced our quality management and compliance processes. Their guidance has contributed to improved operational performance and reinforced our commitment to delivering quality healthcare services.",
    clientName: "Dr. Bonface Onsongo",
    clientTitle: "",
    company: "Equity Afya",
  },
];

const TestimonialsSection = () => {
  const headingColor = useColorModeValue("sgg.900", "dark.text");
  const bgColor = useColorModeValue("sgg.100", "dark.canvas");

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
          color={useColorModeValue("gray.600", "dark.text")}
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
              0: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 1, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 32 },
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
                  company={testimonial.company}
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
