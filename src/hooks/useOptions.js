import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useOptions = () => {
  const [listingData, setListingData] = useState({
    // user, // pwhbdev
    is_rental: true,
    mortgage_ok: false,
    type: null, // Apartment, Condo, House
    township: null, // Insein
    state_or_division: null, //Yangon
    coordinate: [],
    my: {
      title: null, // Home for sale
      description: null,
      street: null, // Myat Eain Yar
      quarter: null, // Da Nyin Gone
      places_nearby: [],
    },
    en: {
      title: null, // Home for sale
      description: null,
      street: null, // Myat Eain Yar
      quarter: null, // Da Nyin Gone
      places_nearby: [],
    },
    floor: null,
    flooring: null, //
    length: null, // 40
    width: null, // 20
    lot_length: null, // 48
    lot_width: null, // 24
    bedrooms: null, // 2
    bathrooms: null, // 1
    hall: Boolean, // false
    price: 10000,
    currency: 0, // MMK, USD
    pictures: [null],
    // created_at: Date, //
    // updated_at: Date, //
    // is_sold: Date,
  });

  const { t, i18n } = useTranslation();
  const typeOptions = [
    { key: "Apartment", text: t("options.type.apartment"), value: 0 },
    { key: "Condo", text: t("options.type.condo"), value: 1 },
    { key: "House", text: t("options.type.house"), value: 2 },
  ];

  const stateOrDivisionOptions = [
    {
      key: "Ayeyarwaddy",
      text: t("options.states.ayeyarwaddy"),
      value: 0,
    },
    { key: "Bago", text: t("options.states.bago"), value: 1 },
    { key: "Chin", text: t("options.states.chin"), value: 2 },
    { key: "Kachin", text: t("options.states.kachin"), value: 3 },
    { key: "Kayah", text: t("options.states.kayah"), value: 4 },
    { key: "Kayin", text: t("options.states.kayin"), value: 5 },
    { key: "Magwe", text: t("options.states.magwe"), value: 6 },
    { key: "Mandalay", text: t("options.states.mandalay"), value: 7 },
    { key: "Mon", text: t("options.states.mon"), value: 8 },
    { key: "Rakhine", text: t("options.states.rakhine"), value: 9 },
    { key: "Sagaing", text: t("options.states.sagaing"), value: 10 },
    { key: "Shan", text: t("options.states.shan"), value: 11 },
    {
      key: "Thaninthayi",
      text: t("options.states.thaninthayi"),
      value: 12,
    },
    { key: "Yangon", text: t("options.states.yangon"), value: 13 },
  ];

  const townshipOptions = {
    13: [
      { key: "Ahlone", text: t("options.townships.13.ahlone"), value: 0 },
      { key: "Bahan", text: t("options.townships.13.bahan"), value: 1 },
      {
        key: "Botataung",
        text: t("options.townships.13.botataung"),
        value: 2,
      },
      {
        key: "Cocokyun",
        text: t("options.townships.13.cocokyun"),
        value: 3,
      },
      { key: "Dagon", text: t("options.townships.13.dagon"), value: 4 },
      {
        key: "Dagon Seikkan",
        text: t("options.townships.13.dagon seikkan"),
        value: 5,
      },
      { key: "Dala", text: t("options.townships.13.dala"), value: 6 },
      { key: "Dawbon", text: t("options.townships.13.dawbon"), value: 7 },
      {
        key: "East Dagon",
        text: t("options.townships.13.east dagon"),
        value: 8,
      },
      { key: "Hlaing", text: t("options.townships.13.hlaing"), value: 9 },
      {
        key: "Hlaingthaya",
        text: t("options.townships.13.hlaingthaya"),
        value: 10,
      },
      { key: "Hlegu", text: t("options.townships.13.hlegu"), value: 11 },
      {
        key: "Hmawbi",
        text: t("options.townships.13.hmawbi"),
        value: 12,
      },
      {
        key: "Htantabin",
        text: t("options.townships.13.htantabin"),
        value: 13,
      },
      {
        key: "Insein",
        text: t("options.townships.13.insein"),
        value: 14,
      },
      {
        key: "Kamayut",
        text: t("options.townships.13.kamayut"),
        value: 15,
      },
      {
        key: "Kawhmu",
        text: t("options.townships.13.kawhmu"),
        value: 16,
      },
      { key: "Kayan", text: t("options.townships.13.kayan"), value: 17 },
      {
        key: "Kungyangon",
        text: t("options.townships.13.kungyangon"),
        value: 18,
      },
      {
        key: "Kyauktada",
        text: t("options.townships.13.kyauktada"),
        value: 19,
      },
      {
        key: "Kyauktan",
        text: t("options.townships.13.kyauktan"),
        value: 20,
      },
      {
        key: "Kyimyindaing",
        text: t("options.townships.13.kyimyindaing"),
        value: 21,
      },
      {
        key: "Lanmadaw",
        text: t("options.townships.13.lanmadaw"),
        value: 22,
      },
      { key: "Latha", text: t("options.townships.13.latha"), value: 23 },
      {
        key: "Mayangon",
        text: t("options.townships.13.mayangon"),
        value: 24,
      },
      {
        key: "Mingala Taungnyunt",
        text: t("options.townships.13.mingala taungnyunt"),
        value: 25,
      },
      {
        key: "Mingaladon",
        text: t("options.townships.13.mingaladon"),
        value: 26,
      },
      {
        key: "North Dagon",
        text: t("options.townships.13.north dagon"),
        value: 27,
      },
      {
        key: "North Okkalapa",
        text: t("options.townships.13.north okkalapa"),
        value: 28,
      },
      {
        key: "Pabedan",
        text: t("options.townships.13.pabedan"),
        value: 29,
      },
      {
        key: "Pazundaung",
        text: t("options.townships.13.pazundaung"),
        value: 30,
      },
      {
        key: "Sanchaung",
        text: t("options.townships.13.sanchaung"),
        value: 31,
      },
      {
        key: "Seikkan",
        text: t("options.townships.13.seikkan"),
        value: 32,
      },
      {
        key: "Seikkyi Kanaungto",
        text: t("options.townships.13.seikkyi kanaungto"),
        value: 33,
      },
      {
        key: "Shwepyitha",
        text: t("options.townships.13.shwepyitha"),
        value: 34,
      },
      {
        key: "South Dagon",
        text: t("options.townships.13.south dagon"),
        value: 35,
      },
      {
        key: "South Okkalapa",
        text: t("options.townships.13.south okkalapa"),
        value: 36,
      },
      {
        key: "Taikkyi",
        text: t("options.townships.13.taikkyi"),
        value: 37,
      },
      { key: "Tamwe", text: t("options.townships.13.tamwe"), value: 38 },
      {
        key: "Thaketa",
        text: t("options.townships.13.thaketa"),
        value: 39,
      },
      {
        key: "Thanlyin",
        text: t("options.townships.13.thanlyin"),
        value: 40,
      },
      {
        key: "Thingangyun",
        text: t("options.townships.13.thingangyun"),
        value: 41,
      },
      {
        key: "Thongwa",
        text: t("options.townships.13.thongwa"),
        value: 42,
      },
      {
        key: "Twante",
        text: t("options.townships.13.twante"),
        value: 43,
      },
      {
        key: "Yankin",
        text: t("options.townships.13.yankin"),
        value: 44,
      },
    ],
  };

  const currencyOptions = [
    { key: "MMK", text: t("options.currency.mmk"), value: 0 },
    { key: "USD", text: t("options.currency.usd"), value: 1 },
  ];

  const englishToMyanmar = (num) => {
    switch (num) {
      case "0":
        return "၀";
      case "1":
        return "၁";
      case "2":
        return "၂";
      case "3":
        return "၃";
      case "4":
        return "၄";
      case "5":
        return "၅";
      case "6":
        return "၆";
      case "7":
        return "၇";
      case "8":
        return "၈";
      case "9":
        return "၉";
      default:
        return null;
    }
  };

  const priceInWords = () => {
    const { price, currency } = listingData;
    const unit =
      currency === 0 ? t("options.currency.mmk") : t("options.currency.usd");
    const priceString =
      i18n.language === "my"
        ? price
            .toString()
            .split("")
            .reduce((prev, val, idx) => {
              return `${prev}${englishToMyanmar(val)}`;
            }, "")
        : price.toString();
    const numOfDigits = priceString.length;

    if (i18n.language === "my") {
      switch (true) {
        case numOfDigits < 5:
          return "Invalid Number";
        case numOfDigits === 5:
          return `${priceString[0]} သောင်း ${unit}`;
        case numOfDigits > 5 || priceString[numOfDigits - 5] !== "၀":
          return `${priceString.slice(0, -5)} သိန်း ${
            priceString[numOfDigits - 5] === "၀"
              ? ""
              : `${priceString[numOfDigits - 5]} သောင်း`
          } ${unit}`;
        case numOfDigits > 5 || priceString[numOfDigits - 5] === "၀":
          return `${priceString.slice(0, -5)} သိန်း ${unit}`;

        default:
          return "Invalid Number";
      }
    }
    switch (true) {
      case numOfDigits < 5:
        return "Invalid Number";
      case numOfDigits === 5:
        return `${priceString.slice(0, -3)}K ${unit}`;
      case numOfDigits === 6:
        return `${priceString.slice(0, -3)}K ${unit}`;
      case numOfDigits > 6:
        return `${priceString.slice(0, -6)}.${
          priceString[numOfDigits - 6]
        } Millions ${unit}`;

      default:
        return "Invalid Number";
    }
    // return numOfDigits;
  };

  return {
    typeOptions,
    stateOrDivisionOptions,
    townshipOptions,
    currencyOptions,
    listingData,
    setListingData,
    priceInWords,
  };
};
