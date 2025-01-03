import * as React from "react";
import { useState, useEffect } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Stack, Box, Container, NumberInputLabel } from "@chakra-ui/react";
import { getTickets } from "../services/tickets";
import SearchTicket from "../components/Buyer/LandingPage/SearchTicket";
import TicketFav from "../components/Buyer/LandingPage/TicketFav";
import Promo from "../components/Buyer/LandingPage/Promo";

export const Route = createLazyFileRoute("/")({
  component: Beranda,
});

function Beranda() {
  useEffect(()=> {
    window.scrollTo(0,0)
  })
  // Selected Values
  const [selectedFrom, setSelectedFrom] = useState("Jakarta");
  const [selectedTo, setSelectedTo] = useState("Bali");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [selectedClass, setSelectedClass] = useState("Economy");
  const formattedClass = selectedClass.replace(/_/g, " ");

  // isFocused and tickets data states
  const [isFocused, setIsFocused] = useState(false);
  const [tickets, setTickets] = useState([]);

  // Use react query to fetch API
  const { data, isPending, isSuccess } = useQuery({
    queryKey: ["tickets"],
    queryFn: () => getTickets(),
    enabled: true,
  });

  useEffect(() => {
    if (isSuccess) {
      setTickets(data?.data);
    }
  }, [data, isSuccess]);

  const handleSelectCard = (ticket) => {
    setSelectedFrom(ticket?.departure?.city?.name || "");
    setSelectedTo(ticket?.arrival?.city?.name || "");
    setDateRange([
      {
        startDate: new Date(ticket?.departure?.time),
        key: "selection",
      },
    ]);
    setSelectedClass(ticket?.class);

    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <Box maxWidth="container.lg" mx="auto" py={8} px={0}>
      {/* Overlay Box */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="blackAlpha.700"
        opacity={isFocused ? 1 : 0}
        pointerEvents="none"
        transition="opacity 0.3s ease"
        zIndex="5"
      ></Box>

      <Promo tickets={tickets} isTicketsPending={isPending} />

      <Stack gap={5} position="relative" top={{ base: "2", lg: "-5" }}>
        <SearchTicket
          tickets={tickets}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          selectedFrom={selectedFrom}
          selectedTo={selectedTo}
          dateRange={dateRange}
          selectedClass={formattedClass}
          setSelectedFrom={setSelectedFrom}
          setSelectedTo={setSelectedTo}
          setDateRange={setDateRange}
          setSelectedClass={setSelectedClass}
        />

        <TicketFav handleSelectCard={handleSelectCard} />
      </Stack>
    </Box>
  );
}
