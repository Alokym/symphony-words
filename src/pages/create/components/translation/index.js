/**
 * Created by VStukanov on 6/15/16.
 */

import update from 'react-addons-update';

class Translation extends React.Component
{
  constructor(props)
  {
    super();

    this.state = props.data;
  }

  updateValue(key)
  {
    return evt => this.setState(update(this.state, { [key]: { $set: evt.target.value } }));
  }

  passCallback(callback)
  {
    return () => callback(this.state);
  }

  render()
  {
    const { onSave, onRemove } = this.props;

    return (
      <div className="row">
        <div className="medium-5 columns">
          <input
            type="text"
            className="tr-word"
            placeholder="Word"
            value={ this.state.word }
            onChange={ this.updateValue('word') } />
        </div>

        <div className="medium-5 columns">
          <input
            type="text"
            className="tr-translation"
            placeholder="Translation"
            value={ this.state.translation }
            onChange={ this.updateValue('translation') } />
        </div>

        <div className="medium-2 columns">
          <div className="small expanded button-group">
            <button className="button" onClick={ this.passCallback(onSave) }>
              <i className="fa fa-check" aria-hidden="true"></i>
              {' '}
              <span>Save</span>
            </button>

            <button className="alert button" onClick={ this.passCallback(onRemove) }>
              <i className="fa fa-trash" aria-hidden="true"></i>
              {' '}
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Translation;
