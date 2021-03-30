import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

import usersData from "./UsersData";
import { DocsLink } from "src/reusable";
import EditUserForms from "./EditUserForm"

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const Users = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);
  const [testState, setTestState] = useState([]);
  const [clickableRow, setClickableRow] = useState(true);
  console.log("From test state:", testState);
  const [large, setLarge] = useState(false);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  return (
    <>
      <CRow>
        <CCol xl={6}>
          <CCard>
            <CCardHeader>
              Users
              <small className="text-muted"> example</small>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={[
                  { key: "name", _classes: "font-weight-bold" },
                  "registered",
                  "role",
                  "status",
                  "actions",
                ]}
                hover
                striped
                itemsPerPage={5}
                activePage={page}
                clickableRows
                onRowClick={(item) =>
                  clickableRow ? history.push(`/users/${item.id}`) : null
                }
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                  actions: (item) => (
                    <td>
                      <CButton
                        onMouseLeave={() => setClickableRow(true)}
                        onMouseEnter={() => setClickableRow(false)}
                        onClick={() => {
                          setTestState(item)
                          setLarge(!large)
                        }}
                      >
                        Add
                      </CButton>
                    </td>
                  ),
                }}
              />
              <CPagination
                activePage={page}
                onActivePageChange={pageChange}
                pages={5}
                doubleArrows={false}
                align="center"
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      {/* ================ Model ==================== */}

      <CRow>
        <CCol>
          <CCard>   
            <CCardBody>
              <CModal show={large} onClose={() => setLarge(!large)} size="lg">
                <CModalHeader closeButton>
                  <CModalTitle>Edit user</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <EditUserForms name = {testState.name}/>
                </CModalBody>
              </CModal>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Users;
