import React from 'react';
import EnhancedPrompt from '../../Components/Global/EnhancedPrompt';

interface ExampleFormState{
  isFormPartiallyAnswered: boolean;
  nameValue: string;
}

export class ExampleForm extends React.Component<{}, ExampleFormState> {
  constructor(props : {}) {
    super(props);
    this.state = {
      isFormPartiallyAnswered: false,
      nameValue: "",
    };
  }

  render(){
    return (
      <React.Fragment>
        <form>
          <label>
            Name:&nbsp;
            <input type="text" value={this.state.nameValue} onChange={(event) => {
              this.setState({
                nameValue: event.target.value,
                isFormPartiallyAnswered: true,
              })
            }} />
          </label>

          <div className="full-width">
            <button type="submit">Submit</button>
          </div>
        </form>
        <EnhancedPrompt
            when={this.state.isFormPartiallyAnswered}
            shouldBlockNavigation={location => (
              location.pathname !== window.location.pathname && this.state.isFormPartiallyAnswered)}
        />
      </React.Fragment>
    );
  }
}
