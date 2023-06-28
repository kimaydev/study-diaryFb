import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Radio,
  Upload,
} from "antd";
import axios from "axios";

const normFile = e => {
  console.log("업로드 되는 파일목록 이에요.");
  console.log(e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const SignUp = () => {
  // 코드 자리
  // Modal 관련 state
  const [modalMessage, setModalMessage] = useState(""); // 메세지
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Select 관련 state
  const 서버셀렉트목록 = [
    { value: "jack", label: "너는 잭이야" },
    { value: "lucy", label: "너는 루시야" },
    { value: "Yiminghe", label: "너는 야밍해야" },
    { value: "disabled", label: "보이지마", disabled: true },
  ];
  const [cateList, setCateList] = useState(서버셀렉트목록);

  // 업로드 관련
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState("");
  // 이미지 미리보기 모달창 state
  const [previewOpen, setPreviewOpen] = useState(false);
  // 모달창에 출력할 타이틀 state
  const [previewTitle, setPreviewTitle] = useState("");

  const getBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  // 이미지 미리보기 모달 닫기
  const handleCancelPreview = () => {
    setPreviewOpen(false);
  };

  // 폼 전송 관련
  const onFinish = values => {
    console.log("Success:", values);
  };
  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row justify="center" align="top">
      <Form
        name="signup"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 1200,
        }}
        layout="horizontal"
        initialValues={{
          remember: false,
          cate: "lucy",
          age: "a",
        }}
        // 실제로 post 하는 핸들러함수
        onFinish={onFinish}
        // 데이터 전송 실패한 경우 핸들러함수
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="아이디"
          name="username"
          rules={[
            {
              required: true,
              message: "사용자 아이디를 입력해주세요.",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label="Select" name="cate">
          <Select options={cateList}></Select>
        </Form.Item>

        <Form.Item label="Radio" name="age">
          <Radio.Group
            buttonStyle="solid"
            options={cateList}
            optionType="button"
          ></Radio.Group>
        </Form.Item>

        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            action="/upload.do"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 3 ? null : <Button>업로드</Button>}
          </Upload>
          {/* 이미지 미리보기 모달 */}
          <Modal
            open={previewOpen}
            // title={previewTitle}
            footer={null}
            onCancel={handleCancelPreview}
          >
            <img
              alt="example"
              style={{
                width: "100%",
              }}
              src={previewImage}
            />
          </Modal>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {/* Modal */}
      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <p>{modalMessage}</p>
      </Modal>
    </Row>
  );
};

export default SignUp;
