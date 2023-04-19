// import {
//   TransactionItem,
//   TitleText,
//   Text,
//   TextSum,
//   DeleteBtn,
//   EditBtnMobile,
//   IconBtnMobile,
// } from '../TransactionMobile.styled';

// import EllipsisText from 'react-ellipsis-text';

// const TransactionMobile = row => {
//   const [expandedRows, setExpandedRows] = useState({});

//   return (
//     <>
//       <TransactionItem type={row.type.toString()}>
//         <TitleText>Date:</TitleText> <Text>{formatDate(row.date)}</Text>
//       </TransactionItem>
//       <TransactionItem type={row.type.toString()}>
//         <TitleText>Type:</TitleText>
//         {row.type.toString() === 'true' ? <Text>+</Text> : <Text>-</Text>}
//       </TransactionItem>
//       <TransactionItem type={row.type.toString()}>
//         <TitleText>Category:</TitleText>
//         <Text>
//           {row.type.toString() === 'true' ? (
//             <Text>Income</Text>
//           ) : (
//             <Text>{row.category}</Text>
//           )}
//         </Text>
//       </TransactionItem>
//       <TransactionItem type={row.type.toString()}>
//         <TitleText>Comment:</TitleText>
//         <Text>
//           {row.comment ? (
//             <EllipsisText
//               className="cursor"
//               onClick={() => toggleRow(row._id)}
//               text={row.comment}
//               length={expandedRows[row._id] ? 100 : 15}
//             />
//           ) : (
//             '-'
//           )}
//         </Text>
//       </TransactionItem>
//       <TransactionItem type={row.type.toString()}>
//         <TitleText>Sum:</TitleText>
//         <TextSum type={row.type.toString()}>
//           {row.sum
//             .toLocaleString('ru-RU', {
//               minimumIntegerDigits: 1,
//               minimumFractionDigits: 2,
//               maximumFractionDigits: 2,
//               useGrouping: true,
//             })
//             .replace(',', '.')}
//         </TextSum>
//       </TransactionItem>
//       <TransactionItem type={row.type.toString()}>
//         <DeleteBtn
//           // onClick={handleDelete(row._id)}
//           // disabled={isDeleting}
//           onClick={() => dispatch(deleteTransaction(row._id))}
//         >
//           Delete
//           {/* {isLoading ? 'Deleting' : 'Delete'} */}
//           {/* {isDeleting ? 'Deleting' : 'Delete'} */}
//         </DeleteBtn>
//         <EditBtnMobile onClick={() => handleEdit(row._id)}>
//           <IconBtnMobile src={icon} alt="edit" />
//           Edit
//         </EditBtnMobile>
//       </TransactionItem>
//     </>
//   );
// };

// export default TransactionMobile;
