import { FormControl, FormLabel, Input } from "@chakra-ui/react";
const FormRow = ({ type, name, value, handleChange, labelText, w }) => {
  return (
    <FormControl id={name}>
      <FormLabel htmlFor={name}> {labelText || name}</FormLabel>
      <Input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        width={w}
      />
    </FormControl>
  );
};
export default FormRow;
