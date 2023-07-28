import { Link } from "react-router-dom";

const addressItems = [
  {
    id: 1,
    svg: <i className="fa-solid fa-phone"></i>,
    title: "+88 01313-770770",
  },
  {
    id: 2,
    svg: <i className="fa-solid fa-location-pin"></i>,
    title: "43 Dhaka - 1217",
  },
  {
    id: 3,
    svg: <i className="fa-regular fa-envelope"></i>,
    title: " support@pbs.com.bd",
  },
];
const pageItems = [
  {
    id: 1,
    title: "Home",
    path: "home",
  },
  {
    id: 2,
    title: "Pre Order",
    path: "pre-order",
  },
  {
    id: 3,
    title: "Author",
    path: "author",
  },
  {
    id: 4,
    title: "Publisher",
    path: "publisher",
  },
  {
    id: 5,
    title: "Book Request",
    path: "book-request",
  },
];
const helpItems = [
  {
    id: 1,
    title: "Term & Condition",
    path: "terms",
  },

  {
    id: 2,
    title: "Privacy Policy",
    path: "privacy",
  },
  {
    id: 3,
    title: "Refund and Return Ploicy",
    path: "refund",
  },
  {
    id: 4,
    title: "About Us",
    path: "about",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "contact",
  },
];

export default function FooterItems() {
  return (
    <div className="py-10 px-6  bg-[#F0F1F3]">
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 ">
        <div className="">
          {addressItems.map((item) => (
            <div key={item.id} className="flex my-1 mx-auto">
              <h3 className="text-green-900 mr-4 ">{item.svg}</h3>
              <h3 className="text-blue-900 text-sm">{item.title}</h3>
            </div>
          ))}
        </div>
        <div className="mx-auto">
          {pageItems.map((item) => (
            <div key={item.id} className="mx-auto">
              <Link
                to={item.path}
                className="text-teal-900 text-sm hover:text-blue-600"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="mx-auto">
          {helpItems.map((item) => (
            <div key={item.id} className="mx-auto">
              <Link
                className="text-teal-900 text-sm hover:text-blue-600"
                to={item.path}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="mx-auto">
          <h2 className="text-green-900 mr-4 text-sm">Like us on Facebook</h2>
          <Link to="" className="text-teal-900 text-sm hover:text-blue-600">
            PBS (Books+Music+Cafe)
          </Link>
        </div>
      </div>
    </div>
  );
}
