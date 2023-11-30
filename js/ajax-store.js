const getTools = () => {
	const url = "data/inventory.json";
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	};
	return fetch(url, options).then((response) => response.json());
};
const createCategoryHTML = (category) => {
	const categoryElement = document.createElement("span");
	categoryElement.classList.add("badge", "rounded-pill");
	switch (category) {
		case "tool":
			categoryElement.classList.add("bg-primary");
			break;
		case "powered":
			categoryElement.classList.add("bg-info");
			break;
		case "gas":
			categoryElement.classList.add("bg-warning");
			break;
		case "outdoor":
			categoryElement.classList.add("bg-success");
			break;
		default:
			categoryElement.classList.add("bg-secondary");
			break;
	}
	categoryElement.textContent = category;
	return categoryElement.outerHTML;
};
const createToolElement = (tool) => {
	const toolElement = document.createElement("tr");
	toolElement.classList.add("align-middle");
	toolElement.innerHTML = `
        <td scope="row">
            <strong>${tool.title}</strong>
        </td>
        <td>
            ${tool.quantity}
        </td>
        <td>
                ${tool.price.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	})}
        </td>
        <td>
            <div class="d-flex align-items-center gap-1 h-100">
                ${tool.categories
		.map((category) => {
			return createCategoryHTML(category);
		})
		.join("")}
            </div>
        </td>
        <td colspan="1" class="shrink text-end">
                <button class="btn btn-sm btn-outline-danger">Delete</button>
        </td>
    `;
	const deleteBtn = toolElement.querySelector("button");
	deleteBtn.addEventListener("click", (e) => {
		let tools = JSON.parse(localStorage.getItem("tools"));
		tools = tools.filter((t) => t.title !== tool.title);
		localStorage.setItem("tools", JSON.stringify(tools));
		handleDeleteTool(e);
	});
	return toolElement;
};
const updateToolsTable = (tools) => {
	// add tools to local storage
	if (localStorage.getItem("tools") === null) {
		localStorage.setItem("tools", JSON.stringify(tools));
	}
	tools = JSON.parse(localStorage.getItem("tools"));
	const tableBody = document.querySelector("#tools");
	tableBody.innerHTML = "";
	const toolsFragment = document.createDocumentFragment();
	tools.forEach((tool) => {
		const toolElement = createToolElement(tool);
		toolsFragment.appendChild(toolElement);
	});
	// tableBody.appendChild(toolsFragment);
	// initialize data table (https://datatables.net/examples/basic_init/zero_configuration.html)
	// let table = new DataTable("#tool-table", {
	// 	sortable: true,
	// 	paging: false,
	// 	labels: {
	// 		noRows: "No tools found",
	// 	},
	// 	columnDefs: [
	// 		{
	// 			target: 3,
	// 			sortable: false,
	// 		},
	// 		{
	// 			target: 4,
	// 			sortable: false,
	// 		},
	// 	],
	// });
};
const handleResetTools = () => {
	localStorage.removeItem("tools");
	location.reload();
};
const handleDeleteTool = (event) => {
	const toolElement = event.target.closest("tr");
	// get all sibling tr elements that come after the toolElement
	let toolElementSiblings = [];
	let nextElement = toolElement;
	while (nextElement.nextElementSibling) {
		toolElementSiblings.push(nextElement.nextElementSibling);
		nextElement = nextElement.nextElementSibling;
	}
	// animate the toolElement and its siblings
	const toolElementHeight = toolElement.offsetHeight;
	toolElement.style.opacity = 0;
	toolElement.addEventListener("transitionend", () => {
		for (let sibling of toolElementSiblings) {
			sibling.style.transition = `transform 0.3s ease-in-out`;
			sibling.style.transform = `translateY(-${toolElementHeight}px)`;
		}
		setTimeout(() => {
			toolElement.remove();
			for (let sibling of toolElementSiblings) {
				sibling.style.transition = `transform 0s ease-in-out`;
				sibling.style.transform = `translateY(0)`;
				// wait for the transform to finish before removing the transition
				setTimeout(() => {
					sibling.style.transition = ``;
				}, 300);
			}
		}, 300);
	});
};

//MAIN
(async () => {
	const tools = await getTools();
	updateToolsTable(tools);
	const resetBtn = document.querySelector("#reset");
	resetBtn.addEventListener("click", handleResetTools);
})();


"use strict";
// TODO: Create an AJAX GET request for the file under data/inventory.json

// TODO: Take the data from inventory.json and append it to the products table
//       HINT: Your data should come back as a JSON object; use console.log() to inspect
//             its contents and fields
//       HINT: You will want to target #insertProducts for your new HTML elements