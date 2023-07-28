const services = [
  {
    id: 1,
    svg: <i className="fa-solid fa-truck"></i>,
    title: "Home Delivery",
    description: "Accross The Country",
  },
  {
    id: 2,
    svg: <i className="fa-solid fa-money-bill"></i>,
    title: "Cash On Delivery",
    description: "After Recieve",
  },
  {
    id: 3,
    svg: <i className="fa-solid fa-truck-fast"></i>,
    title: "Fast On Delivery",
    description: "Any Where",
  },
  {
    id: 4,
    svg: <i className="fa-solid fa-people-pulling"></i>,
    title: "Happy Return",
    description: "Quality Ensured",
  },
  {
    id: 5,
    svg: <i className="fa-solid fa-phone"></i>,
    title: "Call Center",
    description: "We Are Here",
  },
];
export default function FooterService() {
  return (
    <div className="max-w-[1100px] mx-auto mt-5 px-6 py-6">
      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="footer-service mx-auto sm:w-1/3 md:w-2/3 lg:w-full "
          >
            <h1 className="text-7xl text-[#E41C2A]  text-center p-6">
              {service.svg}
            </h1>
            <h2 className="text-gray-700 font-normal text-center text-xl">
              {service.title}
            </h2>
            <h4 className="text-gray-900 font-normal text-center text-md">
              {service.description}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}
