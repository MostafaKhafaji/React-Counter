import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const Register = () => {
  const navigate = useNavigate();

  const track = [
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "testing", label: "Testing" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/login");
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
                  // pattern: {
                  //   value:
                  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
                  // },
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

          {/* confirm password */}
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalConfPassword"
          >
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("confPassword", {
                  required: true,
                  validate: (value) => value === getValues("password"),
                })}
              />
              {errors?.confPassword?.type === "required" && (
                <p className="text-danger">this field is required</p>
              )}
              {errors?.confPassword?.type === "validate" && (
                <p className="text-danger">passwords must match</p>
              )}
            </Col>
          </Form.Group>

          {/* track */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Track
            </Form.Label>
            <Col sm={10}>
              <Controller
                name="select"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    {...field}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={[track[3]]}
                    isMulti
                    options={track}
                  />
                )}
              />
              {errors?.select?.type === "required" && (
                <p className="text-danger">
                  you have to select atleast one track
                </p>
              )}
            </Col>
          </Form.Group>

          {/* gender */}
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Gender
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="male"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  value="male"
                  {...register("gender")}
                />
                <Form.Check
                  type="radio"
                  label="female"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  value="female"
                  {...register("gender")}
                />
              </Col>
            </Form.Group>
          </fieldset>

          {/* Color */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Color
            </Form.Label>
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Red" value="red" {...register("color")} />
              <Form.Check
                label="Yellow"
                value="yellow"
                {...register("color")}
              />
              <Form.Check label="Blue" value="blue" {...register("color")} />
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

export default Register;
