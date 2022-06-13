import { FormControl, FormLabel, Select } from "@chakra-ui/react";

const FormRowOptions = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  w,
  list,
}) => {
  return (
    <FormControl id={name}>
      <FormLabel htmlFor={name}> {labelText || name}</FormLabel>
      <Select
        placeholder="Select option"
        name={name}
        value={value}
        onChange={handleChange}
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
};
export default FormRowOptions;
