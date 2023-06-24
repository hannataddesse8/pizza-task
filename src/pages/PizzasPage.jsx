import React, { useEffect } from "react";
import { Typography, Table } from "antd";
import { pizzasTableColumns } from "../configs/PizzasData";
import { usePizza, useApp } from "../hooks";

const PizzasPage = () => {
  const { Title } = Typography;
  const { pizzas, fetchPizzas } = usePizza();
  const { isLoading } = useApp();

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <div>
      <Title level={2}>Pizzas list</Title>
      <Table
        columns={pizzasTableColumns}
        dataSource={pizzas}
        loading={isLoading}
      />
    </div>
  );
};

export default PizzasPage;
