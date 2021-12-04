import React from "react";
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
import { useForm } from "../hooks";

const Sell = () => {
  // Error handling
  const [errors, setErrors] = useState({});
  const authCallback = () => {};
  const { onChange, onSubmit, values } = useForm(authCallback, {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // const [createListing, { loading }] = useMutation(CREATE_LISTING, {
  //   variables: values,
  //   update(proxy, { data: { login: userData } }) {},
  //   onError(err) {
  //     setErrors(err.graphQLErrors[0]?.extensions.errors);
  //   },
  // });
  const loading = null;
  return (
    <Grid textAlign="center" style={{ height: "80vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          Log in to your account
        </Header>
        <Form
          size="large"
          onSubmit={onSubmit}
          className={loading ? "loading" : ""}
        >
          <Segment stacked textAlign="left">
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Email *"
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
              placeholder="Password *"
              type="text"
              name="password"
              value={values.password}
              error={errors.password ? true : false}
              onChange={onChange}
            />
            {errors.password && <Message negative>{errors.password}</Message>}
            <Form.Checkbox
              value={values}
              label="Show password"
              onChange={() => {}}
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

// const CREATE_LISTING = gql``;
export default Sell;
