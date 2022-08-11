import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Table } from "antd";
import moment from "moment";
import ApiCalendar from 'react-google-calendar-api';
const config = {
  "clientId": "668190521401-tjh865dt3jitlonsgbe0afncfbc8u8d4.apps.googleusercontent.com",
  "apiKey": "AIzaSyBFyPKmHPdQfIRfAlmb5JBzyCGBFfDygUo",
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}
const apiCalendar = new ApiCalendar(config);


function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);
  const dispatch = useDispatch();
  
  // const schedule = async () => {
  //   const eventFromNow = {
  //     summary: 'TEST',
  //     time: 480,
  //   };
  //   apiCalendar.createEventFromNow(eventFromNow)
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  const getAppointmentsData = async () => {
    try {
      dispatch(showLoading());
      const resposne = await axios.get(
        "/api/doctor/get-appointments-by-doctor-id",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (resposne.data.success) {
        setAppointments(resposne.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  const changeAppointmentStatus = async (record, status) => {
    try {
      dispatch(showLoading());
      const resposne = await axios.post(
        "/api/doctor/change-appointment-status",
        { appointmentId : record._id, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (resposne.data.success) {
        toast.success(resposne.data.message);
        const eventFromNow = {
          summary: 'TEST',
          time: 480,
        };
        await apiCalendar.handleAuthClick();

        apiCalendar.createEventFromNow(eventFromNow)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });

        //getAppointmentsData();
      }
    } catch (error) {
      toast.error("Error changing doctor account status");
      dispatch(hideLoading());
    }
  };
  const columns = [
    {
      title: "Patient",
      dataIndex: "name",
      render: (text, record) => <span>{record.userInfo.name}</span>,
    },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      render: (text, record) => (
        <span>
          {moment(record.date).format("DD-MM-YYYY")}{" "}
          {moment(record.time).format("HH:mm")}
        </span>
      ),
    },
    {
      title: "Symptoms",
      dataIndex: "createdAt",
      render: (text, record) => (
        <span>
          {record.symptoms}
        </span>
      ),
    },
    {
      title: "Type of Visit",
      dataIndex: "createdAt",
      render: (text, record) => (
        <span>
          {record.typeOfVisit}
        </span>
      ),
    },
    {
      title: "Type of Consultation",
      dataIndex: "createdAt",
      render: (text, record) => (
        <span>
          {record.typeOfConsultation}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" && (
            <div className="d-flex">
              <h1
                className="anchor px-2"
                onClick={() => changeAppointmentStatus(record, "approved")}
              >
                Approve
              </h1>
              <h1
                className="anchor"
                onClick={() => changeAppointmentStatus(record, "rejected")}
              >
                Reject
              </h1>
            </div>
          )}
        </div>
      ),
    },
  ];
  useEffect(() => {
    getAppointmentsData();
  }, []);
  return (
    <Layout>
      <h1 className="page-header">Appointments</h1>
      <hr />
      <Table columns={columns} dataSource={appointments} />
    </Layout>
  );
}

export default DoctorAppointments;
