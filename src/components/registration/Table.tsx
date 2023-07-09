import React from "react";
import {
  Table as TableRoot,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
} from "@mui/material";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

const TableStyle = styled(TableRoot)`
  width: 100%;
  height: auto;
`;
const CardRoot = styled(Card)`
  width: 70%;
`;

const SearchInputContainer = styled("div")`
  width: 100%;
  height: 3.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 2rem;
`;
const SearchInput = styled("input")`
  width: calc(100% - 2.2rem);
  height: 100%;
  outline: none;
  border: 0.005rem solid #e0e0e0;
  border-radius: 0.3rem;
  paddingleft: 1rem;

  ::placeholder {
    color: #999;
    padding-left: 0.6rem;
    font-size: 1rem;
  }
`;

const Table = () => {
  const { records } = useSelector((state: any) => state.register);
  console.log(records);
  const [keyword, setKeyword] = React.useState("");
  const filteredRecords = records.filter((rcds) => {
    if (!keyword) {
      return true;
    }
    return rcds?.name?.toLowerCase()?.includes(keyword?.toLowerCase());
  });

  return (
    <CardRoot sx={{ position: "relative" }}>
      <SearchInputContainer>
        <SearchInput
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search by keyword"
          type="text"
        />
      </SearchInputContainer>
      <TableStyle>
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">DOB</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">Pincode</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRecords?.map((e, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row" align="left">
                {e?.name}
              </TableCell>
              <TableCell align="center">{e?.email}</TableCell>
              <TableCell align="center">{e?.date}</TableCell>
              <TableCell align="center">{e?.city}</TableCell>
              <TableCell align="center">{e?.pincode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableStyle>
    </CardRoot>
  );
};

export default Table;
