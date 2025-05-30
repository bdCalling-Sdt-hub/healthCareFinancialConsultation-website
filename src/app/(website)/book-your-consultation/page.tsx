"use client";

import Image from "next/image";
import insightImage from "@/assets/image (36).png";

import { useState } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Checkbox,
  Radio,
  DatePicker,
  Spin,
  Modal,
} from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { Option } from "antd/es/mentions";
import {
  useGetSlotsQuery,
  useCreateBookingMutation,
} from "@/redux/apiSlices/bookingSlice";
import { message } from "antd";
import { useGetAllServicesQuery } from "@/redux/apiSlices/serviceSlice";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const BookYourConsultationPage = () => {
  const [form] = Form.useForm();
  const [consultationMode, setConsultationMode] = useState("in-person");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTimeZone, setSelectedTimeZone] =
    useState<string>("America/New_York");

  const router = useRouter();

  const { data: availableSlots, isLoading } = useGetSlotsQuery(
    { date: selectedDate, timeZone: selectedTimeZone },
    { skip: !selectedDate }
  );
  const { data: allServices, isLoading: isServiceLoading } =
    useGetAllServicesQuery(undefined);
  const [createBooking, { isLoading: isSubmitting }] =
    useCreateBookingMutation();

  const timeZones = [
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "America/Anchorage",
    "America/Phoenix",
    "America/Indiana/Indianapolis",
  ];

  const states = [
    { value: "Alabama", label: "Alabama" },
    { value: "Alaska", label: "Alaska" },
    { value: "Arizona", label: "Arizona" },
    { value: "Arkansas", label: "Arkansas" },
    { value: "California", label: "California" },
    { value: "Colorado", label: "Colorado" },
    { value: "Connecticut", label: "Connecticut" },
    { value: "Delaware", label: "Delaware" },
    { value: "Florida", label: "Florida" },
    { value: "Georgia", label: "Georgia" },
    { value: "Hawaii", label: "Hawaii" },
    { value: "Idaho", label: "Idaho" },
    { value: "Illinois", label: "Illinois" },
    { value: "Indiana", label: "Indiana" },
    { value: "Iowa", label: "Iowa" },
    { value: "Kansas", label: "Kansas" },
    { value: "Kentucky", label: "Kentucky" },
    { value: "Louisiana", label: "Louisiana" },
    { value: "Maine", label: "Maine" },
    { value: "Maryland", label: "Maryland" },
    { value: "Massachusetts", label: "Massachusetts" },
    { value: "Michigan", label: "Michigan" },
    { value: "Minnesota", label: "Minnesota" },
    { value: "Mississippi", label: "Mississippi" },
    { value: "Missouri", label: "Missouri" },
    { value: "Montana", label: "Montana" },
    { value: "Nebraska", label: "Nebraska" },
    { value: "Nevada", label: "Nevada" },
    { value: "New Hampshire", label: "New hampshire" },
    { value: "New Jersey", label: "New jersey" },
    { value: "New Mexico", label: "New mexico" },
    { value: "New York", label: "New york" },
    { value: "North Carolina", label: "North carolina" },
    { value: "North Dakota", label: "North dakota" },
    { value: "Ohio", label: "Ohio" },
    { value: "Oklahoma", label: "Oklahoma" },
    { value: "Oregon", label: "Oregon" },
    { value: "Pennsylvania", label: "Pennsylvania" },
    { value: "Rhode Island", label: "Rhode island" },
    { value: "South Carolina", label: "South carolina" },
    { value: "South Dakota", label: "South dakota" },
    { value: "Tennessee", label: "Tennessee" },
    { value: "Texas", label: "Texas" },
    { value: "Utah", label: "Utah" },
    { value: "Vermont", label: "Vermont" },
    { value: "Virginia", label: "Virginia" },
    { value: "Washington", label: "Washington" },
    { value: "West Virginia", label: "West virginia" },
    { value: "Wisconsin", label: "Wisconsin" },
    { value: "Wyoming", label: "Wyoming" },
  ];

  const handleDateChange = (date: any) => {
    if (date) {
      setSelectedDate(date.format("YYYY-MM-DD"));
    } else {
      setSelectedDate(null);
    }
  };

  // Remove the global loading check
  if (isServiceLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spin />
      </div>
    );
  }

  const services = allServices?.data;

  // Interface for the time slot structure
  interface TimeSlot {
    time: string;
    timeCode: number;
    isBooked: boolean;
  }

  // interface DaySlot {
  //   user: string;
  //   day: string;
  //   times: TimeSlot[];
  // }

  // Get available time slots
  const getAvailableSlots = () => {
    if (!availableSlots?.data?.[0]?.times) return [];

    // Filter out booked slots
    return availableSlots.data[0].times
      .filter((slot: TimeSlot) => !slot.isBooked)
      .map((slot: TimeSlot) => ({
        label: slot.time,
        value: slot.timeCode.toString(),
      }));
  };

  const handleSubmit = async (values: any) => {
    try {
      // Get the selected slot details
      const selectedSlot = availableSlots?.data[0]?.times.find(
        (slot: TimeSlot) => slot.timeCode.toString() === values.slot
      );

      const bookingData = {
        firstName: values.firstName,
        lastName: values.lastName,
        contact: values.phone,
        email: values.email,
        industry: values.industry,
        country: values.country,
        state: values.state,
        service: values.service,
        message: values.message,
        date: values.date.format("YYYY-MM-DD"),
        time: selectedSlot?.time,
        timezone: values.timeZone,
        timeCode: parseInt(values.slot),
        duration: Number(values.duration),
        paymentMethod: consultationMode, // Using consultationMode as paymentMethod
      };

      console.log(bookingData);

      const res = await createBooking(bookingData).unwrap();
      if (res?.success) {
        Modal.success({
          title: "Booking Successful",
          content:
            res?.message || "Your consultation has been booked successfully!",
          okText: "OK",
          centered: true,
        });
        router.push("/");
      } else {
        toast.error(res?.message);
      }

      form.resetFields();
    } catch (error: any) {
      message.error(
        error?.message || "Failed to create booking. Please try again."
      );
    }
  };

  return (
    <div>
      <div className="relative mb-20">
        <Image
          src={insightImage}
          alt="howWeWorkImg"
          width={50000}
          height={50000}
          className="w-full h-[600px] object-cover"
        />
        <div className="max-w-[750px] absolute -bottom-20 right-20 p-10 rounded-2xl bg-[#032237] bg-opacity-30 backdrop-blur-md">
          <h1 className="md:text-5xl text-3xl mb-5 font-bold bg-gradientBg text-transparent bg-clip-text leading-normal">
            Our Insights
          </h1>
          <p className="text-white md:text-lg text-md">
            Rising Costs, Staffing Shortages, Disparity in Healthcare, Growing
            Need for improved Mental Health Care are some of the top issues
            facing the Healthcare Industry.
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg my-20 mt-40">
        <h2 className="text-lg font-semibold mb-4">Book an appointment</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          disabled={isSubmitting}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="phone"
              label="Mobile Number"
              rules={[{ required: true }]}
            >
              <Input prefix={<PhoneOutlined />} placeholder="Mobile Number" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Form.Item
              name="industry"
              label="Industry Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Industry name" />
            </Form.Item>
            <Form.Item
              name="country"
              label="Country"
              rules={[{ required: true }]}
            >
              <Select placeholder="Country">
                <Option value="us">United States</Option>
                <Option value="uk">United Kingdom</Option>
              </Select>
            </Form.Item>
            <Form.Item name="state" label="State" rules={[{ required: true }]}>
              <Select placeholder="State">
                {states.map((state) => (
                  <Option key={state.value} value={state.value}>
                    {state.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          <Form.Item
            name="service"
            label="Select Service"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select the service">
              {services?.map((service: any) => (
                <Option key={service._id} value={service._id}>
                  {service.title}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label="Consultation Mode">
            <Radio.Group
              onChange={(e) => setConsultationMode(e.target.value)}
              value={consultationMode}
            >
              <Radio value="online">Virtual (Zoom)</Radio>
              <Radio value="manual">In Person</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item name="message" label="Write To Us">
            <Input.TextArea rows={4} placeholder="Write your message..." />
          </Form.Item>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="timeZone"
              label="Time Zone"
              rules={[{ required: true, message: "Please select a time zone" }]}
            >
              <Select
                placeholder="Select Time Zone"
                onChange={(value) => setSelectedTimeZone(value)}
                value={selectedTimeZone}
              >
                {timeZones.map((zone) => (
                  <Option key={zone} value={zone}>
                    {zone}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="date"
              label="Select Date"
              rules={[{ required: true }]}
            >
              <DatePicker
                className="w-full"
                onChange={handleDateChange}
                disabledDate={(current) => {
                  return current && current < dayjs().startOf("day");
                }}
              />
            </Form.Item>
          </div>

          <div className="flex gap-3">
            <Form.Item
              className="w-3/4"
              name="slot"
              label="Available Slots"
              rules={[{ required: true, message: "Please select a time slot" }]}
              validateTrigger={["onChange", "onBlur"]}
            >
              <div className="relative">
                {isLoading && (
                  <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center z-10">
                    <Spin />
                  </div>
                )}
                <Select
                  placeholder={
                    selectedDate
                      ? "Select a time slot"
                      : "Please select a date first"
                  }
                  disabled={!selectedDate}
                  options={getAvailableSlots()}
                  onChange={(value) => {
                    form.setFieldValue("slot", value);
                  }}
                />
              </div>
            </Form.Item>

            <Form.Item
              className="w-1/4"
              name="duration"
              label="Duration"
              rules={[
                {
                  required: true,
                  message: "Please select consultation duration",
                },
              ]}
            >
              <Select placeholder="Select duration">
                <Option value="30">30 minutes</Option>
                <Option value="45">45 minutes</Option>
                <Option value="60">60 minutes</Option>
              </Select>
            </Form.Item>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item
              name="time"
              label="Select Time"
              rules={[{ required: true }]}
            >
              <TimePicker
                className="w-full"
                format="HH:mm A"
                defaultValue={dayjs("08:00", "HH:mm")}
              />
            </Form.Item>
          </div> */}

          <Form.Item>
            <Checkbox required>
              I agree to the Terms & Conditions and Privacy Policy
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              className="w-full !bg-gradientBg !py-5 !text-xl"
              loading={isSubmitting}
              onClick={(e) => {
                e.preventDefault();
                // const authToken =
                //   localStorage.getItem("authenticationToken") ||
                //   sessionStorage.getItem("authenticationToken");
                // if (!authToken) {
                //   Modal.error({
                //     title: "Authentication Required",
                //     content: "Please login to book a consultation",
                //     onOk: () => router.push("/login"),
                //     centered: true,
                //   });
                //   return;
                // }
                form.submit();
              }}
            >
              {isSubmitting ? "Submitting..." : "Confirm & Submit"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default BookYourConsultationPage;
