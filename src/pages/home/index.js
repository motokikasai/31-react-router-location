import React, { Component } from "react";
import "./index.css";
import GetSearchParams from "../helper/getSearchParams";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // language
      english: false,
      german: false,
      italian: false,
      chinese: false,
      russian: false,
      // book type
      ebook: false,
      paperback: false,
      hardcover: false,
      // rating
      rating: 0,
      // search term
      term: "",
    };

    this.textInputHandler = this.textInputHandler.bind(this);
    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.radioHandler = this.radioHandler.bind(this);
  }

  componentDidMount() {
    const paramValue = GetSearchParams(this.props.location.search);
    // console.log(paramValue);

    // console.log(Object.keys(paramValue));
    if (this.props.location.search === "") {
      return;
    } else {
      const mappedQueryParams = Object.keys(paramValue).map((item) => {
        const arrQueryParamItem = decodeURIComponent(
          paramValue[item].toLowerCase()
        )
          .replace(/ /g, ",")
          .replace("-", "")
          .split(",");
        // console.log(arrQueryParamItem);

        return arrQueryParamItem;
      });

      // console.log(mappedQueryParams);
      const combinedArr = mappedQueryParams.reduce((acc, curr) => {
        let newArr = acc.concat(curr);

        return newArr;
      }, []);

      console.log(combinedArr);

      combinedArr.forEach((item) => {
        if (this.state.hasOwnProperty(item)) {
          this.setState({
            [item]: true,
          });
        }
      });
    }

    // console.log(decodeURIComponent(paramValue.searchTerm).replace("-", " "));
    this.setState({
      rating: paramValue.customerRating,
      term: decodeURIComponent(paramValue.searchTerm)
        .replace("-", " ")
        .toLowerCase(),
    });
  }

  textInputHandler(e) {
    this.setState({
      term: e.target.value,
    });
  }

  checkboxHandler(e) {
    this.setState({
      [e.target.name]: !this.state[e.target.name],
    });
  }

  radioHandler(e) {
    this.setState({
      rating: e.target.id,
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "CadetBlue" }}>
        <div className="home-page">
          <h1>Filters</h1>

          <form>
            {/* Search term */}
            <div className="form-field">
              <label className="form-field__label">Search</label>

              <input
                name="search-term"
                type="text"
                value={this.state.term}
                onChange={this.textInputHandler}
              />
            </div>

            {/* Used */}
            <div className="form-field">
              <label className="checkbox-field">
                <input name="used" type="checkbox" />
                <span className="checkbox-field__label">
                  Include used copies
                </span>
              </label>
            </div>

            {/* Preferred language */}
            <div className="form-field">
              <label className="form-field__label">Language</label>

              <label className="checkbox-field">
                <input
                  name="english"
                  type="checkbox"
                  onChange={this.checkboxHandler}
                  checked={this.state.english}
                />
                <span className="checkbox-field__label">English</span>
              </label>

              <label className="checkbox-field">
                <input
                  name="german"
                  type="checkbox"
                  onChange={this.checkboxHandler}
                  checked={this.state.german}
                />
                <span className="checkbox-field__label">German</span>
              </label>

              <label className="checkbox-field">
                <input
                  name="italian"
                  type="checkbox"
                  onChange={this.checkboxHandler}
                  checked={this.state.italian}
                />
                <span className="checkbox-field__label">Italian</span>
              </label>

              <label className="checkbox-field">
                <input
                  name="chinese"
                  type="checkbox"
                  onChange={this.checkboxHandler}
                  checked={this.state.chinese}
                />
                <span className="checkbox-field__label">Chinese</span>
              </label>

              <label className="checkbox-field">
                <input
                  name="russian"
                  type="checkbox"
                  onChange={this.checkboxHandler}
                  checked={this.state.russian}
                />
                <span className="checkbox-field__label">Russian</span>
              </label>
            </div>

            {/* Book type */}
            <div className="form-field">
              <label className="form-field__label">Book type</label>

              <label className="checkbox-field">
                <input
                  name="ebook"
                  type="checkbox"
                  checked={this.state.ebook}
                  onChange={this.checkboxHandler}
                />
                <span className="checkbox-field__label">E-Book</span>
              </label>
              <label className="checkbox-field">
                <input
                  name="paperback"
                  type="checkbox"
                  checked={this.state.paperback}
                  onChange={this.checkboxHandler}
                />
                <span className="checkbox-field__label">Paperback</span>
              </label>
              <label className="checkbox-field">
                <input
                  name="hardcover"
                  type="checkbox"
                  checked={this.state.hardcover}
                  onChange={this.checkboxHandler}
                />
                <span className="checkbox-field__label">Hardcover</span>
              </label>
            </div>

            {/* Rating */}
            <div className="form-field">
              <label className="form-field__label">Rating</label>
              <label className="radio-field">
                <input
                  id="1"
                  name="customer-rating"
                  type="radio"
                  checked={this.state.rating === "1" && true}
                  onChange={this.radioHandler}
                />
                <span className="radio-field__label">1 and up</span>
              </label>

              <label className="radio-field">
                <input
                  id="2"
                  name="customer-rating"
                  type="radio"
                  checked={this.state.rating === "2" && true}
                  onChange={this.radioHandler}
                />
                <span className="radio-field__label">2 and up</span>
              </label>

              <label className="radio-field">
                <input
                  id="3"
                  name="customer-rating"
                  type="radio"
                  checked={this.state.rating === "3" && true}
                  onChange={this.radioHandler}
                />
                <span className="radio-field__label">3 and up</span>
              </label>

              <label className="radio-field">
                <input
                  id="4"
                  name="customer-rating"
                  type="radio"
                  checked={this.state.rating === "4" && true}
                  onChange={this.radioHandler}
                />
                <span className="radio-field__label">4 and up</span>
              </label>

              <label className="radio-field">
                <input
                  id="5"
                  name="customer-rating"
                  type="radio"
                  checked={this.state.rating === "5" && true}
                  onChange={this.radioHandler}
                />
                <span className="radio-field__label">5 and up</span>
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
