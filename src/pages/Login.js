import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Divider,
} from "@mui/material";

const Login = () => {
  return (
    <Box
      minHeight="90vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxWidth="xs" sx={{ margin: "auto", mt: 15 }}>
        {/* 타이틀 */}
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <Typography variant="h5" className="eng">
            SWM: Study With Me!
          </Typography>
        </Box>

        <Divider />

        {/* 로그인 폼 */}
        <Box component="form" mt={2}>
          <TextField label="ID" variant="outlined" fullWidth margin="normal" />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <FormControlLabel control={<Checkbox />} label="아이디 저장" />
          <Button variant="outlined" fullWidth color="info" type="submit">
            로그인
          </Button>
        </Box>

        {/* 회원가입 링크 */}
        <Divider />
        <Box mt={2}>
          <Button variant="contained" color="primary" fullWidth>
            회원가입
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
