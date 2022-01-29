import { useState, useContext } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message,
  Label,
  Checkbox,
  Input,
  Dropdown,
  Menu,
  ListDescription,
} from "semantic-ui-react";
import { gql, useMutation } from "@apollo/client";

import { AuthContext } from "../context/auth";
import { useOptions } from "../hooks/useOptions";
import { useTranslation } from "react-i18next";

const Sell = () => {
  // Error handling
  const [errors, setErrors] = useState({});
  const authCallback = () => {};

  // const { user } = useContext(AuthContext);

  const {
    typeOptions,
    townshipOptions,
    stateOrDivisionOptions,
    listingData,
    currencyOptions,
    setListingData,
    priceInWords,
  } = useOptions();
  const { t } = useTranslation();

  // const [form, setForm] = useState({
  //   user: user.id, // pwhbdev
  //   is_rental: false,
  //   type: null, // Apartment, Condo, House
  //   township: Number, // Insein
  //   state_or_division: Number, //Yangon
  //   coordinate: [Number],
  //   my: {
  //     title: String, // Home for sale
  //     description: String,
  //     street: String, // Myat Eain Yar
  //     quarter: String, // Da Nyin Gone
  //     places_nearby: String,
  //   },
  //   en: {
  //     title: String, // Home for sale
  //     description: String,
  //     street: String, // Myat Eain Yar
  //     quarter: String, // Da Nyin Gone
  //     places_nearby: String,
  //   },
  //   floor: Number,
  //   flooring: Number, //
  //   length: Number, // 40
  //   width: Number, // 20
  //   lot_length: Number, // 48
  //   lot_width: Number, // 24
  //   bedrooms: Number, // 2
  //   bathrooms: Number, // 1
  //   hall: Boolean, // false
  //   price: Number,
  //   currency: Number, // MMK, USD
  //   pictures: [String],
  //   created_at: Date, //
  //   updated_at: Date, //
  //   is_sold: Date,
  // });
  // const [createListing, { loading }] = useMutation(CREATE_LISTING, {
  //   variables: listingData,
  //   update(proxy, { data: { login: userData } }) {},
  //   onError(err) {
  //     setErrors(err.graphQLErrors[0]?.extensions.errors);
  //   },
  // });

  const onSubmit = () => {};
  const onChange = () => {};
  const loading = null;
  const readyToSubmit =
    listingData.type !== null &&
    listingData.width !== null &&
    listingData.length !== null &&
    listingData.township !== null &&
    listingData.state_or_division !== null;
  return (
    <Grid textAlign="center" style={{ height: "80vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: "60rem" }}>
        <Header as="h2" textAlign="center">
          {listingData.is_rental ? t("sell.rent_title") : t("sell.sell_title")}
        </Header>
        <Form
          size="large"
          onSubmit={onSubmit}
          className={loading ? "loading" : ""}
        >
          <Menu tabular attached="top">
            <Menu.Item
              name={t("sell.rent")}
              active={listingData.is_rental}
              onClick={() => {
                setListingData({ ...listingData, is_rental: true });
              }}
            />
            <Menu.Item
              name={t("sell.sell")}
              active={!listingData.is_rental}
              onClick={() => {
                setListingData({ ...listingData, is_rental: false });
              }}
            />
          </Menu>
          <Segment attached="bottom" textAlign="center">
            <Menu widths={3} inverted>
              {typeOptions.map((option) => (
                <Menu.Item
                  key={option.text}
                  name={option.text}
                  color="blue"
                  active={listingData.type === option.value}
                  onClick={() => {
                    setListingData({
                      ...listingData,
                      type: parseInt(option.value),
                    });
                  }}
                />
              ))}
            </Menu>
            {listingData.type !== null && (
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  placeholder={t("listing.length")}
                  label={t("listing.length")}
                  name="length"
                  value={listingData.length}
                  onChange={(e) => {
                    setListingData({
                      ...listingData,
                      length: parseInt(e.target.value),
                    });
                  }}
                />
                <Form.Input
                  fluid
                  placeholder={t("listing.width")}
                  label={t("listing.width")}
                  name="width"
                  value={listingData.width}
                  onChange={(e) => {
                    setListingData({
                      ...listingData,
                      width: parseInt(e.target.value),
                    });
                  }}
                />
              </Form.Group>
            )}
            {listingData.type === 2 && (
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  placeholder={t("listing.lot_length")}
                  label={t("listing.lot_length")}
                  name="lot_length"
                  value={listingData.lot_length}
                  onChange={(e) => {
                    setListingData({
                      ...listingData,
                      lot_length: parseInt(e.target.value),
                    });
                  }}
                />
                <Form.Input
                  fluid
                  placeholder={t("listing.lot_width")}
                  label={t("listing.lot_width")}
                  name="lot_width"
                  value={listingData.lot_width}
                  onChange={(e) => {
                    setListingData({
                      ...listingData,
                      lot_width: parseInt(e.target.value),
                    });
                  }}
                />
              </Form.Group>
            )}
            <Form.Group widths="equal">
              <Form.Select
                options={stateOrDivisionOptions}
                label={t("listing.state_or_division")}
                onChange={(e, data) => {
                  setListingData({
                    ...listingData,
                    state_or_division: data.value,
                  });
                }}
                value={listingData.state_or_division}
              />
              <Form.Select
                options={townshipOptions[listingData.state_or_division]}
                label={t("listing.township")}
              />
            </Form.Group>

            <Form.Group>
              <Form.Input
                label={
                  listingData.type === 2
                    ? t("listing.room")
                    : t("listing.room_and_building")
                }
                placeholder={
                  listingData.type === 2
                    ? t("listing.room")
                    : t("listing.room_and_building")
                }
                width={6}
              />

              <Form.Input
                label={t("listing.street")}
                placeholder={t("listing.street")}
                width={6}
              />
              <Form.Input
                label={t("listing.quarter")}
                placeholder={t("listing.quarter")}
                width={6}
              />
            </Form.Group>
            <Form.Group inline>
              {/* <Input labelPosition="right" type="text" placeholder="100000">
                <Label basic>{t("listing.price")}</Label>
                <input
                  type="number"
                  min={listingData.is_rental ? 10000 : 5000000}
                  step={listingData.is_rental ? 10000 : 100000}
                  negative={
                    listingData.is_rental
                      ? listingData.price < 10000
                      : listingData.price < 5000000
                  }
                />
                <Label>
                  {" "}
                  <Dropdown
                    options={currencyOptions}
                    onChange={(e, data) => {
                      setListingData({
                        ...listingData,
                        currency: data.value,
                      });
                    }}
                    value={listingData.currency}
                  />
                </Label>
              </Input> */}

              {/* <Input
                label={
                  <Dropdown
                    options={currencyOptions}
                    onChange={(e, data) => {
                      setListingData({
                        ...listingData,
                        currency: data.value,
                      });
                    }}
                    value={listingData.currency}
                  />
                }
                type="number"
                width={6}
                min={listingData.is_rental ? 10000 : 5000000}
                step={listingData.is_rental ? 10000 : 100000}
                negative={
                  listingData.is_rental
                    ? listingData.price < 10000
                    : listingData.price < 5000000
                }
                labelPosition="right"
                placeholder={t("listing.price")}
                value={listingData.price}
                onChange={(e) => {
                  setListingData({ ...listingData, price: e.target.value });
                }}
                className="currency-input"
              /> */}
              <Form.Field width={8}>
                <label> {t("listing.price")}</label>
                <Input
                  label={
                    <Dropdown
                      options={currencyOptions}
                      onChange={(e, data) => {
                        setListingData({
                          ...listingData,
                          currency: data.value,
                        });
                      }}
                      value={listingData.currency}
                    />
                  }
                  type="number"
                  min={listingData.is_rental ? 10000 : 5000000}
                  step={listingData.is_rental ? 10000 : 100000}
                  negative={
                    listingData.is_rental
                      ? listingData.price < 10000
                      : listingData.price < 5000000
                  }
                  labelPosition="right"
                  placeholder={t("listing.price")}
                  value={listingData.price}
                  onChange={(e) => {
                    setListingData({
                      ...listingData,
                      price: parseInt(e.target.value),
                    });
                  }}
                />
              </Form.Field>
              <Form.Field width={6} style={{ textAlign: "center" }}>
                <label>{priceInWords()}</label>
              </Form.Field>

              <Form.Checkbox
                width={6}
                value={listingData.mortgage_ok}
                label={t("listing.mortgage_ok")}
                onChange={() => {
                  // console.log(listingData.mortgage_ok);
                  setListingData({
                    ...listingData,
                    mortgage_ok: !listingData.mortgage_ok,
                  });
                }}
              />
            </Form.Group>

            <Button
              primary
              textAlign="center"
              size="large"
              onClick={onSubmit}
              disabled={readyToSubmit}
              style={{ marginTop: "2rem" }}
            >
              {t("sell.submit")}
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

// const CREATE_LISTING = gql``;
export default Sell;
