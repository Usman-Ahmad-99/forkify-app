import View from './View';

class resultsView extends View {
  _parentEl = document.querySelector('.bookmarks');
  _message = '';
  _errorMessage = `No bookmarks yet. Find a nice recipe and bookmark it.`;

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    return this._data
      .map(result => {
        return `
        <li class="preview">
            <a class="preview__link ${
              result.id === id ? 'preview__link--active' : ''
            }" href="#${result.id}">
                <figure class="preview__fig">
                <img src="${result.image}" alt="Test" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${result.title}</h4>
                    <p class="preview__publisher">${result.publisher}</p>
                </div>
            </a>
        </li>
      `;
      })
      .join('');
  }
}

export default new resultsView();
