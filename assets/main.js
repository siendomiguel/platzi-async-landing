const API = 'https://recent-repo.p.rapidapi.com/repos?user=siendomiguel&repo=6';

const content = null || document.querySelector('#content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '08c7bdc4a9msh1af801e6bc144e4p1fe000jsnef251a7f2e47',
		'X-RapidAPI-Host': 'recent-repo.p.rapidapi.com'
	}
};

async function fetchData (urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const repos = await fetchData(API);
    let view = `
    ${repos.map(repo => `
      <div class="bg-slate-800 shadow overflow-hidden sm:rounded-lg">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="https://avatars.githubusercontent.com/u/9919?s=280&v=4" alt="" class="w-full ">
        </div>
        <div class="mt-4 justify-between">
          <a href="${repo.repoLink}">
            <h3 class="text-base text-white text-center mb-2">
              <span aria-hidden="true" class="absolute inset-0"></span>
                ${repo.repoName}
            </h3>
          </a>
          <hr>
          <p class="text-xs text-white text-center mt-3 mb-2">${repo.repoDesc}</p>
         </div>
      </div>`).slice(0,4).join('')}
     `;
     content.innerHTML = view;
  } catch (error) {
    console.log(error)
  }
})();

// fetch('', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));