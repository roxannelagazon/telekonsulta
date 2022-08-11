import React from "react";
import { Button, Col, Form, Input, Row, TimePicker, DatePicker, Checkbox, Upload, Select, message } from "antd";
import { UploadOutlined } from '@ant-design/icons';
// import ImgCrop from 'antd-img-crop';
import Multiselect from 'multiselect-react-dropdown';
import moment from "moment";
import { CloudUploadOutlined} from '@ant-design/icons';

const props = {
  name: 'file',
  action: 'http://run.mocky.io/v3/eb1f4ac5-db94-4b5f-b3f7-d29306fc0efd',
  headers: {
    authorization: 'authorization-text',
  },

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

// const daysArr = {
//   options: [{name: 'Sunday', id: 0},{name: 'Monday', id: 1},{name: 'Tuesday', id: 2},{name: 'Wednesday', id: 3},{name: 'Thursday', id: 4},{name: 'Friday', id: 5},{name: 'Saturday', id: 6}]
// };
// const daysAvailable = [0,1,2,3,4,5,6];
// var daysSelected = [];

// function onSelect(selectedList, selectedItem) {
//   daysSelected = [];
//   for (let i = 0; i < selectedList.length; i++) {
//     daysSelected.push(selectedList[i].id);
//   }
//   daysSelected = daysAvailable.filter( ( el ) => !daysSelected.includes( el ) );
//   console.log(daysSelected);
// }

const { Option } = Select;
const daysArr = [
  <Option key='0'>Sunday</Option>,
  <Option key='1'>Monday</Option>,
  <Option key='2'>Tuesday</Option>,
  <Option key='3'>Wednesday</Option>,
  <Option key='4'>Thursday</Option>,
  <Option key='5'>Friday</Option>,
  <Option key='6'>Saturday</Option>
];

const handleChange = (value) => {
  console.log(`selected ${value}`);
};


function DoctorForm({ onFinish, initivalValues }) {
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        ...initivalValues,
        ...(initivalValues && {
          timings: [
            moment(initivalValues?.timings[0], "HH"),
            moment(initivalValues?.timings[1], "HH"),
          ],
        }),
      }}
      encType="multipart/form-data"
      method="post"
    >
      <h1 className="card-title mt-3">Personal Information</h1>
      <Row gutter={20}>
      <Col span={8} xs={24} sm={24} lg={8}>
      <Form.Item
        required
        label="Avatar"
        name="avatar"
        rules={[{ required: true }]}
      >
        <Input type="file" name="avatar" />
      </Form.Item>
       </Col>
      </Row>
      <Row gutter={20}>
      
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="First Name"
            name="firstName"
            rules={[{ required: true }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Last Name"
            name="lastName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true }]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Address"
            name="address"
            rules={[{ required: true }]}
          >
            <Input placeholder="Address" />
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <h1 className="card-title mt-3">Professional Information</h1>
      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Specialization"
            name="specialization"
            rules={[{ required: true }]}
          >
            <Input placeholder="Specialization" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Hospital Name"
            name="hospital"
            rules={[{ required: true }]}
          >
            <Input placeholder="Hospital" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Experience"
            name="experience"
            rules={[{ required: true }]}
          >
            <Input placeholder="Experience" type="number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Fee Per Cunsultation"
            name="feePerCunsultation"
            rules={[{ required: true }]}
          >
            <Input placeholder="Fee Per Cunsultation" type="number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Timings"
            name="timings"
            rules={[{ required: true }]}
          >
            <TimePicker.RangePicker format="HH" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Days"
            name="days"
            rules={[{ required: true }]}
          >
            <Select
            mode="multiple"
            allowClear
            style={{
              width: '100%',
            }}
            placeholder="Please select days available"
            onChange={handleChange}
          >
            {daysArr}
          </Select>
          </Form.Item>
        </Col>
      </Row>

      <div className="d-flex justify-content-end">
        <Button className="primary-button" htmlType="submit">
          SUBMIT
        </Button>
      </div>
    </Form>

  );
}

export default DoctorForm;
