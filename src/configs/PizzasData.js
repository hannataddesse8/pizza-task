import React from "react";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const pizzasTableColumns = [
  {
    title: "Toppings",
    dataIndex: "data",
    key: "data",
    render: (_, row) => {
      return (
        <ul>
          {row.data.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      );
    },
  },
  {
    title: "Total Orders",
    dataIndex: "count",
    key: "count",
  },
  {
    title: "Rank",
    dataIndex: "",
    key: "rank",
    render: (_, row, index) => {
      return <>{index + 1}</>;
    },
  },
];
