import api from './api'

class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');
    this.inputOwnerEl = document.querySelector('input[name=owner]')
    this.inputEl = document.querySelector('input[name=repository]')
    this.listEl = document.getElementById('repo-list');

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingElement = document.createElement('span')
      loadingElement.appendChild(document.createTextNode('Carregando'))
      loadingElement.setAttribute('id', 'loading')

      this.formEl.appendChild(loadingElement)
    } else {
      document.getElementById('loading').remove()
    }
  }

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputEl.value
    const ownerInput = this.inputOwnerEl.value

    if (repoInput.length === 0 || ownerInput.length === 0) return;

    this.setLoading()

    try {
      const response = await api.get(`/repos/${ownerInput}/${repoInput}`)

      const { name, description, html_url, owner: { avatar_url } } = response.data

      this.repositories.push({
        name,
        description,
        avatar_url,
        html_url,
      });

      this.inputOwnerEl.value = '';

      this.inputEl.value = '';

      this.render();
    } catch (err) {
      alert('O repositorio não existe!')
    }

    this.setLoading(false)
  }

  render() {
    this.listEl.innerHTML = '';

    this.repositories.forEach(repo => {
      let imgEl = document.createElement('img');

      imgEl.setAttribute('src', repo.avatar_url);

      let titlEl = document.createElement('strong')
      titlEl.appendChild(document.createTextNode(repo.name))

      let descriptionEl = document.createElement('p')
      descriptionEl.appendChild(document.createTextNode(repo.description))

      let linkEl = document.createElement('a')
      linkEl.setAttribute('target', '_blank')
      linkEl.setAttribute('href', repo.html_url)
      linkEl.appendChild(document.createTextNode('Acessar'))

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titlEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl);
    });
  }
}

new App()