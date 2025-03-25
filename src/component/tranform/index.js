// src/components/LanguageModal.js

import React, { useState } from "react";
import { Modal, Button, Select } from "antd";
import { useTranslation } from "react-i18next";

const LanguageModal = ({ visible, onClose }) => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language); // Default language is current language

  const handleLangChange = (value) => {
    setLang(value);
    i18n.changeLanguage(value); // Change language using i18next
    onClose(); // Close modal after changing language
  };

  return (
    <Modal
      title={t("selectLanguage")}
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Select
        value={lang}
        onChange={handleLangChange}
        style={{ width: "100%" }}
      >
        <Select.Option value="en">English</Select.Option>
        <Select.Option value="fr">French</Select.Option>
        <Select.Option value="es">Spanish</Select.Option>
        <Select.Option value="de">German</Select.Option>
        <Select.Option value="vn">Vietnamese</Select.Option>
        {/* Add more languages as needed */}
      </Select>
    </Modal>
  );
};

export default LanguageModal;
