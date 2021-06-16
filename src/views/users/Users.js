import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow, CPagination, CSpinner } from "@coreui/react";

import { getUsers } from "../../actions/users";

const Users = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const users = useSelector((state) => state.users.users);

  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`);
  };

  useEffect(() => {
    setLoading(true);
    (async () => {
      await dispatch(getUsers());
      setLoading(false);
    })();
  }, [dispatch]);

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>Users</CCardHeader>
          <CCardBody>
            {loading ? (
              <div className="d-flex justify-content-center align-items-center">
                <CSpinner />
              </div>
            ) : (
              <>
                <CDataTable
                  items={users}
                  fields={[
                    { key: "first_name", sorter: false },
                    { key: "last_name", sorter: false },
                    { key: "registered", sorter: true },
                    { key: "gender", sorter: false },
                    { key: "ip_address", sorter: true },
                  ]}
                  hover
                  sorter
                  striped
                  itemsPerPage={5}
                  activePage={page}
                  clickableRows
                  onRowClick={(item) => history.push(`/users/${item.id}`)}
                />
                <CPagination
                  pages={users.length ? Math.ceil(users.length / 5) : 1}
                  doubleArrows={false}
                  align="center"
                  activePage={page}
                  onActivePageChange={pageChange}
                />
              </>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Users;
