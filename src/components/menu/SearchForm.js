import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function SearchForm({}, ref) {
  return (
    <Form className="d-flex m-3" onSubmit={(e) => e.preventDefault()}>
      <InputGroup>
        <FormControl
          type="search"
          placeholder="Search news, topis and more"
          ref={ref}
        />
        <Button variant="dark">
          <FaSearch />
        </Button>
      </InputGroup>
    </Form>
  );
}

export default SearchForm;
