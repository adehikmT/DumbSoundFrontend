import React, { useEffect, useState } from "react";
import { Table, Dropdown, Spinner } from "react-bootstrap";
import dayjs from "dayjs";

import "./transaction.css";

// cimponent
import SortBy from "./SelectBy";
// REDUX
import { connect } from "react-redux";
import {
  getAlltransactionCreator,
  patchTransactionCreator,
} from "../../redux/actions/actionTransaction";

const Tables = ({
  loading,
  data,
  getAlltransactionCreator: read,
  patchTransactionCreator: patch,
}) => {
  let admin = false;
  const role = localStorage.role;
  role > 0 ? (admin = true) : (admin = false);

  const [count, setCount] = useState(0);

  const token = localStorage.token;

  useEffect(() => {
    read(token);
  }, [count]);

  const betweenDay = (date) => {
    let limitDay = dayjs(date);
    let theDay = dayjs().format("YYYY/MM/DD");
    return limitDay.diff(theDay, "day");
  };

  const handelClick = async (id, type) => {
    if (type === 1) {
      var start = dayjs().format("YYYY/MM/DD");
      var due = dayjs().day(35).format("YYYY/MM/DD");
      await patch(
        { startDate: start, dueDate: due, status: "approve", statusPay: 1 },
        id,
        token
      );
      setCount(count + 1);
    } else {
      if (type === 2) {
        await patch(
          { dueDate: "2020/01/01", status: "cencle", statusPay: 2 },
          id,
          token
        );
        setCount(count + 1);
      }
    }
  };

  const Load = (load) => {
    if (load) {
      return (
        <Spinner
          as="span"
          size="sm"
          animation="border"
          role="status"
          arial-hidden="true"
        />
      );
    } else {
      return null;
    }
  };

  const Aksi = (admin, id) => {
    if (admin) {
      return (
        <>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="down">
              {Load(loading)}
            </Dropdown.Toggle>
            <Dropdown.Menu className="bg-dark">
              <Dropdown.Item
                onClick={() => handelClick(id, 1)}
                style={{ color: "#0ACF83" }}
              >
                Aprove
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handelClick(id, 2)}
                style={{ color: "#FF0000" }}
              >
                Cencle
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
    <SortBy/>
      <Table striped hover variant="dark">
        <thead className="Thead">
          <tr>
            <th>No</th>
            <th>User</th>
            <th>Bukrti Transaksi</th>
            <th>Remaining Aktif</th>
            <th>Status User</th>
            <th>Status Payment</th>
            {admin ? <th>Aksi</th> : null}
          </tr>
        </thead>
        <tbody>
          {data !== null && data.length > 0
            ? data.map((trans, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{trans.user.fullName}</td>
                    <td>{trans.attache}</td>
                    <td>
                      {betweenDay(trans.dueDate) > 0
                        ? betweenDay(trans.dueDate)
                        : 0}{" "}
                      / Hari
                    </td>
                    <td
                      style={{
                        color: trans.statusPay === 1 ? "#0ACF83" : "#FF0742",
                      }}
                    >
                      {trans.statusPay === 1 ? "Active" : "Non Active"}
                    </td>
                    <td
                      style={{
                        color:
                          trans.status === "approve"
                            ? "#0ACF83"
                            : trans.status === "pending"
                            ? "#F7941E"
                            : "#FF0742",
                      }}
                    >
                      {trans.status}
                    </td>
                    <td>{Aksi(admin, trans.id)}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </>
  );
};

const mapStateToProps = (state) => {
  const { loading, data } = state.transactionReducer;
  return {
    loading,
    data,
  };
};

export default connect(mapStateToProps, {
  getAlltransactionCreator,
  patchTransactionCreator,
})(Tables);
