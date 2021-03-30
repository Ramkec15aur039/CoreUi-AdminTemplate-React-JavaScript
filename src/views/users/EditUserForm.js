import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "../../reusable";
import { useState, useEffect } from "react";


const EditUserForms = (props) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);
  //console.log("Props from user:",propsFirstName);
  // let propsInitial = props.name;
  // const [firstNameProps, setFirstNameProps] = useState(propsInitial);
  const [firstName, setFirstName] = useState("");



//   const handleSubmit = () => {
//     let user = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       officePhone: officePhone,
//       mobile: mobile,
//       fax: fax,
//     };
//     console.log("From AddUserForm:", user);
//     postUserData(user).then((res) => {
//       if (responseHandler(res)) {
//         alert("Submitted Successfully");
//       }
//     });
//   };

const handleChange = (e) => {
  const targetName = e.target.name;
  const value = e.target.value;

  if (targetName === "firstName") {
    setFirstName(value);
  }
}

  return (
    <>
      <CRow>
        <CCol lg="12" xs="12" sm="6">
          <CCard>
            <CCardHeader>
             Edit User
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
              <CForm>
                <CFormGroup>
                  <CLabel htmlFor="company">First Name</CLabel>
                  <CInput
                    id="company"
                    placeholder="Enter First Name"
                    name="firstName"
                    onChange={handleChange}
                    value={firstName}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Last Name</CLabel>
                  <CInput
                    id="vat"
                    placeholder="Enter Last Name"
                    name="lastName"
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="street">Email</CLabel>
                  <CInput
                    id="street"
                    placeholder="Enter Email"
                    name="email"
                  />
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="4">
                    <CFormGroup>
                      <CLabel htmlFor="city">Office Phone</CLabel>
                      <CInput
                        id="city"
                        placeholder="Office Phone Number"
                        name="officePhone"
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="8">
                    <CFormGroup>
                      <CLabel htmlFor="postal-code">Mobile</CLabel>
                      <CInput
                        id="postal-code"
                        placeholder="Mobile Number"
                        name="mobile"
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="country">Fax</CLabel>
                  <CInput
                    id="country"
                    placeholder="Fax"
                    name="fax"
                  />
                </CFormGroup>
                <CButton type="submit" color="primary">
                  Submit
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default EditUserForms;