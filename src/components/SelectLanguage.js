import { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

const SelectLanguage = ({ fixed }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (e, data) => {
    // console.log(e.target);
    console.log(i18n.language);
    i18n.changeLanguage(data.value);
  };

  const languageOptions = [
    { key: "English", text: "English", value: "en" },
    { key: "မြန်မာ", text: "မြန်မာ", value: "my" },
  ];
  return (
    <Dropdown
      button
      className="icon"
      //   floating
      labeled
      icon="world"
      options={languageOptions}
      //   search
      //   text="Change Language"
      value={i18n.language}
      //   compact
      //   inverted={!fixed}
      //   closeOnChange={true}
      onChange={changeLanguage}
    />
  );
};

export default SelectLanguage;
