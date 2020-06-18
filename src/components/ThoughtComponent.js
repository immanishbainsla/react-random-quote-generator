import React from "react";
import thoughts from "./thoughts";

class ThoughtComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thoughts: thoughts,
      currentQuote: "",
      currentAuthor: "",
      currentId: "",
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  componentDidMount() {
    const RandomNumber = Math.floor(Math.random() * 102) + 1;
    const quote = this.state.thoughts.filter(
      (quote) => quote.id === RandomNumber
    );
    this.setState((prevState) => {
      return {
        ...prevState,
        currentQuote: quote[0].quote,
        currentAuthor: quote[0].author,
        currentId: quote[0].id,
      };
    });
    // console.log(quote[0].quote);
  }

  changeQuote() {
    const RandomNumber = Math.floor(Math.random() * 102) + 1;
    const quote = this.state.thoughts.filter(
      (quote) => quote.id === RandomNumber
    );
    this.setState((prevState) => {
      return {
        ...prevState,
        currentQuote: quote[0].quote,
        currentAuthor: quote[0].author,
        currentId: quote[0].id,
      };
    });
    // console.log(quote[0]);
  }

  render() {
    const S2 = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    };

    return (
      <div className="row mt-sm-4">
        <div
          className="col-md-6 col-sm-10 rounded mx-auto align-middle"
          style={S2}
        >
          <div className="card text-center">
            <div className="card-header font-weight-bold">
              <h4 className="headerFontStyle font2">Featured Quote</h4>
            </div>
            <div className="card-body">
              <p className="card-text quoteFontStyle font1">
                "{this.state.currentQuote}"
              </p>
              <h4 className="card-title authorFontStyle">
                <footer className="blockquote-footer font2">
                  <cite title="Author">{this.state.currentAuthor}</cite>
                </footer>
              </h4>
            </div>
            <div className="card-footer text-muted">
              <button
                href="#"
                className="btn btn-lg btn-success buttonFontStyle"
                onClick={this.changeQuote}
              >
                Another Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThoughtComponent;
