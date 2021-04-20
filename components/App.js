import React from "react";
import ColumnSorting from "./ColumnSorting";

const data = [
  {
    id: 1,
    project: "Software Development",
    type: "Development",
    priority: "High",
    owner: "Jason Smith",
    status: {
      value: "Assigned",
      bgColor: "bg-blue-300",
      textColor: "text-blue-700",
    },
    createdAt: "6/28/2020",
    dueOn: "9/28/2020",
  },
  {
    id: 2,
    project: "Jade's website",
    type: "Design",
    priority: "Medium",
    owner: "Jason Smith",
    status: {
      value: "Pending",
      bgColor: "bg-red-300",
      textColor: "text-red-700",
    },
    createdAt: "6/28/2020",
    dueOn: "9/28/2020",
  },
  {
    id: 3,
    project: "Marketing Visuals",
    type: "Marketing",
    priority: "Low",
    owner: "Jason Smith",
    status: {
      value: "Assigned",
      bgColor: "bg-blue-300",
      textColor: "text-blue-700",
    },
    createdAt: "6/28/2020",
    dueOn: "9/28/2020",
  },
  {
    id: 4,
    project: "Jade's website",
    type: "Design",
    priority: "Medium",
    owner: "Jason Smith",
    status: {
      value: "Pending",
      bgColor: "bg-red-300",
      textColor: "text-red-700",
    },
    createdAt: "6/28/2020",
    dueOn: "9/28/2020",
  },
  {
    id: 5,
    project: "Marketing Visuals",
    type: "Marketing",
    priority: "Low",
    owner: "Jason Smith",
    status: {
      value: "Pending",
      bgColor: "bg-blue-300",
      textColor: "text-blue-700",
    },
    createdAt: "6/28/2020",
    dueOn: "9/28/2020",
  },
  {
    id: 6,
    project: "Jade's website",
    type: "Design",
    priority: "Medium",
    owner: "Jason Smith",
    status: {
      value: "Pending",
      bgColor: "bg-red-300",
      textColor: "text-red-700",
    },
    createdAt: "6/28/2020",
    dueOn: "9/28/2020",
  },
  {
    id: 7,
    project: "Marketing Visuals",
    type: "Marketing",
    priority: "Low",
    owner: "Jason Smith",
    status: {
      value: "Pending",
      bgColor: "bg-blue-300",
      textColor: "text-blue-700",
    },
    createdAt: "6/28/2020",
    dueOn: "9/28/2020",
  },
];
class App extends React.Component {
  render() {
    return (<div>
      <ColumnSorting data={data} />
    </div>)
    ;
  }
}

export default App;
