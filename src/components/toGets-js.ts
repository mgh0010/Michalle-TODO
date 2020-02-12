import { LitElement, html, customElement, css, property } from 'lit-element';
import firebase from 'firebase/app'

interface ToGet {
  title: String,
  id: String,
}

@customElement('mah-to-gets')
export class MahToGets extends LitElement {

  @property({ type: Array }) toGets: ToGet[] = [];

  constructor() {
    super();
    firebase.firestore().collection('toGets')
      .onSnapshot((snapshot) => {
        const toGets: ToGet[] = [];
        snapshot.forEach(doc => {
          toGets.push(doc.data() as ToGet)
        })
        this.setToGets(toGets);
    })
  }

  setToGets(toGets: ToGet[]) {
    this.toGets = toGets;
  }


  static styles = css`
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    input {
      line-height: 3em;
      outline: none;
      border: none;
      margin-bottom: 1em;
      padding: 0 10px;
    }
    .grey-bg { background-color: #34383B; }
    .primary-green-bg { background-color: #04D8C3 !important; }
    .floating-btn, .floating-btn-bottom {
      padding: .5rem .75rem;
      font-size: .8rem;
      border-radius: 10px;
      margin: 2.5px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 20px 10px 20px;
      box-shadow: 0px 5px 13px -2px #00000040;
      line-height: 1rem;
      font-weight: 600;
      border-radius: 1em;
      border: none;
      outline: none !important;
      cursor: pointer;
    }
    .floating-btn-bottom {
      position: fixed;
      bottom: 1%;
      right: 1%;
      padding: 1rem 1.5rem;
    }
  `;

  render() {
    return html`
      <h2>To Gets</h2>
      <ul>
        ${this.toGets.map(toGet => html`
          <li>${toGet.title}</li>
        `)} 
      </ul>
      <form>
        <input 
          type="text" 
          class="grey-bg" 
          id="new-to-get-input"
          >
        <button 
          id='add-todo-btn'
          class="floating-btn-bottom primary-green-bg" 
          ?hidden='false'>
          Add To Get
        </button>
      </form>
    `;
  }
}