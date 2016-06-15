/**
 * Created by VStukanov on 5/23/16.
 */
import Translate from './components/translation';
import update from 'react-addons-update';

class Create extends React.Component
{

  constructor()
  {
    super();
    this.state = {
      translations: []
    };
  }

  updateTranslation(action)
  {
    this.setState({
      translations: update(this.state.translations, action)
    });
  }

  addMore()
  {
    this.updateTranslation({ $push: [{ word: '', translation:'' }] });
  }

  removeItem(item)
  {
    this.updateTranslation({ $splice: [[item.index, 1]] });
  }

  saveItem(item)
  {
    this.updateTranslation({ [item.index]: { $set: item } });
  }

  render()
  {
    return (
      <div>
        <h1>Create Dictionary</h1>

        <form onSubmit={ evt => evt.preventDefault() }>
          <div>
            <div>
              <label htmlFor="">
                Name
                <input type="text" placeholder="Name"/>
              </label>
            </div>

            <label htmlFor="">
              Translations
            </label>
            <div className="callout secondary">
              <ul className="menu vertical">

                {!this.state.translations.length ? (
                  <div>No translations yet.</div>
                ) : ''}

                {this.state.translations.map((translation, index) =>
                  <li key={index}>
                    <Translate
                      data={update(translation, { index: { $set: index } })}
                      onSave={this.saveItem.bind(this)}
                      onRemove={this.removeItem.bind(this)}
                    />
                  </li>
                )}
              </ul>

              <button className="secondary expanded button" onClick={this.addMore.bind(this)}>
                <i className="fa fa-plus" aria-hidden="true"></i>{' '}Add more
              </button>
            </div>
          </div>

          <div className="button-group">
            <input className="button" type="submit" value="Save"/>
            <button className="secondary button">Revert</button>
          </div>
        </form>


      </div>
    );
  }
}

export default Create;
