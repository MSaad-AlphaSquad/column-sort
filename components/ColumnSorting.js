import React, { useState, useMemo, useEffect } from "react";
import _ from "lodash";

const ColumnSorting = (props) => {
  const list = [...props.data];
  const [data, setData] = useState(list)

 
  const [search,  setSearch] = useState("");

  const handleSearch = (e) => {
   setSearch(e.target.value)
   console.log(e.target.value)
  }

  useEffect(()=> {
    if (search.length > 0){
    const newData =  list.filter(item => item.project.includes(search));
    setData(newData)
  }
  else{
    setData(list)
  }
  },[search])

  const useSortableData = (items) => {
  const [sortConfig, setSortConfig] = useState(null);
  const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
          sortableItems.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
              return sortConfig.direction === 'M19 9l-7 7-7-7' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === 'M19 9l-7 7-7-7' ? 1 : -1;
            }
            return 0;
          });
        }
        return sortableItems;
      }, [items, sortConfig]);

      const requestSort = key => {
        let direction = 'M19 9l-7 7-7-7';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'M19 9l-7 7-7-7') {
          direction = 'M5 15l7-7 7 7';
        }
        setSortConfig({ key, direction });
      }
    
      return { items: sortedItems, requestSort, sortConfig };
    }


  const { items, requestSort, sortConfig } = useSortableData(data);

  

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
 

  return (
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
        <div className="flex justify-between">
          <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
              <div className="flex">
                <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                  <svg
                    width="18"
                    height="18"
                    className="w-4 lg:w-auto"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                      stroke="#455A64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.9993 16.9993L13.1328 13.1328"
                      stroke="#455A64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e)}
                className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px  border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-base text-gray-500 font-thin"
                placeholder="Search by Project Name"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2  border-t-2  bg-opacity-200 bg-gray-200 border-gray-300  text-left text-[11px] text-black tracking-wider">
                <input type="checkbox" className="form-checkbox" />
              </th>
              <th className=" border-b-2 border-r-2 border-t-2 bg-opacity-200 bg-gray-200 border-gray-300 text-left  text-black tracking-wider">
                <button
                  type="button"
                  className={`px-6 py-3 focus:outline-none text-[11px] font-bold`}
                  onClick={() => requestSort("project")}
                >
                  Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-5 float-right  mx-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={getClassNamesFor(
                    "project"
                  )}
                    />
                  </svg>
                </button>
              </th>
              <th className="border-b-2 border-r-2 border-t-2 bg-opacity-200 bg-gray-200 border-gray-300 text-left  text-black tracking-wider">
                <button
                  type="button"
                  className={`px-6 py-3 focus:outline-none text-[11px] font-bold`}
                  onClick={() => requestSort("type")}
                >
                  Type
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-5 float-right  mx-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={getClassNamesFor(
                    "type"
                  )}
                    />
                  </svg>
                </button>
              </th>
              <th className="border-b-2 border-r-2 border-t-2 bg-opacity-200 bg-gray-200 border-gray-300 text-left  text-black tracking-wider">
                <button
                  type="button"
                  className={`px-6 py-3 focus:outline-none text-[11px] font-bold`}
                  onClick={() => requestSort("status")}
                >
                  Status
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-5 float-right  mx-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={getClassNamesFor(
                    "status"
                  )}
                    />
                  </svg>
                </button>
              </th>
              <th className="border-b-2 border-r-2 border-t-2 bg-opacity-200 bg-gray-200 border-gray-300 text-left  text-black tracking-wider">
                <button
                  type="button"
                  className={`px-6 py-3  focus:outline-none text-[11px] font-bold`}
                  onClick={() => requestSort("priority")}
                >
                 Priority
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-5 float-right  mx-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={getClassNamesFor(
                    "priority"
                  )}
                    />
                  </svg>
                </button>
              </th>
              <th className="border-b-2 border-r-2 border-t-2 bg-opacity-200 bg-gray-200 border-gray-300 text-left  text-black tracking-wider">
                <button
                  type="button"
                  className={`px-6 py-3  focus:outline-none text-[11px] font-bold`}
                  onClick={() => requestSort("owner")}
                >
                 Owner
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-5 float-right  mx-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={getClassNamesFor(
                    "owner"
                  )}
                    />
                  </svg>
                </button>
              </th>
              <th className="border-b-2 border-r-2 border-t-2 bg-opacity-200 bg-gray-200 border-gray-300 text-left  text-black tracking-wider">
                <button
                  type="button"
                  className={`px-6 py-3  focus:outline-none text-[11px] font-bold`}
                  onClick={() => requestSort("createdAt")}
                >
                 Created on
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-5 float-right  mx-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={getClassNamesFor(
                    "createdAt"
                  )}
                    />
                  </svg>
                </button>
              </th>
              <th className="border-b-2 border-r-2 border-t-2 bg-opacity-200 bg-gray-200 border-gray-300 text-left  text-black tracking-wider">
                <button
                  type="button"
                  className={`px-6 py-3 focus:outline-none text-[11px] font-bold`}
                  onClick={() => requestSort("dueOn")}
                >
                 Due on
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-5 float-right  mx-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={getClassNamesFor(
                    "dueOn"
                  )}
                    />
                  </svg>
                </button>
              </th>
              <th className="px-6 py-3 border-b-2 border-r-2 border-t-2 bg-opacity-200 bg-gray-200 border-gray-300 text-left text-[11px] leading-4 text-black tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {items.map((data) => (
              <tr key={data.id}>
                <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">
                        <input type="checkbox" className="form-checkbox" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-4 float-right mt-1 mx-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-[11px] font-bold text-blue-900 truncate">
                    {data.project}
                  </div>
                </td>
                <td className="px-6 py-1 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-[11px]  font-bold">
                  {data.type}
                </td>
                <td className="px-6 py-1 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-[11px]  leading-5">
                  <span
                    className={`relative inline-block px-3 py-1 font-semibold ${data.status.textColor} leading-tight`}
                  >
                    <span
                      aria-hidden
                      className={`absolute inset-0 ${data.status.bgColor} opacity-50 rounded-full`}
                    ></span>
                    <span className="relative text-xs">
                      {data.status.value}
                    </span>
                  </span>
                </td>
                <td className="px-6 py-1 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-[11px] font-bold">
                  {data.priority}
                </td>
                <td className="px-6 py-1 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-[11px] font-bold">
                  {data.owner}
                </td>

                <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-[11px] font-bold">
                  {data.createdAt}
                </td>
                <td className="px-6 py-1 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-[11px] font-bold">
                  {data.dueOn}
                </td>
                <td className="pr-3 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <button className="px-10 py-1 border-gray-500 border text-gray-500 rounded transition duration-300 hover:bg-gray-700 hover:text-white focus:outline-none text-[11px]">
                    Edit Project
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ColumnSorting;




// down = 'M19 9l-7 7-7-7'
// up = 'M5 15l7-7 7 7'