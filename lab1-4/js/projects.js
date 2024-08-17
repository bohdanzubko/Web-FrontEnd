const data = [
	{
		img: './img/jpg/projects/1.jpg',
		title: 'Project Tile goes here',
		desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		technology: [
			{
				title: 'HTML',
				id: 'html'
			},
			{
				title: 'JavaScript',
				id: 'java-script'
			},
			{
				title: 'SASS',
				id: 'sass'
			},
			{
				title: 'React',
				id: 'react'
			},
		],
		theme: [
			{
				title: 'Landing',
				id: 'landing'
			},
		],
		platform: [
			{
				title: 'Web',
				id: 'web'
			}
		],
	},
	{
		img: './img/jpg/projects/2.jpg',
		title: 'Project Tile goes here',
		desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		technology: [
			{
				title: 'HTML',
				id: 'html'
			},
			{
				title: 'React',
				id: 'react'
			},
		],
		theme: [
			{
				title: 'Ecommerce',
				id: 'ecommerce'
			},
		],
		platform: [
			{
				title: 'Ios',
				id: 'ios'
			}
		],
	},
	{
		img: './img/jpg/projects/3.jpg',
		title: 'Project Tile goes here',
		desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		technology: [
			{
				title: 'HTML',
				id: 'html'
			},
			{
				title: 'JavaScript',
				id: 'java-script'
			},
			{
				title: 'SASS',
				id: 'sass'
			},
			{
				title: 'React',
				id: 'react'
			},
		],
		theme: [
			{
				title: 'Blog',
				id: 'blog'
			},
		],
		platform: [
			{
				title: 'Android',
				id: 'android'
			}
		],
	},
	{
		img: './img/jpg/projects/4.jpg',
		title: 'Project Tile goes here',
		desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		technology: [
			{
				title: 'HTML',
				id: 'html'
			},
		],
		theme: [
			{
				title: 'Landing',
				id: 'landing'
			},
		],
		platform: [
			{
				title: 'Web',
				id: 'web'
			}
		],
	},
	{
		img: './img/jpg/projects/5.jpg',
		title: 'Project Tile goes here',
		desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		technology: [
			{
				title: 'HTML',
				id: 'html'
			},
			{
				title: 'SASS',
				id: 'sass'
			}
		],
		theme: [
			{
				title: 'Blog',
				id: 'blog'
			},
		],
		platform: [
			{
				title: 'Android',
				id: 'android'
			}
		],
	},
	{
		img: './img/jpg/projects/6.jpg',
		title: 'Project Tile goes here',
		desc: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
		technology: [
			{
				title: 'HTML',
				id: 'html'
			},
			{
				title: 'JavaScript',
				id: 'java-script'
			}
		],
		theme: [
			{
				title: 'Ecommerce',
				id: 'ecommerce'
			},
		],
		platform: [
			{
				title: 'Ios',
				id: 'ios'
			}
		],
	}
];

const projectsContainer = document.querySelector('.js-projects-container');
const filtersForm = document.querySelector('.js-filters');
const viewButton = document.querySelector('.view-btn');
const activeFilters = {};

const createProjectTemplate = (project) => {
	return `
	<article class="project-block">
		<img src="${project.img}" alt="">
		<div>
			<h3>${project.title}</h3>
			<p class="project-desc">${project.desc}</p>
			<p class="project-tech"><span>Tech stack :</span>${project.technology.map(item => item.title).join(', ')}</p>
			<p class="project-tech"><span>Platform :</span> ${project.platform.map(item => item.title).join(', ')}</p>
			<p class="project-tech"><span>Theme :</span> ${project.theme.map(item => item.title).join(',')}</p>
			<div class="actions">
				<a href="">
					<img src="./img/svg/chain.svg" alt="">
					<span>Live Preview</span>
				</a>
				<a href="">
					<img src="./img/svg/github_xs.svg" alt="">
					<span>View Code</span>
				</a>
			</div>
		</div>
	</article>
	`;
};

const dataRender = (data, container) => {
	if (!(typeof data === 'object')) {
		return '';
	}
	let content = '';
	for (let i = 0; i < data.length; i++) {
		content += createProjectTemplate(data[i]);
	}
	if (content == '')
		content += 'There are no item that satisfy filters';
	container.innerHTML = content;
}

const itemIsValid = (dataItem, activeFilters) => {
	let count = 0;
	for (const activeFilterKey in activeFilters) {
		const activeFilterValue = activeFilters[activeFilterKey];
		const itemHasFilterValue = dataItem[activeFilterKey].map(item =>
			item.id).includes(activeFilterValue);
		if (itemHasFilterValue) {
			count++;
		}
	}
	return Object.keys(activeFilters).length === count;
};

const handleFormChange = (event) => {
	const target = event.target;
	const targetValue = target.value;
	const targetName = target.name;
	if (targetValue === '') {
		delete activeFilters[targetName];
		if (!Object.keys(activeFilters).length) {
			dataRender(data, projectsContainer);
			return;
		}
	} else {
		activeFilters[targetName] = targetValue;
	}
	const filteredData = data.filter((dataItem) => itemIsValid(dataItem, activeFilters));
	dataRender(filteredData, projectsContainer);

	projectCard = document.querySelectorAll('.project-block');
};

filtersForm.addEventListener('change', handleFormChange);

dataRender(data, projectsContainer);

var projectCard = document.querySelectorAll('.project-block');

const changeProjectsView = () => {
	projectCard.forEach(element => {
		element.classList.toggle('project-block');
		element.classList.toggle('project-list');
	});
}

viewButton.addEventListener('click', changeProjectsView);