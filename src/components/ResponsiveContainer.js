import { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { createMedia } from "@artsy/fresnel";
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Visibility,
  Sidebar,
  Header,
} from "semantic-ui-react";

import SelectLanguage from "./SelectLanguage";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/auth";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

const DesktopContainer = ({ children }) => {
  const { user, logout } = useContext(AuthContext);

  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);
  const [activeLink, setActiveLink] = useState("/");
  const navigate = useNavigate();
  const handleItemClick = (e, { name }) => {
    setActiveLink(name);
    navigate(`${name}`);
  };
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    console.log(user);
    console.log(`Welcome ${user?.first_name} ${user?.last_name}`);
  }, [user]);

  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ padding: "1em 0em" }}
          vertical
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted={!fixed}
            pointing={true}
            secondary={!fixed}
            borderless={true}
            // fixed="top"
            // inverted={true}
            // pointing={true}
            // secondary={true}
            size="large"
          >
            <Container>
              <Menu.Item
                as="a"
                name="/"
                onClick={handleItemClick}
                active={activeLink === "/"}
                position="left"
              >
                <Icon name="home" size="big" />
                <Header
                  as="h1"
                  content="rHouse"
                  style={{ marginTop: "0.4rem" }}
                  inverted={!fixed}
                />
              </Menu.Item>
              <Menu.Item
                as="a"
                name="/rent"
                onClick={handleItemClick}
                active={activeLink === "/rent"}
              >
                {t("nav.rent")}
              </Menu.Item>
              <Menu.Item
                as="a"
                name="/buy"
                onClick={handleItemClick}
                active={activeLink === "/buy"}
              >
                {t("nav.buy")}
              </Menu.Item>
              <Menu.Item
                as="a"
                name="/sell"
                onClick={handleItemClick}
                active={activeLink === "/sell"}
              >
                {t("nav.sell")}
              </Menu.Item>
              <Menu.Item position="right">
                <SelectLanguage fixed={fixed} />
                {user ? (
                  <Button
                    as="a"
                    inverted={!fixed}
                    name="/login"
                    onClick={() => logout()}
                    active={activeLink === "/login"}
                    style={{ marginLeft: "0.5em" }}
                    negative
                  >
                    Log out
                  </Button>
                ) : (
                  <>
                    {" "}
                    <Button
                      as="a"
                      inverted={!fixed}
                      name="/login"
                      onClick={handleItemClick}
                      active={activeLink === "/login"}
                      style={{ marginLeft: "0.5em" }}
                    >
                      Log in
                    </Button>
                    <Button
                      as="a"
                      inverted={!fixed}
                      name="/register"
                      onClick={handleItemClick}
                      active={activeLink === "/register"}
                      primary={fixed}
                      style={{ marginLeft: "0.5em" }}
                    >
                      Sign Up
                    </Button>{" "}
                  </>
                )}
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
      </Visibility>
      {user && (
        <Container textAlign="right">
          Logged in as {`${user?.first_name} ${user?.last_name}`}
        </Container>
      )}
      {children}
    </Media>
  );
};

const MobileContainer = ({ children }) => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const handleSidebarHide = () => setSidebarOpened(false);
  const handleToggle = () => setSidebarOpened(true);

  const [activeLink, setActiveLink] = useState("/");
  const navigate = useNavigate();
  const handleItemClick = (e, { name }) => {
    setActiveLink(name);
    navigate(`${name}`);
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <Media as={Sidebar.Pushable} at="mobile">
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item
            as="a"
            name="/"
            onClick={handleItemClick}
            active={activeLink === "/"}
          >
            Home
          </Menu.Item>
          <Menu.Item
            as="a"
            name="/rent"
            onClick={handleItemClick}
            active={activeLink === "/rent"}
          >
            {t("nav.rent")}
          </Menu.Item>
          <Menu.Item
            as="a"
            name="/buy"
            onClick={handleItemClick}
            active={activeLink === "/buy"}
          >
            {" "}
            {t("nav.buy")}
          </Menu.Item>
          <Menu.Item
            as="a"
            name="/sell"
            onClick={handleItemClick}
            active={activeLink === "/sell"}
          >
            {" "}
            {t("nav.sell")}
          </Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            // style={{ padding: "1em 0em" }}
            vertical
          >
            <Menu inverted fixed="top">
              <Menu.Item onClick={handleToggle}>
                <Icon
                  name="sidebar"
                  // style={{ bottom: "1rem", position: "relative" }}
                />
              </Menu.Item>
              <Menu.Item onClick={handleToggle}>
                <Icon name="home" size="big" />
                <Header
                  inverted
                  as="h2"
                  content="rHouse"
                  style={{ bottom: "0.7rem", position: "relative" }}
                />
              </Menu.Item>

              {/* <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Sign Up
                  </Button>
                </Menu.Item> */}
            </Menu>
          </Segment>
        </Sidebar.Pusher>
        {children}
      </Sidebar.Pushable>
    </Media>
  );
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

export default ResponsiveContainer;
