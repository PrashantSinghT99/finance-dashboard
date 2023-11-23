import { iconsImgs } from ".././Data/images";
import { personsImgs } from ".././Data/images";

export const navigationLinks = [
  { id: 1, title: "Home", image: iconsImgs.home },
  { id: 2, title: "Billings", image: iconsImgs.budget },
  { id: 3, title: "Top Assets", image: iconsImgs.plane },
  { id: 7, title: "Spending Analytics", image: iconsImgs.wallet },
  { id: 8, title: "Revenue Cost", image: iconsImgs.wealth },
  { id: 9, title: "Log Out", image: iconsImgs.Logout },
  // { id: 10, title: "Settings", image: iconsImgs.gears },
  // { id: 4, title: "Subscriptions", image: iconsImgs.wallet },
  
  //{ id: 5, title: "Loans", image: iconsImgs.bills },
];
//    { id: 6, title: 'Reports', image: iconsImgs.report },

//TRANSACTION DATA

export const transactions = [
  {
    id: 21,
    name: "Krisitine Smith",
    image: personsImgs.person_four,
    date: "23/11/15",
    amount: 18000,
  },
  {
    id: 22,
    name: "Sarah Johnson",
    image: personsImgs.person_three,
    date: "23/05/30",
    amount: 25000,
  },
  {
    id: 23,
    name: "Eva White",
    image: personsImgs.person_two,
    date: "23/09/10",
    amount: 27000,
  },
];

export const reportData = [
  {
    id: 14,
    month: "Jan",
    value1: 45,
    value2: null,
  },
  {
    id: 15,
    month: "Feb",
    value1: 45,
    value2: 60,
  },
  {
    id: 16,
    month: "Mar",
    value1: 45,
    value2: null,
  },
  {
    id: 17,
    month: "Apr",
    value1: 45,
    value2: null,
  },
  {
    id: 18,
    month: "May",
    value1: 45,
    value2: null,
  },
];

//BUDGET DATA

export const budget = [
  {
    id: 19,
    title: "Entertainment",
    type: "One-time",
    amount: 18000,
  },
  {
    id: 20,
    title: "Utilities",
    type: "Automated",
    amount: 25000,
  },
  {
    id: 21,
    title: "Groceries",
    type: "Automated",
    amount: 27000,
  },
  {
    id: 22,
    title: "Rent",
    type: null,
    amount: 12000,
  },
  {
    id: 23,
    title: "Transportation",
    type: null,
    amount: 15000,
  },
];

export const subscriptions = [
  {
    id: 34,
    title: "Netflix",
    due_date: "23/11/15",
    amount: 12000,
  },
  {
    id: 35,
    title: "Hulu",
    due_date: "23/11/30",
    amount: 8000,
  },
  {
    id: 36,
    title: "Spotify",
    due_date: "23/12/10",
    amount: 1000,
  },
];

export const savings = [
  {
    id: 27,
    image: personsImgs.person_one,
    saving_amount: 180000,
    title: "Emergency Fund",
    date_taken: "23/11/15",
    amount_left: 60000,
  },
];