import { FaMinus, FaPlus } from "react-icons/fa";
import "./CartAmountToggle.css";
import { NavLink } from "react-router-dom";
import { useUser } from "../../../Provider/UserProvider";

export default function CartAmountToggle({
  amount,
  setDecrease,
  setIncrease,
  handleAddToCartClick,
}) {
  const { isUserLoggedIn } = useUser();
  return (
    <div>
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
      <NavLink to={isUserLoggedIn ? "/products/:_id" : "/signin"}>
        <button className="addtocart-btn" onClick={handleAddToCartClick}>
          add to cart
        </button>
      </NavLink>
    </div>
  );
}
