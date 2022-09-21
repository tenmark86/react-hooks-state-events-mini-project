import React, { useState } from "react";

function CategoryFilter({ categories, handleFilter }) {
	//console.log(catagories);
	const [useSelected, setSelected] = useState("");

	// function handleState(e) {
	// 	const className = "";
	// 	e.target.className = "selected";
	// }

	// const renderBtn = {catagories.map((catagory, index) => {
	// 	return (
	// 		<button
	// 			key={index}
	// 			onClick={(e) => {
	// 				handleFilter(e.target.value);
	// 				e.target.className = "selected";
	// 			}}
	// 			value={catagory}
	// 			className={""}
	// 		>
	// 			{catagory}
	// 		</button>
	// 	);
	// })}

	return (
		<div className="categories">
			<h5>Category filters</h5>
			{/* render <button> elements for each category here */}
			{categories.map((category, index) => {
				return (
					<button
						key={index}
						onClick={(e) => {
							handleFilter(e.target.value);
							e.target.className = "selected";
							// handleState();
						}}
						value={category}
						className=""
					>
						{category}
					</button>
				);
			})}
		</div>
	);
}

export default CategoryFilter;