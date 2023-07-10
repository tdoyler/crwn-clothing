import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

import {
	CartDownContainer,
	EmptyMessage,
	CartItems,
} from "./cart-dropdown.styles.jsx";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate("/checkout");
	};
	return (
		<CartDownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your Cart Is Empty</EmptyMessage>
				)}
			</CartItems>

			<Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
		</CartDownContainer>
	);
};

export default CartDropdown;
