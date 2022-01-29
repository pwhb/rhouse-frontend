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
  List,
} from "semantic-ui-react";

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em", marginTop: "10rem" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <List link inverted>
                <Header inverted as="h4" content="About" />
                <List.Item as="a">About Us</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Careers</List.Item>
                <List.Item as="a">Privacy</List.Item>
                <List.Item as="a">Terms</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header as="h4" inverted>
                Copyright © 2021 rhouse.com
              </Header>
              <Header as="h4" inverted>
                All rights reserved.
              </Header>
              <p>
                <Icon name="home" />
                rHouse is a non-profit group committed to helping people find a
                place to live so fewer people die from lack of shelter and
                guillotining landlords.
              </p>
              <Header>
                <Button color="facebook">
                  <Icon name="facebook" /> Facebook
                </Button>
                <Button color="twitter">
                  <Icon name="twitter" /> Twitter
                </Button>
                <Button color="linkedin">
                  <Icon name="linkedin" /> LinkedIn
                </Button>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
