import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import "drink-card/out-tsc/src/drink-card.js"
import "professor-card/src/professor-card.js"

@customElement('card-list')
export class CardList extends LitElement {
  @property({ type: String }) header = 'My app';

  static styles = css`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

    html,
    body {
      margin: 0;
      padding: 0;
      font-family: 'Lato', sans-serif;
      background-color: #ededed;
      font-weight: 300;
    }  

    drink-card p {
      margin: 2px 2px;
      font-weight: 300;
    }

    drink-card[drink_background] {
      background-color: var(--drinkbg);
    }

    .cards {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  `;

  render() {
    return html`
      <div id="cards" class="cards">
        <drink-card></drink-card>
        <drink-card></drink-card>
        <drink-card></drink-card>
        <drink-card></drink-card>
        <drink-card></drink-card>
      </div>
      <div id="cards" class="cards" aux>
        <professor-card></professor-card>
        <professor-card></professor-card>
        <professor-card></professor-card>
        <professor-card></professor-card>
        <professor-card></professor-card>
      </div>
    `;
  }
}
