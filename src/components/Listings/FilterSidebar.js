"use client";

import React, {useState, useEffect, useCallback} from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { categories } from "@/libs/Categories";
import { useRouter } from "next/navigation";

const FilterSidebar = ({
  allTradeListings, 
  currentUser,
  setViewableListings,
  searchParams}) => {
    const currentRoute = usePathname();
    const [title, setTitle] = useState("");
    const [distance, setDistance] = useState("");
    const [category, setCategory] = useState("Any");
    const router = useRouter();

    // console.log(categories);

    //KEEP
    const filterListings = (
    ) =>{
      if (category != "Any"){
        setViewableListings(allTradeListings.filter(item =>(
          (
            (item.title.toLowerCase().includes(title.toLowerCase()))&&
            (item.category == category)
          )
        )));
      }
      else if (!title){
        setViewableListings(allTradeListings);
      }
      else {
        setViewableListings(allTradeListings.filter(item =>(
          (item.title.toLowerCase().includes(title.toLowerCase())) 
        )));
      }
      // console.log(allTradeListings);
    }


    // const filterListings = useCallback(() => {
    //   router.push(
    //     `/listings?title=${title}&category=${category}`
    //   );
    // }, [title, category, router]);

    return (
      <>
        <div className="db-sidebar">
          <div class="filters">
            <input 
              type="text" 
              placeholder="Search Listings"
              value={title}
              onInput={e => setTitle(e.target.value)} ></input>
            <input 
              type="number"
              value={distance}
              placeholder="Distance"
              min={0}
              onInput={e => setDistance(e.target.value)}></input>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)} >
                <option key="Any" value="Any">Any</option>
                {
                  categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>{cat.value}</option>
                  ))
                }
            </select>
          </div>
          <button
            onClick={() =>{filterListings()}}
          >
            Filter
          </button>

              {/* <ul>
                <li>
                  <Link 
                    href="/profileInfo"
                    className={`db-link ${
                      currentRoute === "/profileInfo" ? "active" : "non-active"
                    }`}
                  >Dashboard</Link>
                </li>

                <li>
                  <Link 
                    href="/profileInfo/users"
                    className={`db-link ${
                      currentRoute === "/profileInfo/users" ? "active" : "non-active"
                    }`}
                  >
                    Users
                  </Link>
                </li>
                  
                <li>
                  <Link 
                    href="/profileInfo/listings"
                    className={`db-link ${
                      currentRoute === "/profileInfo/listings" ? "active" : "non-active"
                    }`}
                  >
                    Listings
                  </Link>
                </li>
      
                <li>
                  <Link 
                    href="/profileInfo/reviews"
                    className={`db-link ${
                      currentRoute === "/profileInfo/reviews" ? "active" : "non-active"
                    }`}
                  >
                    Reviews
                  </Link>
                </li>

                <li>
                  <Link 
                    href="/profileInfo/blog/new"
                    className={`db-link ${
                      currentRoute === "/profileInfo/blog/new" ? "active" : "non-active"
                    }`}
                  >
                    Creact Blog Post
                  </Link>
                </li>
                <hr></hr>  
                <li>
                  <Link 
                    href="/profileInfo/betaTesting/settings"
                    className={`db-link ${
                      currentRoute === "/profileInfo/betaTesting/settings" ? "active" : "non-active"
                    }`}
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/profileInfo/betaTesting/listings"
                    className={`db-link ${
                      currentRoute === "/profileInfo/betaTesting/listings" ? "active" : "non-active"
                    }`}
                  >
                    Listings
                  </Link>
                </li>
                <li>Reviews</li>
                <li>Friends</li>
              </ul> */}
        </div>
      </>
    )
}

export default FilterSidebar;