import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";
import NextLink from "next/link";
import { Copyright } from "../components/dashboard/Copyright";

const Index = ({ users }) => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        GraphQL Fullstack Web App
      </Typography>
      <NextLink href="/login">
        <MuiLink style={{ cursor: "pointer" }} color="secondary">
          Login
        </MuiLink>
      </NextLink>{" "}
      ,{" "}
      <NextLink href="/signup">
        <MuiLink style={{ cursor: "pointer" }} color="secondary">
          Sign up
        </MuiLink>
      </NextLink>
      ,{" or "}
      <NextLink href="/app">
        <MuiLink style={{ cursor: "pointer" }} color="secondary">
          skip to the Dashboard.
        </MuiLink>
      </NextLink>
      <div className="p-4 shadow rounded bg-white">
        <h1 className="text-purple-500 leading-normal">Next.js</h1>
        <p className="text-gray-500">with Tailwind CSS</p>
      </div>
    </Box>
    <Box>
      <Copyright />
    </Box>
  </Container>
);

export default Index;
