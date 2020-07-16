import React, { useState } from "react";
// child compoent
import TableTransaction from "../component/transaction";
import Header from "../component/header";
import LodBars from "../component/loader/Bars";

const Transaction = () => {
  document.title = "Transaction";
  const [loadPage, setLoadPage] = useState(true);
  setTimeout(() => {
    setLoadPage(false);
  }, 2000);

  return (
    <>
      {loadPage ? (
        <LodBars />
      ) : (
        <>
          <Header />
          <TableTransaction />
        </>
      )}
    </>
  );
};

export default Transaction;
