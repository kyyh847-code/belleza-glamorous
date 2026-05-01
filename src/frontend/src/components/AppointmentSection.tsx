import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { AppointmentFormData } from "@/types";
import { CheckCircle, MessageCircle, Phone, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";

const SERVICES = [
  "Bridal Makeup",
  "Party Makeup",
  "Engagement Makeup",
  "Pre-Wedding Shoot",
  "Reception Makeup",
  "Hair Styling",
];
const TIME_SLOTS = [
  "Morning 8AM–12PM",
  "Afternoon 12PM–4PM",
  "Evening 4PM–8PM",
];

export default function AppointmentSection() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AppointmentFormData>();

  const onSubmit = async (data: AppointmentFormData) => {
    const fullData = { ...data, service: selectedService, time: selectedTime };
    console.info("Appointment:", fullData);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    reset();
    setSelectedService("");
    setSelectedTime("");
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section
      id="appointment"
      className="relative py-28 overflow-hidden"
      data-ocid="appointment.section"
      style={{
        background:
          "linear-gradient(135deg, #FFF0F5 0%, #FFE4EF 40%, #FFF5F9 70%, #FFFAF0 100%)",
      }}
    >
      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,105,180,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,182,217,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-0 right-1/3 w-64 h-64 rounded-full blur-3xl z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,20,147,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 mb-4 px-5 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-widest"
            style={{
              borderColor: "rgba(255,105,180,0.4)",
              color: "#FF1493",
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" /> Book Now
          </div>
          <h2
            className="text-serif-display text-4xl sm:text-5xl lg:text-6xl mb-3"
            style={{
              background:
                "linear-gradient(135deg, #FF1493 0%, #FF69B4 50%, #FFB6D9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 10px rgba(255,20,147,0.2))",
            }}
          >
            Book Your Dream
            <br />
            Transformation
          </h2>
          <p className="text-lg" style={{ color: "#6B2040" }}>
            Reserve your spot for a celebrity-grade makeup experience
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="rounded-3xl p-8 sm:p-10"
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1.5px solid rgba(255,105,180,0.35)",
              boxShadow:
                "0 0 60px rgba(255,105,180,0.18), 0 20px 60px rgba(255,20,147,0.08), inset 0 1px 0 rgba(255,255,255,1)",
            }}
          >
            {submitted ? (
              <motion.div
                className="text-center py-10"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                data-ocid="appointment.success_state"
              >
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,20,147,0.15), rgba(255,182,217,0.25))",
                    border: "1.5px solid rgba(255,105,180,0.4)",
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <CheckCircle
                    className="w-10 h-10"
                    style={{ color: "#FF1493" }}
                  />
                </motion.div>
                <h3
                  className="text-serif-display text-2xl sm:text-3xl mb-3"
                  style={{ color: "#FF1493" }}
                >
                  Appointment Requested!
                </h3>
                <p className="text-sm" style={{ color: "#6B2040" }}>
                  We'll confirm your booking within 24 hours. Looking forward to
                  your transformation!
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                data-ocid="appointment.form"
              >
                <h3
                  className="text-serif-display text-xl font-bold mb-6"
                  style={{ color: "#2D0020" }}
                >
                  Appointment Details
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" style={{ color: "#4A1030" }}>
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        borderColor: "rgba(255,105,180,0.4)",
                        color: "#2D0020",
                      }}
                      {...register("name", { required: "Name is required" })}
                      data-ocid="appointment.name_input"
                    />
                    {errors.name && (
                      <p
                        className="text-xs"
                        style={{ color: "#FF1493" }}
                        data-ocid="appointment.name.field_error"
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" style={{ color: "#4A1030" }}>
                      Mobile Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="09XXXXXXXXX"
                      className="rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        borderColor: "rgba(255,105,180,0.4)",
                        color: "#2D0020",
                      }}
                      {...register("phone", { required: "Phone is required" })}
                      data-ocid="appointment.phone_input"
                    />
                    {errors.phone && (
                      <p
                        className="text-xs"
                        style={{ color: "#FF1493" }}
                        data-ocid="appointment.phone.field_error"
                      >
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" style={{ color: "#4A1030" }}>
                    Email Address (optional)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.9)",
                      borderColor: "rgba(255,105,180,0.4)",
                      color: "#2D0020",
                    }}
                    {...register("email")}
                    data-ocid="appointment.email_input"
                  />
                </div>

                <div className="space-y-2">
                  <Label style={{ color: "#4A1030" }}>Service *</Label>
                  <Select
                    onValueChange={setSelectedService}
                    value={selectedService}
                  >
                    <SelectTrigger
                      className="rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        borderColor: "rgba(255,105,180,0.4)",
                        color: "#2D0020",
                      }}
                      data-ocid="appointment.service_select"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="date" style={{ color: "#4A1030" }}>
                      Preferred Date *
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      className="rounded-xl"
                      style={{
                        background: "rgba(255,255,255,0.9)",
                        borderColor: "rgba(255,105,180,0.4)",
                        color: "#2D0020",
                      }}
                      {...register("date", { required: "Date is required" })}
                      data-ocid="appointment.date_input"
                    />
                    {errors.date && (
                      <p
                        className="text-xs"
                        style={{ color: "#FF1493" }}
                        data-ocid="appointment.date.field_error"
                      >
                        {errors.date.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label style={{ color: "#4A1030" }}>Preferred Time *</Label>
                    <Select
                      onValueChange={setSelectedTime}
                      value={selectedTime}
                    >
                      <SelectTrigger
                        className="rounded-xl"
                        style={{
                          background: "rgba(255,255,255,0.9)",
                          borderColor: "rgba(255,105,180,0.4)",
                          color: "#2D0020",
                        }}
                        data-ocid="appointment.time_select"
                      >
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {TIME_SLOTS.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" style={{ color: "#4A1030" }}>
                    Special Requirements
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your vision, outfit color, or any special requirements..."
                    className="rounded-xl min-h-[90px] resize-none"
                    style={{
                      background: "rgba(255,255,255,0.9)",
                      borderColor: "rgba(255,105,180,0.4)",
                      color: "#2D0020",
                    }}
                    {...register("message")}
                    data-ocid="appointment.message_textarea"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full font-bold py-6 rounded-2xl border-0 text-base transition-smooth hover:scale-[1.02] text-white"
                  style={{
                    background: "linear-gradient(135deg, #FF1493, #FF69B4)",
                    boxShadow:
                      "0 0 30px rgba(255,20,147,0.4), 0 4px 20px rgba(255,105,180,0.3)",
                  }}
                  data-ocid="appointment.submit_button"
                >
                  {isSubmitting ? (
                    "Booking..."
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2 inline" />
                      Confirm Appointment
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Quick contact */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a
              href="tel:09408626660"
              className="flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-sm transition-smooth hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(255,105,180,0.4)",
                color: "#FF1493",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 16px rgba(255,105,180,0.12)",
              }}
              data-ocid="appointment.call_button"
            >
              <Phone className="w-4 h-4" /> 09408626660
            </a>
            <a
              href="https://wa.me/919408626660"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-sm transition-smooth hover:scale-105"
              style={{
                background: "rgba(74,222,128,0.12)",
                border: "1px solid rgba(74,222,128,0.3)",
                color: "#16a34a",
              }}
              data-ocid="appointment.whatsapp_button"
            >
              <FaWhatsapp className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>

          <p className="text-center text-xs mt-3" style={{ color: "#B05080" }}>
            <MessageCircle className="w-3.5 h-3.5 inline mr-1" />
            For urgent bookings call: 09408626660
          </p>
        </motion.div>
      </div>
    </section>
  );
}
