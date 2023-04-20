import { FaPizzaSlice, FaHamburger} from "react-icons/fa";
import { GiNoodles, GiChopsticks, GiTacos, GiDoubleFish} from "react-icons/gi";
import{NavLink} from 'react-router-dom'


import React from 'react'

export default function Category() {
  return (
    <div className="cuisine">
      <NavLink className="cuisinelink" to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink className="cuisinelink"to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink className="cuisinelink" to={"/cuisine/African"}>
        <GiDoubleFish />
        <h4>African</h4>
      </NavLink>
      <NavLink className="cuisinelink" to={"/cuisine/Thai"}>
        <GiNoodles/>
        <h4>Thai</h4>
      </NavLink>
      <NavLink className="cuisinelink" to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
      <NavLink  className="cuisinelink" to={"/cuisine/Mexican"}>
        <GiTacos />
        <h4>Mexican</h4>
      </NavLink>
    </div>
  )
}
