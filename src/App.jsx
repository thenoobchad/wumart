import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, MyOrders, Order, Auth, Category, Cart, Product, Checkout } from "./pages/index";


import { Layout } from "./components/layout/layout";

export default function App() {

  const [showLogin, setShowLogin] = useState(false)
  return (
		<BrowserRouter>
			{showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
			<Routes>
				<Route
					path="/"
					element={
						<Layout>
							<Home />
						</Layout>
					}
				/>

				<Route
					path="/product"
					element={
						<Layout>
							<Product />
						</Layout>
					}>
					<Route path=":productId" element={<Product />} />
				</Route>

				<Route
					path="/cart"
					element={
						<Layout>
							{" "}
							<Cart />
						</Layout>
					}
				/>

				<Route
					path="/order"
					element={
						<Layout>
							<Order />
						</Layout>
					}
				/>

				<Route path="/verify" element={<Layout></Layout>} />

				<Route
					path="/myorders"
					element={
						<Layout>
							<MyOrders />
						</Layout>
					}
				/>

				<Route
					path="/category/:category"
					element={
						<Layout>
							<Category />
						</Layout>
					}
				/>
				<Route path="/signup" element={<Auth />} />
				<Route
					path="/checkout"
					element={
						<Layout>
							<Checkout />
						</Layout>
					}
				/>
				<Route path="/signup" element={<Auth />} />
			</Routes>
		</BrowserRouter>
	);
}

