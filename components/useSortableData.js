// import React,{useState, useMemo} from 'react';


// export const useSortableData = (items, config = null) => {
//     const [sortConfig, setSortConfig] = useState(config);

//     const sortedItems = useMemo(() => {
//         let sortableItems = [...items];
//         if (sortConfig !== null) {
//           sortableItems.sort((a, b) => {
//             if (a[sortConfig.key] < b[sortConfig.key]) {
//               return sortConfig.direction === 'M19 9l-7 7-7-7' ? -1 : 1;
//             }
//             if (a[sortConfig.key] > b[sortConfig.key]) {
//               return sortConfig.direction === 'M19 9l-7 7-7-7' ? 1 : -1;
//             }
//             return 0;
//           });
//         }
//         return sortableItems;
//       }, [items, sortConfig]);
    
//       const requestSort = key => {
//         let direction = 'M19 9l-7 7-7-7';
//         if (sortConfig && sortConfig.key === key && sortConfig.direction === 'M19 9l-7 7-7-7') {
//           direction = 'M5 15l7-7 7 7';
//         }
//         setSortConfig({ key, direction });
//       }
    
//       return { items: sortedItems, requestSort, sortConfig };
//     }


//     export default useSortableData;