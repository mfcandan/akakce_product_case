import { Title } from "@mantine/core";
import { Link } from "@remix-run/react";

const HomeLink = () => {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
      <Title>Akakçe Case App</Title>
    </Link>
  );
};

export default HomeLink;
