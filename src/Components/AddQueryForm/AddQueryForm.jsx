import { IoArrowBack } from "react-icons/io5";
import { SiJquery } from "react-icons/si";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddQueryForm = () => {

  const navigate = useNavigate();
  // Add Query Handleling
  const handleAddQuery = (e) => {
    e.preventDefault();
    const form = e.target;

    const now = new Date();

    const currentDate = now.toLocaleDateString("en-GB");
    const currentTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const user = {
      name: "Abdullah Al Mamun",
      email: "abdullahalmamun@gmail.com",
      photURL:
        "https://w7.pngwing.com/pngs/946/556/png-transparent-computer-icons-login-user-profile-client-smiley-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-windows-10-thumbnail.png",
    };

    const queryData = {
      productName: form.productName.value,
      productBrand: form.productBrand.value,
      productImageURL: form.productImageUrl.value,
      queryTitle: form.queryTitle.value,
      boycottingReson: form.boycottingReson.value,
      createDate: currentDate,
      createTime: currentTime,
      userName: user.name,
      userEmail: user.email,
      userPhotoURL: user.photURL,
    };

    console.log(queryData);

    // create a query
    fetch("http://localhost:3000/queries", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(queryData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after creating query", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Query created successfully",
            icon: "success",
            confirmButtonText: "Add Another Query",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            cancelButtonText: "Go to My Queries!"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/addquery");
            } else {
              navigate("/myqueries");
            }
          })
          // form.reset();
        }
      });
  };

  return (
    <div className="w-6/12 mx-auto my-10 ">
      <Link to={"/myqueries"} className="flex items-center gap-2">
        <IoArrowBack />

        <p className="poppins text-gray-700">Back to My Queries</p>
      </Link>
      <div className=" border border-gray-400 shadow-xl rounded-2xl p-10 mt-6">
        <form onSubmit={handleAddQuery} className="flex flex-col gap-4">
          <div className="flex items-center justify-between border p-4 rounded-2xl shadow border-gray-400 mb-5">
            <h1 className="poppins-semibold text-2xl text-primary">
              Add New Query
            </h1>
            <SiJquery size={32} color="#14b8a6" />
          </div>
          <label htmlFor="title" className="flex flex-col gap-2">
            <span className="poppins-regular">
              Product Name <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="productName"
              id=""
              className="input w-full focus-within:outline-none focus-within:border-primary"
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
            />
          </label>

          <label htmlFor="title" className="flex flex-col gap-2">
            <span className="poppins-regular">
              Product Brand <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="productBrand"
              id=""
              className="input w-full focus-within:outline-none focus-within:border-primary"
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
            />
          </label>

          <label
            htmlFor="title"
            className="flex flex-col gap-2 focus-within:border-primary"
          >
            <span className="poppins-regular">
              Product Image URL <span className="text-red-500">*</span>
            </span>
            <input
              type="url"
              name="productImageUrl"
              id=""
              className="input w-full focus-within:outline-none focus-within:border-primary "
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
            />
          </label>

          <label htmlFor="title" className="flex flex-col gap-2">
            <span className="poppins-regular">
              Query Title <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="queryTitle"
              id=""
              className="input w-full focus-within:outline-none focus-within:border-primary"
              placeholder="E.g., Google Pixel 7 Pro is a great alternative."
            />
          </label>

          <label htmlFor="">
            <span className="poppins-regular">
              Boycotting Reason Detils <span className="text-red-500">*</span>
            </span>
            <textarea
              name="boycottingReson"
              className="w-full h-32 p-3 border border-gray-300 rounded-md focus-within:border-primary focus:outline-none mt-2"
              placeholder="Explain why you're looking for alternativew to this product..."
            ></textarea>
          </label>
          <button className="btn btn-primary" type="submit">
            Add Query
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQueryForm;
