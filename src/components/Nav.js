import React from "react";
import {  NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="flex justify-around">
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "#f0f0f0",
          })}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/completed"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "#f0f0f0",
          })}
        >
          Completed
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/active"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "#f0f0f0",
          })}
        >
          Active
        </NavLink>
      </li>
    </ul>
  );
}
