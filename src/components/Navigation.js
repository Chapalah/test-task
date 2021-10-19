import React from "react";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__ul">
        {navigation.map((item, index) => (
          <NavigationItem
            navItem={item.navItem}
            subNav={item.subNav}
            key={index}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

const navigation = [
  {
    navItem: "Business & Management",
    subNav: ["lorem"],
  },
  {
    navItem: "Computing & IT",
    subNav: ["lorem"],
  },
  {
    navItem: "Fashion & Media",
    subNav: ["lorem", "lorem"],
  },
  {
    navItem: "Finance & Accounting",
    subNav: ["lorem"],
  },
  {
    navItem: "Law & Criminology",
    subNav: ["lorem", "lorem", "lorem"],
  },
  {
    navItem: "Marketing & Communications",
    subNav: ["lorem"],
  },
  {
    navItem: "Psychology & Social Sciences",
    subNav: [
      "Market Research Executive",
      "Child Psychologist",
      "Guidance Counsellor",
      "Behaviour Analyst",
      "Recreational Therapis",
      "Recreational Therapis",
    ],
  },
];
