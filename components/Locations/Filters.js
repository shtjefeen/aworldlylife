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
export default function Filters({
  filterCountries,
  min,
  max,
  setMin,
  setMax,
  setCountry,
  country,
  handleFilter,
}) {
  return (
    <Wrapper>
      <Title>Filters</Title>

      <Autocomplete
        options={filterCountries}
        getOptionLabel={(option) => option}
        fullWidth
        value={{ name: "All" }}
        style={{ margin: 0 }}
        value={country}
        onChange={(e, val) => setCountry(val)}
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
        value={min}
        onChange={(e) => setMin(e.target.value)}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        label="Maximum"
        variant="outlined"
        fullWidth
        type="number"
        value={max}
        onChange={(e) => setMax(e.target.value)}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: 30 }}
        // disabled={!country && !min && !max}
        onClick={handleFilter}
      >
        Apply filters
      </Button>
    </Wrapper>
  );
}

const countries = [{ name: "All" }];
