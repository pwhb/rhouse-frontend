import { useEffect, useState, useContext } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message,
} from "semantic-ui-react";

import { gql, useMutation } from "@apollo/client";

import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "../hooks";

import { AuthContext } from "../context/auth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // Error handling
  const [errors, setErrors] = useState({});

  const authCallback = () => {
    console.log(values);

    registerUser();
  };
  const { onChange, onSubmit, values } = useForm(authCallback, {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { login } = useContext(AuthContext);

  const [registerUser, { loading }] = useMutation(REGISTER, {
    variables: values,
    update(proxy, { data: { register: userData } }) {
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
          Create your account
        </Header>
        <Form
          size="large"
          onSubmit={onSubmit}
          className={loading ? "loading" : ""}
        >
          <Segment stacked textAlign="left">
            <Form.Group widths="equal">
              <Form.Input
                fluid
                placeholder="First name *"
                name="first_name"
                value={values.first_name}
                error={errors?.first_name ? true : false}
                onChange={onChange}
              />
              <Form.Input
                fluid
                placeholder="Last name"
                name="last_name"
                value={values.last_name}
                onChange={onChange}
              />
            </Form.Group>
            {errors?.first_name && (
              <Message negative>{errors?.first_name}</Message>
            )}

            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Email *"
              name="email"
              value={values.email}
              error={errors?.email ? true : false}
              onChange={onChange}
            />
            {errors?.email && <Message negative>{errors?.email}</Message>}
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password *"
              type={showPassword ? "text" : "password"}
              name="password"
              value={values.password}
              error={errors?.password ? true : false}
              onChange={onChange}
            />
            {errors?.password && <Message negative>{errors?.password}</Message>}
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password Again *"
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={values.confirmPassword}
              error={errors?.confirmPassword ? true : false}
              onChange={onChange}
            />
            {errors?.confirmPassword && (
              <Message negative>{errors?.confirmPassword}</Message>
            )}
            <Form.Checkbox
              value={showPassword}
              label="Show password"
              onChange={() => setShowPassword((prevState) => !prevState)}
            />
            <Button primary fluid size="large" onClick={onSubmit}>
              Register
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

const REGISTER = gql`
  mutation register(
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      first_name: $first_name
      last_name: $last_name
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      first_name
      last_name
      id
      email
      picture
      token
      username
    }
  }
`;

export default Register;
