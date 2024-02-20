import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Card";

export default function Home() {
  // const [foodCat, setFoodCat] = useState([]);
  const [search, setSearch] = useState('');
  // const [foodItem, setFoodItem] = useState([]);
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });
    response = await response.json();
    // setFoodItem(response[0]);
    // setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const foodCat = [
    {
      "CategoryName": "Biryani/Rice"
    },
    {
      "CategoryName": "Starter"
    },
    {
      "CategoryName": "Pizza"
    }
  ]

  const foodItem = [
    {
      "CategoryName": "Biryani/Rice",
      "name": "Chicken Fried Rice",
      "img": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "options": [
        {
          "half": "130",
          "full": "220"
        }
      ],
      "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
      "CategoryName": "Biryani/Rice",
      "name": "Veg Fried Rice",
      "img": "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "options": [
        {
          "half": "110",
          "full": "200"
        }
      ],
      "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
      "CategoryName": "Biryani/Rice",
      "name": "Fish Biryani",
      "img": "https://media.istockphoto.com/photos/king-fish-biryani-with-raita-served-in-a-golden-dish-isolated-on-dark-picture-id1409942571?b=1&k=20&m=1409942571&s=170667a&w=0&h=ozlMJf5hsDmS2sSdEdBWnoSZOEITef4qGMeWeq2lyTc=",
      "options": [
        {
          "half": "200",
          "full": "320"
        }
      ],
      "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
      "CategoryName": "Biryani/Rice",
      "name": "Chicken Biryani",
      "img": "https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg",
      "options": [
        {
          "half": "170",
          "full": "300"
        }
      ],
      "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
      "CategoryName": "Biryani/Rice",
      "name": "Veg Biryani",
      "img": "https://media.istockphoto.com/photos/veg-biryani-picture-id1363306527?b=1&k=20&m=1363306527&s=170667a&w=0&h=VCbro7CX8nq2kruynWOCO2GbMGCea2dDJy6O6ebCKD0=",
      "options": [
        {
          "half": "150",
          "full": "260"
        }
      ],
      "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
      "CategoryName": "Biryani/Rice",
      "name": "Prawns Fried Rice",
      "img": "https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027__340.jpg",
      "options": [
        {
          "half": "120",
          "full": "220"
        }
      ],
      "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
      "CategoryName": "Starter",
      "name": "Chilli Paneer",
      "img": "https://media.istockphoto.com/photos/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-in-picture-id697316634?b=1&k=20&m=697316634&s=170667a&w=0&h=bctfHdYTz9q2dJUnuxGRDUUwC9UBWjL_oQo5ECVVDAs=",
      "options": [
        {
          "half": "120",
          "full": "200"
        }
      ],
      "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
      "CategoryName": "Starter",
      "name": "Paneer 65",
      "img": "https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y=",
      "options": [
        {
          "half": "150",
          "full": "260"
        }
      ],
      "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
      "CategoryName": "Starter",
      "name": "Chicken Tikka",
      "img": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "options": [
        {
          "half": "170",
          "full": "300"
        }
      ],
      "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
      "CategoryName": "Starter",
      "name": "Paneer Tikka",
      "img": "https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU=",
      "options": [
        {
          "half": "170",
          "full": "250"
        }
      ],
      "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
      "CategoryName": "Pizza",
      "name": "Chicken Cheese Pizza",
      "img": "https://media.istockphoto.com/photos/double-topping-pizza-on-the-wooden-desk-isolated-picture-id1074109872?k=20&m=1074109872&s=612x612&w=0&h=JoYwwTfU_mMBykXpRB_DmgeecfotutOIO9pV5_JObpk=",
      "options": [
        {
          "regular": "120",
          "medium": "230",
          "large": "350"
        }
      ],
      "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    },
    {
      "CategoryName": "Pizza",
      "name": "Mix Veg Pizza",
      "img": "https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0=",
      "options": [
        {
          "regular": "100",
          "medium": "200",
          "large": "300"
        }
      ],
      "description": "Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added."
    }
  ]


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex  justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
              />
              {/* <button className="btn btn-outline-success text-white bg-dark" type="submit">
                Search
              </button> */}
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900x700/?food"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?cake"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?paneer"
              className="d-block w-100"
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container">
        {foodCat.length > 0 && foodCat.map((data) => (
          <div className="row mb-3" key={data._id}>
            <div className="fs-3 m-3">
              {data.CategoryName}
            </div>
            <hr />
            {foodItem.length > 0 &&
              foodItem.filter((item) => (
                item.CategoryName === data.CategoryName &&
                item.name.toLowerCase().includes(search.toLocaleLowerCase())
              ))
                .map(filterItem => (
                  <div key={filterItem._id} className="col-12 col-md-6 col-lg-3">
                    <Cards
                      foodItems={filterItem}
                      options={filterItem.options[0]}
                    />
                  </div>
                ))
            }
            {foodItem.length === 0 && <div>No data available</div>}
          </div>
        ))}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}