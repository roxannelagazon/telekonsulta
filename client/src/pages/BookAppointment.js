import { Button, Col, DatePicker, Form, Input, Row, TimePicker, Radio } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import DoctorForm from "../components/DoctorForm";
import moment from "moment";
const { TextArea } = Input;

function BookAppointment() {
  const [isAvailable, setIsAvailable] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const { user } = useSelector((state) => state.user);
  const [doctor, setDoctor] = useState(null);
  const [symptoms, setSymptoms] = useState();
  const [typeOfVisit, setTypeOfVisit] = useState();
  const [typeOfConsultation, setTypeOfConsult] = useState();
  const params = useParams();
  const dispatch = useDispatch();

  const symptomsUpdate=(event)=>{ // Dealing with name field changes to update our state
    setSymptoms(event.target.value)
  }

  const visitUpdate=(event)=>{ // Dealing with name field changes to update our state
    setTypeOfVisit(event.target.value)
  }

  const consultUpdate=(event)=>{ // Dealing with name field changes to update our state
    setTypeOfConsult(event.target.value)
  }

  var days_arr = [];
  var time1;
  var time2;
  const daysAvailable = [0,1,2,3,4,5,6];
  const daysAvailableWord = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var daysString = '';

  const disableTimeAndDate = (timings, days) => {
    // console.log(timings);
    // console.log(days);
    const arrOfNum = days.map(str => {
      return Number(str);
    });
    days_arr = daysAvailable.filter( ( el ) => !arrOfNum.includes( el ) );
    time1 = moment(timings[0], "HH:mm").format("HH");
    time2 = moment(timings[1], "HH:mm").format("HH");
    console.log(time2)
    for (let i = 0; i < days.length; i++) {
      if (i < (days.length-1)) {
        daysString += daysAvailableWord[days[i]] + " | ";
      } else {
        daysString += daysAvailableWord[days[i]];
      }
    }
  };

  const disabledDate = (current) => {
    var tempArr = [];
    for (let i = 0; i < days_arr.length; i++) {
        tempArr.push(moment(current).day() === days_arr[i]);
    }
    return tempArr.includes(true);
  };

  const disabledHours = () => {
    const hours = [];
    const currentHour = moment().hour();

    // first loop will disable time slots less than the value
    for (let i = time1 - 1 ; i >= 0; i--) {
      hours.push(i);
    }
    // 2nd loop will disable time slots onwards the value
    for (let i = time2; i <= 24; i++) {
      hours.push(i);
    }

    return hours;
  };

  const getDoctorData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/doctor/get-doctor-info-by-id",
        {
          doctorId: params.doctorId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {
        setDoctor(response.data.data);
      }
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    }
  };
  const checkAvailability = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/check-booking-avilability",
        {
          doctorId: params.doctorId,
          date: date,
          time: time,
          symptoms: symptoms,
          typeOfVisit: typeOfVisit,
          typeOfConsultation: typeOfConsultation,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        setIsAvailable(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(hideLoading());
    }
  };
  const bookNow = async () => {
    setIsAvailable(false);
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctor,
          userInfo: user,
          date: date,
          time: time,
          symptoms: symptoms,
          typeOfVisit: typeOfVisit,
          typeOfConsultation: typeOfConsultation,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {
        
        toast.success(response.data.message);
        navigate('/appointments')
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getDoctorData();
  }, []);
  return (
    <Layout>
      {doctor && (
        <div>
          {disableTimeAndDate(doctor.timings, doctor.days)}
          <h1 className="page-title">
            {doctor.firstName} {doctor.lastName}
          </h1>
          <hr />
          <Row gutter={20} className="mt-5" align="middle">

            <Col span={8} sm={24} xs={24} lg={8}>
              <img
                src="https://thumbs.dreamstime.com/b/finger-press-book-now-button-booking-reservation-icon-online-149789867.jpg"
                alt=""
                width="100%"
                height='400'
              />
            </Col>
            <Col span={8} sm={24} xs={24} lg={8}>
              <h1 className="normal-text">
                <b>Days Available:</b> {daysString}
              </h1>
              <h1 className="normal-text">
                <b>Time Slot :</b> {doctor.timings[0]} - {doctor.timings[1]}
              </h1>
              <p>
                <b>Phone Number : </b>
                {doctor.phoneNumber}
              </p>
              <p>
                <b>Address : </b>
                {doctor.address}
              </p>
              <p>
                <b>Fee per Visit : </b>
                {doctor.feePerCunsultation}
              </p>
              <Form layout="vertical">
                <div className="d-flex flex-column pt-2 mt-2">
                <Form.Item 
                  required
                  label= 'Date:'>
                    <DatePicker
                    disabledDate={disabledDate}
                    style={{ width: '100%'}}
                    format="DD-MM-YYYY"
                    onChange={(value) => {
                      setDate(moment(value).format("DD-MM-YYYY"));
                      setIsAvailable(false);
                      }}
                    />
                </Form.Item>
                <Form.Item 
                  required
                  label= 'Time:'>
                    <TimePicker
                    disabledHours={disabledHours}
                    style={{ width: '100%'}}
                    format="HH:mm"
                    className="mt-3"
                    onChange={(value) => {
                      setIsAvailable(false);
                      setTime(moment(value).format("HH:mm"));
                      }}
                    />
                </Form.Item>
                <Form.Item 
                  required
                  label= 'Symptoms:'
                  name= "symptoms">
                  <TextArea rows={4} onChange={symptomsUpdate} placeholder="Headache, fatigue, nausea, pain, etc..."/>
                </Form.Item>
                <Form.Item 
                  required
                  label="Type of Visit:" 
                  name="typeOfVisit">
                  <Radio.Group onChange={visitUpdate}>
                    <Radio.Button value="new">New</Radio.Button>
                    <Radio.Button value="revisit">Revisit</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item 
                  required
                  label="Type of Consultation:" 
                  name="typeOfConsultation">
                  <Radio.Group onChange={consultUpdate}>
                    <Radio.Button value="f2f">Face-to-Face</Radio.Button>
                    <Radio.Button value="teleconsultation">Teleconsultation</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              {!isAvailable &&   <Button
                  className="primary-button mt-3 full-width-button"
                  onClick={checkAvailability}
                >
                  Check Availability
                </Button>}

                {isAvailable && (
                  <Button
                    className="primary-button mt-3 full-width-button"
                    onClick={bookNow}
                  >
                    Book Now
                  </Button>
                )}
                </div>
              </Form>    
            </Col>
           
          </Row>
        </div>
      )}
    </Layout>
  );
}

export default BookAppointment;
