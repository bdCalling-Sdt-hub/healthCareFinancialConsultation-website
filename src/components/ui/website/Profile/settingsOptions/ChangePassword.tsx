import { Form, Input, Button } from "antd";

const ChangePassword = () => {
  const [form] = Form.useForm();

  //   const [changePassword, { isLoading }] = useChangePasswordMutation();

  const onFinish = async (values: any) => {
    //     try {
    //     //   const res = await changePassword(values).unwrap();
    //     //   if (res.success) {
    //     //     toast.success(res?.message);
    //     //     form.resetFields();
    //     //   }
    //     // } catch (error: any) {
    //     //   toast.error(error?.data?.message || 'Something went wrong');
    //     // }
  };

  return (
    <div className="w-full space-y-3  max-w-lg p-7 bg-white shadow-md rounded-lg border border-[#032237]">
      <Form
        requiredMark={false}
        layout="vertical"
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Old Password"
          name="currentPassword"
          rules={[
            { required: true, message: "Please input your old password!" },
          ]}
        >
          <Input.Password style={{ height: 45 }} />
        </Form.Item>

        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[
            { required: true, message: "Please input your new password!" },
          ]}
        >
          <Input.Password style={{ height: 45 }} />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={["newPassword"]}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input.Password style={{ height: 45 }} />
        </Form.Item>

        <Form.Item style={{ textAlign: "end" }}>
          <Button
            className="!bg-gradientBg !py-5 !rounded-xl !shadow-lg !font-bold !px-6"
            htmlType="submit"
          >
            Change Password
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChangePassword;
