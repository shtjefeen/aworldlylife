import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Wrapper = styled.div`
  position: sticky;
  top: 100px;
`;
const Title = styled.h6`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin: 0;
  margin-bottom: 10px;
`;
export default function Filters() {
  return (
    <Wrapper>
      <Title>Filters</Title>

      <Autocomplete
        options={countries}
        getOptionLabel={(option) => option.name}
        fullWidth
        value={{ name: "All" }}
        style={{ margin: 0 }}
        renderInput={(params) => (
          <TextField {...params} label="Country" variant="outlined" />
        )}
      />
      <Title style={{ marginTop: 30 }}>Price</Title>

      <TextField
        label="Minimum"
        variant="outlined"
        fullWidth
        type="number"
        style={{ marginBottom: 15 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        label="Maximum"
        variant="outlined"
        fullWidth
        type="number"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: 30 }}
      >
        Apply filters
      </Button>
    </Wrapper>
  );
}

const countries = [{ name: "All" }];
