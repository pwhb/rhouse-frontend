import { useTranslation } from "react-i18next";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table,
} from "semantic-ui-react";

const Navbar = () => {
  return (
    <Container>
      <Menu stackable>
        <Menu.Item>
          <img src="/logo.png" alt="logo" />
        </Menu.Item>
        <Menu.Item>Features</Menu.Item>
        <Menu.Item>Testimonials</Menu.Item>
        <Menu.Item>Sign-in</Menu.Item>
      </Menu>
    </Container>
  );
};

export default Navbar;
