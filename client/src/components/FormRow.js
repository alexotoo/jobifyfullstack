import { FormControl, FormLabel, Input } from "@chakra-ui/react";
const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <FormControl id={name}>
      <FormLabel htmlFor={name}> {labelText || name}</FormLabel>
      <Input type={type} value={value} name={name} onChange={handleChange} />
    </FormControl>
  );
};
export default FormRow;
