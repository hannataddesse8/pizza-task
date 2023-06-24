import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useApp } from "./useApp";
import { addPizzas } from "../store/pizzaSlice";
import { getDistinctArrays } from "../utils/getDistinctArrays";

export const usePizza = () => {
  const { toggleIsLoading } = useApp();
  const dispatch = useDispatch();

  const fetchPizzas = async () => {
    try {
      toggleIsLoading(true);
      const response = await axios.get("http://files.olo.com/pizzas.json");
      const sortedDistinctArrays = getDistinctArrays(
        response.data.map((item) => item.toppings)
      ).sort((a, b) => b.count - a.count);
      dispatch(addPizzas(sortedDistinctArrays));
    } catch (err) {
      console.log(err);
    } finally {
      toggleIsLoading(false);
    }
  };

  const pizzas = useSelector((state) => state.pizza.data);
  return { pizzas, fetchPizzas };
};
