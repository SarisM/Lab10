fetch('https://api.escuelajs.co/api/v1/products')
	.then(response => {
		if (response.ok) {
			return response.json()
		}
	})
	.then(data => {
		const $container = document.getElementById('box-galery')
		data.forEach(({ title, images }) => {
			const validateLink = images.filter(img => !img.startsWith('[') && !img.endsWith(']'))
			if (validateLink.length > 0) {
				const boxImage = document.createElement('div')
				boxImage.classList.add('box-img')
				const img = document.createElement('img')
				img.classList.add('tipos-decafe')
				img.src = validateLink
				const a = document.createElement('a')
				a.classList.add('btn-img')
				a.href = '#'
				a.textContent = title
				boxImage.appendChild(img)
				$container.appendChild(a)
				$container.appendChild(boxImage)
			}
		})
	})
	.catch(error => {
		throw new Error(error)
	})
