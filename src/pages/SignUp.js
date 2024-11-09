import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const SignUp = () => {
  return (
    <Box
      minHeight="90vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxWidth="xs">
        {/* 타이틀 */}
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Typography variant="h5" className="eng">
            SWM: Study With Me!
          </Typography>
        </Box>

        <Divider />

        {/* 회원가입 폼 */}
        <Box component="form" my={2}>
          <TextField label="ID" variant="outlined" fullWidth margin="normal" />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="이름"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Box>

        {/* 회원가입 버튼 */}
        <Box my={2}>
          <Button variant="contained" color="primary" fullWidth>
            회원가입
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SignUp;
