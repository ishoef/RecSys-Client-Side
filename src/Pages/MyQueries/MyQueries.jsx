import React from "react";
import { responsive } from "../../Layouts/RootLayout";
import Title from "../../Components/Title/Title";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";
import MyQueryCard from "../../Components/MyQueryCard/MyQueryCard";

const MyQueries = () => {

  const myQueries = [
    {
      _id: 1,
      productName: "Galaxy Buds Pro",
      productBrand: "Samsung",
      productImageUrl:
        "https://images.unsplash.com/photo-1653057677005-808191686c3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3QlMjB3aXRoJTIwYmx1ZSUyMGJhY2tncm91bnxlbnwwfHwwfHx8MA%3D%3D",
      queryTitle: "Any good alternatives with better battery life?",
      boycottingReason:
        "Battery drains fast and becomes unusable after a few weeks, even with minimal usage. Also, customer support did not offer any meaningful help.",
      userEmail: "ahmed@example.com",
      userName: "Ahmed Karim",
      userPhotoURL:
        "https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png",
      createdAt: "2025-06-04",
      recommendationCount: 3,
    },
    {
      _id: 2,
      productName: "Surface Laptop 4",
      productBrand: "Microsoft",
      productImageUrl:
        "https://images.unsplash.com/photo-1653057677005-808191686c3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3QlMjB3aXRoJTIwYmx1ZSUyMGJhY2tncm91bnxlbnwwfHwwfHx8MA%3D%3D",
      queryTitle: "Looking for a more durable ultrabook",
      boycottingReason:
        "Keyboard broke in 6 months and support was not helpful. Build quality seems weak for the price, and it struggles with basic multitasking after a while.",
      userEmail: "sadia@example.com",
      userName: "Sadia Rahman",
      userPhotoURL:
        "https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png",
      createdAt: "2025-06-03",
      recommendationCount: 5,
    },
    {
      _id: 3,
      productName: "AirPods Pro",
      productBrand: "Apple",
      productImageUrl:
        "https://images.unsplash.com/photo-1653057677005-808191686c3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3QlMjB3aXRoJTIwYmx1ZSUyMGJhY2tncm91bnxlbnwwfHwwfHx8MA%3D%3D",
      queryTitle: "Is there any better sounding earbuds?",
      boycottingReason:
        "Very expensive and ANC causes ear pressure discomfort. Battery replacement options are limited and costly, which adds to long-term frustration.",
      userEmail: "mizan@example.com",
      userName: "Mizan Chowdhury",
      userPhotoURL:
        "https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png",
      createdAt: "2025-06-02",
      recommendationCount: 4,
    },
    {
      _id: 4,
      productName: "Sony WH-1000XM4",
      productBrand: "Sony",
      productImageUrl:
        "https://images.unsplash.com/photo-1653057677005-808191686c3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3QlMjB3aXRoJTIwYmx1ZSUyMGJhY2tncm91bnxlbnwwfHwwfHx8MA%3D%3D",
      queryTitle: "Seeking something lighter with same quality",
      boycottingReason:
        "Too bulky for daily use; causes sweat during summer. Although the sound quality is good, the size and comfort level make it hard to use long term.",
      userEmail: "nabila@example.com",
      userName: "Nabila Sultana",
      userPhotoURL:
        "https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png",
      createdAt: "2025-06-01",
      recommendationCount: 2,
    },
    {
      _id: 5,
      productName: "Canon EOS 1500D",
      productBrand: "Canon",
      productImageUrl:
        "https://images.unsplash.com/photo-1653057677005-808191686c3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3QlMjB3aXRoJTIwYmx1ZSUyMGJhY2tncm91bnxlbnwwfHwwfHx8MA%3D%3D",
      queryTitle: "Any mirrorless suggestions under 60k?",
      boycottingReason:
        "Too heavy and lacks 4K video recording support. Outdated features for the current price range and difficult for beginners to handle efficiently.",
      userEmail: "rasel@example.com",
      userName: "Rasel Khan",
      userPhotoURL:
        "https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png",
      createdAt: "2025-05-30",
      recommendationCount: 1,
    },
    {
      _id: 6,
      productName: "Logitech MX Master 3",
      productBrand: "Logitech",
      productImageUrl:
        "https://images.unsplash.com/photo-1653057677005-808191686c3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3QlMjB3aXRoJTIwYmx1ZSUyMGJhY2tncm91bnxlbnwwfHwwfHx8MA%3D%3D",
      queryTitle: "Any ergonomic mouse alternatives?",
      boycottingReason:
        "Great features but causes wrist pain over long use. The shape doesn't suit all hand sizes and lacks sufficient customization in software.",
      userEmail: "arif@example.com",
      userName: "Arif Hossain",
      userPhotoURL:
        "https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png",
      createdAt: "2025-05-29",
      recommendationCount: 2,
    },
    {
      _id: 7,
      productName: "HP Pavilion x360",
      productBrand: "HP",
      productImageUrl:
        "https://images.unsplash.com/photo-1653057677005-808191686c3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3QlMjB3aXRoJTIwYmx1ZSUyMGJhY2tncm91bnxlbnwwfHwwfHx8MA%3D%3D",
      queryTitle: "Any better student laptops with touch?",
      boycottingReason:
        "Laggy performance and battery barely lasts 4 hours. Gets hot quickly and the touchscreen sometimes becomes unresponsive.",
      userEmail: "farhana@example.com",
      userName: "Farhana Ahmed",
      userPhotoURL:
        "https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png",
      createdAt: "2025-05-27",
      recommendationCount: 6,
    },
    {
      _id: 8,
      productName: "Xiaomi Mi Band 6",
      productBrand: "Xiaomi",
      productImageUrl:
        "https://images.unsplash.com/photo-1653057677005-808191686c3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3QlMjB3aXRoJTIwYmx1ZSUyMGJhY2tncm91bnxlbnwwfHwwfHx8MA%3D%3D",
      queryTitle: "Fitness band with more accurate heart rate?",
      boycottingReason:
        "Heart rate monitor is inaccurate and sync issues occur. The app often crashes and firmware updates rarely fix the problems.",
      userEmail: "tanvir@example.com",
      userName: "Tanvir Hasan",
      userPhotoURL:
        "https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png",
      createdAt: "2025-05-26",
      recommendationCount: 0,
    },
    {
      _id: 9,
      productName: "Anker Soundcore Life Q30",
      productBrand: "Anker",
      productImageUrl:
        "https://images.unsplash.com/photo-1653057677005-808191686c3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3QlMjB3aXRoJTIwYmx1ZSUyMGJhY2tncm91bnxlbnwwfHwwfHx8MA%3D%3D",
      queryTitle: "Any headphones with better mic quality?",
      boycottingReason:
        "ANC is okay, but mic quality is very poor in calls. Others often complain they can't hear me clearly during meetings or calls.",
      userEmail: "shakil@example.com",
      userName: "Shakil Rana",
      userPhotoURL:
        "https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png",
      createdAt: "2025-05-25",
      recommendationCount: 3,
    },
    {
      _id: 10,
      productName: "Redmi Note 12",
      productBrand: "Xiaomi",
      productImageUrl:
        "https://images.unsplash.com/photo-1653057677005-808191686c3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3QlMjB3aXRoJTIwYmx1ZSUyMGJhY2tncm91bnxlbnwwfHwwfHx8MA%3D%3D",
      queryTitle: "Looking for more secure Android phone?",
      boycottingReason:
        "MIUI has too many ads and questionable privacy concerns. Frequent bloatware notifications make the user experience frustrating.",
      userEmail: "mehedi@example.com",
      userName: "Mehedi Islam",
      userPhotoURL:
        "https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png",
      createdAt: "2025-05-24",
      recommendationCount: 4,
    },
  ];
  return (
    <section className={`${responsive} mt-10`}>
      <div>
        <div className="flex justify-between items-center py-8 px-5 bg-primary backdrop-blur-3xl rounded-2xl">
          <Title className={"text-white"} title={"All Product Queries"} />
          <div className="flex items-center gap-3 ">
            <label className="input w-70 ring-0 focus-within:ring-0 focus-within:ring-primary focus-within:outline-none">
              <div className="opacity-50">
                <IoIosSearch size={20} />
              </div>
              <input
                className="grow focus:outline-none focus:border-transparent"
                type="search"
                name="search"
                placeholder="Search Product"
              />
            </label>

            <Link to={"/addquery"} className="btn bg-white text-primary px-8">
              <FaPlus />
              Add New Query
            </Link>
          </div>
        </div>

        {/* MyQuery Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {
            myQueries.map((query) => <MyQueryCard query={query} />)
          }
        </div>
      </div>
    </section>
  );
};

export default MyQueries;
