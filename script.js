/*	::: Create a variable for the root div	*/
const ROOT_DIV = document.getElementById('root')


const pagesObject = {
	home: 'home',
}

let isLoading = true



const setUrl = (page) => {
	window.history.replaceState({page:'page'},'Form',`./${page}`)
}


/*	::: Main application	*/
const application = (page) => {
	setUrl(page)	
	ROOT_DIV.innerHTML = '<div>Here we go</div>'
}






/*	::: Page load script	*/
window.addEventListener('load', () => {
	if (ROOT_DIV) {
		/*	TODO: load screen?	*/
		application('home')
	}
	else {
		document.body.innerHTML = '<div class="page-load-error">Something went wrong...</div>'
	}
})