import Image from "next/image";
import randomImage from "@/assets/randomProfile3.jpg";

const notifications = [
  {
    id: 1,
    image: randomImage,
    name: "Amiey Sawjia",
    location: "Buffalo, the USA",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque vero molestias quam architecto sed sunt repellendus placeat fugit provident, ratione saepe unde doloribus dolor blanditiis vel libero mollitia qui culpa harum.",
    isRead: true,
  },
  {
    id: 2,
    image: randomImage,
    name: "Khalid Umar",
    location: "Tampa, Florida",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quidem.",
    isRead: true,
  },
  {
    id: 3,
    image: randomImage,
    name: "John Doe",
    location: "New York, USA",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quidem.",
    isRead: true,
  },
  {
    id: 4,
    image: randomImage,
    name: "Maria Doe",
    location: "Los Angeles, California",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vero molestias quam architecto sed sunt repellendus placeat fugit provident, ratione saepe unde doloribus dolor blanditiis vel libero mollitia qui culpa harum.",
    isRead: false,
  },
  {
    id: 5,
    image: randomImage,
    name: "Jane Doe",
    location: "Chicago, Illinois",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.",
    isRead: false,
  },
  {
    id: 6,
    image: randomImage,
    name: "John Smith",
    location: "London, UK",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quidem.",
    isRead: false,
  },
  {
    id: 7,
    image: randomImage,
    name: "Jane Smith",
    location: "Paris, France",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vero molestias quam architecto sed sunt repellendus placeat fugit provident, ratione saepe unde doloribus dolor blanditiis vel libero mollitia qui culpa harum.",
    isRead: false,
  },
];

const Notifications = () => {
  return (
    <div className="">
      <div className="h-[150px] flex items-center justify-center bg-gradientBg">
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>
      <div className="container my-10">
        <div className="flex items-center justify-end mb-5">
          <button className="bg-gradientBg px-10 py-2 rounded-md">
            Mark All As Read
          </button>
        </div>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`border-b border-dashed py-4 p-5 rounded-lg border-gray-400 ${
              notification.isRead ? "bg-gray-200" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <Image
                alt="Profile"
                src={notification.image}
                width={4654646}
                height={45634560}
                className="w-14 h-14 border border-[#ba9956] rounded-full"
              />
              <div>
                <h1 className="font-semibold">{notification.name}</h1>
                <p>{notification.location}</p>
              </div>
            </div>
            <p
              className={`text-gray-600 mt-2 ${
                notification.isRead ? "font-bold" : ""
              }`}
            >
              {notification.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
