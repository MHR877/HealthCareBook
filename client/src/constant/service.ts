export interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  alt: string;
}

// Array containing objects for each service
export const services: ServiceProps[] = [
  {
    icon: "/appointment.svg",
    alt: "appointment icon",
    title: "Appointment Booking",
    description:
      "Provision of telemedicine services, allowing patients to communicate with doctors remotely for medical advice without the need to visit the clinic.",
  },
  {
    icon: "/message.svg",
    alt: "message icon",
    title: "Messaging",
    description:
      "Exchange of text messages with nurses to ask questions and get quick assistance.",
  },
  {
    icon: "/rating.svg",
    alt: "rating icon",
    title: "Doctor Ratings",
    description:
      "Ability to rate doctors and provide feedback on their medical experiences to help other patients in selecting suitable physicians.",
  },
  {
    icon: "/work.svg",
    alt: "work icon",
    title: "Work Appointments",
    description:
      "Receiving requests for medical appointments from patients worldwide and scheduling appointments according to your availability.",
  },
  {
    icon: "/health.svg",
    alt: "health icon",
    title: "Health Information",
    description:
      "Sharing knowledge and educational resources with patients to educate and guide them on healthcare.",
  },
  {
    icon: "/telephone.svg",
    alt: "telephone icon",
    title: "Online Consultations",
    description:
      "Provision of telemedicine services, allowing patients to communicate with doctors remotely for medical advice without the need to visit the clinic.",
  },
];
