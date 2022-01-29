import { useState, useContext } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message,
} from "semantic-ui-react";

import { gql, useMutation } from "@apollo/client";

import { useNavigate } from "react-router-dom";

import { useForm } from "../hooks/useForm";

import { AuthContext } from "../context/auth";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // Error handling
  const [errors, setErrors] = useState({});

  // Language Support
  const { t } = useTranslation();
  // console.log(i18n.language)
  const authCallback = () => {
    console.log(values);

    loginUser();
  };
  const { onChange, onSubmit, values } = useForm(authCallback, {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { login } = useContext(AuthContext);

  const [loginUser, { loading }] = useMutation(LOGIN, {
    variables: values,
    update(proxy, { data: { login: userData } }) {
      login(userData);
      navigate("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0]?.extensions.errors);
    },
  });

  return (
    <Grid textAlign="center" style={{ height: "80vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          {t("auth.login_title")}
        </Header>
        <Form
          size="large"
          onSubmit={onSubmit}
          className={loading ? "loading" : ""}
        >
          <Segment stacked textAlign="left">
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              placeholder={t("auth.email")}
              name="email"
              value={values.email}
              error={errors.email ? true : false}
              onChange={onChange}
            />
            {errors.email && <Message negative>{errors.email}</Message>}
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder={t("auth.password")}
              type={showPassword ? "text" : "password"}
              name="password"
              value={values.password}
              error={errors.password ? true : false}
              onChange={onChange}
            />
            {errors.password && <Message negative>{errors.password}</Message>}
            <Form.Checkbox
              value={showPassword}
              label={t("auth.show_password")}
              onChange={() => setShowPassword((prevState) => !prevState)}
            />
            <Button primary fluid size="large" onClick={onSubmit}>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      first_name
      last_name
      id
      picture
      token
      username
    }
  }
`;

export default Login;
