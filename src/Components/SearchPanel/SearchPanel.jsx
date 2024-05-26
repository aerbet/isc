import {Component} from "react";
import PropTypes from "prop-types";

class SearchPanel extends Component {
  
  state = {
    term: ''
  }
  
  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  }
  
  render() {
    return (
      <div>
        <label>
          <input  type="text"
                  className="border-2 border-slate-700 px-2 py-1.5 text-center"
                  placeholder="Поиск прибора..."
                  value={this.state.term}
                  onChange={this.onUpdateSearch}
          />
        </label>
      </div>
    );
  }
}

SearchPanel.propTypes = {
  onUpdateSearch: PropTypes.func
};

export default SearchPanel;