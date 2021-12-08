import { useState, useEffect, useCallback } from "react";

const useForm = () => {
  const [authValues, setAuthValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });

  const [addClothesValues, setAddClothesValues] = useState({
    name: "",
    price: "",
  });

  const [editClothesValue, setEditClothesValue] = useState({
    name: "",
    price: "",
  });

  const [searchClothesValue, setSearchClothesValue] = useState({
    search: "",
    priceFrom: "",
    priceTo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAuthValues({ ...authValues, [name]: value });
    setLoginValues({ ...loginValues, [name]: value });
    setAddClothesValues({ ...addClothesValues, [name]: value });
    setEditClothesValue({ ...editClothesValue, [name]: value });
    setSearchClothesValue({ ...searchClothesValue, [name]: value });
  };

  return {
    authValues,
    loginValues,
    addClothesValues,
    editClothesValue,
    searchClothesValue,
    handleChange,
  };
};

export default useForm;
