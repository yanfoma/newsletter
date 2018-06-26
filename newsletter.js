const docnews = (document.currentScript || document._currentScript).ownerDocument;

class Newsletter extends HTMLElement {

	//Constructeur à faire plus tard

	connectedCallback() {
		var menu = docnews.querySelector('#news-letter').content;
		const shadowRoot = this.attachShadow({mode: 'open'});
		const instance = document.importNode(menu, true);
		shadowRoot.appendChild(instance);
	}
}

window.customElements.define('news-letter', Newsletter);