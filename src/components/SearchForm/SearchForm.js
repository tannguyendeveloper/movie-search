import { AutoComplete, Form } from "antd";
import { SearchOutlined, LoadingOutlined } from "@ant-design/icons";
import "./SearchForm.scss";

const SearchForm = ({
  loading,
  onChange,
  onKeyUp,
  onSelect,
  onSubmit,
  options = [],
}) => {
  return (
    <Form onFinish={onSubmit}>
      <div className="SearchForm">
        <Form.Item
          name="query"
          className="autocomplete-container"
          required={true}
        >
          <AutoComplete
            onChange={onChange}
            defaultActiveFirstOption={false}
            options={options}
            onSearch={onChange}
            onSelect={onSelect}
            placeholder="Search Movies by Title"
            onKeyUp={onKeyUp}
          />
        </Form.Item>
        <button
          className="submit-button ant-btn ant-btn-submit ant-btn-circle"
          type="submit"
        >
          {!loading ? <SearchOutlined /> : <LoadingOutlined />}
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
