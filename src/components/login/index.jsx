import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/shop");
  };
  return (
    <>
      <div className="mx-auto text-start w-50 border border-4 rounded-3 border-dark p-5 my-3">
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors?.email?.type === "required" && (
                <p className="text-danger">this field is required</p>
              )}
            </Col>
          </Form.Group>

          {/* password */}
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
                  },
                })}
              />
              {errors?.password?.type === "required" && (
                <p className="text-danger">this field is required</p>
              )}
              {errors?.password?.type === "pattern" && (
                <p className="text-danger">
                  Min eight characters, at least one letter, one number and one
                  special character
                </p>
              )}
            </Col>
          </Form.Group>

          {/* submit */}
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Register</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Login;
